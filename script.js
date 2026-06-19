

const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", generateCinematicVision);

async function generateCinematicVision() {

```
const story =
    document.getElementById("storyInput").value.trim();

if (!story) {
    alert("Please enter a story first.");
    return;
}

document.getElementById("loading").style.display = "block";

resetOutput();

try {

    const prompt = `
```

You are CineGenie AI, an expert cinematography and filmmaking assistant.

Analyze the story below and return ONLY valid JSON.

Use this exact structure:

{
"mood": "",
"camera": "",
"lighting": "",
"color": "",
"music": "",
"notes": "",
"shotlist": ""
}

Story:
${story}

Instructions:

* Give practical filmmaking advice.
* Be concise but useful.
* Shotlist should contain 5 cinematic shots.
* Director notes should feel professional.
  `;

  ````
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        }
    );

    const data = await response.json();

    const rawText =
        data.candidates[0].content.parts[0].text;

    const cleanedText = rawText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    const result = JSON.parse(cleanedText);

    document.getElementById("mood").textContent =
        result.mood;

    document.getElementById("camera").textContent =
        result.camera;

    document.getElementById("lighting").textContent =
        result.lighting;

    document.getElementById("color").textContent =
        result.color;

    document.getElementById("music").textContent =
        result.music;

    document.getElementById("notes").textContent =
        result.notes;

    document.getElementById("shotlist").textContent =
        result.shotlist;
  ````

  }

  catch(error) {

  ```
    console.error(error);

    document.getElementById("notes").textContent =
        "Something went wrong while contacting Gemini.";
  ```

  }

  document.getElementById("loading").style.display =
  "none";
  }

function resetOutput() {

```
document.getElementById("mood").textContent =
    "Analyzing...";

document.getElementById("camera").textContent =
    "Analyzing...";

document.getElementById("lighting").textContent =
    "Analyzing...";

document.getElementById("color").textContent =
    "Analyzing...";

document.getElementById("music").textContent =
    "Analyzing...";

document.getElementById("notes").textContent =
    "Analyzing...";

document.getElementById("shotlist").textContent =
    "Analyzing...";
```

}
