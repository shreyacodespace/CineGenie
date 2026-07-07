const generateBtn = document.getElementById("generateBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const storyInput = document.getElementById("storyInput");
const outputBox = document.getElementById("outputBox");

const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Loading animation steps
const loadingSteps = [
  "🎬 Director is reading the script...",
  "📷 Cinematographer planning the shots...",
  "💡 Lighting Designer setting the mood...",
  "🎨 Colorist creating the palette...",
  "🎵 Composer writing the soundtrack..."
];

let loadingInterval;

// Generate AI Analysis
generateBtn.addEventListener("click", async () => {

  const story = storyInput.value.trim();

  if (!story) {
    outputBox.innerHTML = "⚠️ Please enter a story first.";
    return;
  }

  let step = 0;
clearInterval(loadingInterval);
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
    loadingInterval = null;

    outputBox.innerHTML = `
<pre style="white-space: pre-wrap; font-family: inherit;">
${data.result}
</pre>
`;

  } catch (error) {

    clearInterval(loadingInterval);
    loadingInterval = null;

    outputBox.innerHTML =
      "❌ Unable to connect to CineGenie AI.";

    console.error(error);

  }

});

// Copy Analysis
copyBtn.addEventListener("click", async () => {

  const text = outputBox.innerText;

  await navigator.clipboard.writeText(text);

  copyBtn.innerText = "✅ Copied!";

  setTimeout(() => {
    copyBtn.innerText = "📋 Copy Analysis";
  }, 2000);

});

// Download Analysis
downloadBtn.addEventListener("click", () => {

  const text = outputBox.innerText;

  const blob = new Blob([text], {
    type: "text/plain"
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);

  link.download = "CineGenie_Analysis.txt";

  link.click();

});

// Random Film Concepts
const filmConcepts = [

"A retired lighthouse keeper receives letters from his daughter who disappeared twenty years ago, each one arriving on the anniversary of the storm that took her away.",

"An ambitious violinist discovers that every melody she performs briefly reveals moments from the future.",

"A lonely train conductor finds a forgotten suitcase that changes owners every midnight, carrying secrets from different lives.",

"Two childhood friends reunite at their abandoned school before it is demolished, uncovering memories neither of them remembers the same way.",

"A young photographer notices that every sunset she captures contains the silhouette of a mysterious stranger watching from afar.",

"During a city-wide blackout, strangers trapped in a library share stories that slowly reveal they are all connected by one forgotten event.",

"A young astronaut wakes up alone on Mars to discover someone has already built a small wooden cabin waiting for her.",

"A forgotten movie theatre begins showing films that reveal scenes from the audience's future.",

"A detective investigates a town where every clock stops at exactly 7:17 PM every evening.",

"A grandmother leaves behind a recipe book whose pages reveal memories instead of ingredients."

];

// Surprise Button
surpriseBtn.addEventListener("click", () => {

  const random =
    filmConcepts[Math.floor(Math.random() * filmConcepts.length)];

  storyInput.value = random;

  storyInput.focus();

});
