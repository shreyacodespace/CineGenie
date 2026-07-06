const generateBtn = document.getElementById("generateBtn");
const storyInput = document.getElementById("storyInput");
const outputBox = document.getElementById("outputBox");

// Loading animation steps
const loadingSteps = [
  "🎬 Director is reading the script...",
  "📷 Cinematographer planning the shots...",
  "💡 Lighting Designer setting the mood...",
  "🎨 Colorist creating the palette...",
  "🎵 Composer writing the soundtrack..."
];

let loadingInterval;

generateBtn.addEventListener("click", async () => {
  const story = storyInput.value.trim();

  if (!story) {
    outputBox.innerHTML = "⚠️ Please enter a story first.";
    return;
  }

  let step = 0;

  outputBox.innerHTML = loadingSteps[0];

  loadingInterval = setInterval(() => {
    step = (step + 1) % loadingSteps.length;
    outputBox.innerHTML = loadingSteps[step];
  }, 1400);

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        story
      })
    });

    const data = await response.json();

    clearInterval(loadingInterval);

    outputBox.innerHTML = `
<pre style="white-space: pre-wrap; font-family: inherit;">
${data.result}
</pre>
`;

  } catch (error) {

    clearInterval(loadingInterval);

    outputBox.innerHTML =
      "❌ Unable to connect to CineGenie AI.";

    console.error(error);
  }
});
