const generateBtn = document.getElementById("generateBtn");
const storyInput = document.getElementById("storyInput");
const outputBox = document.getElementById("outputBox");

generateBtn.addEventListener("click", async () => {
  const story = storyInput.value.trim();

  if (!story) {
    outputBox.innerHTML = "⚠️ Please enter a story first.";
    return;
  }

  outputBox.innerHTML = "🎬 Analyzing story with CineGenie...";

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

    outputBox.innerHTML = `
<pre style="white-space: pre-wrap; font-family: inherit;">
${data.result}
</pre>
`;
  } catch (error) {
    outputBox.innerHTML =
      "❌ Error connecting to Gemini API.";
    console.error(error);
  }
});
