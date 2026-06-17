const btn = document.getElementById("generateBtn");
const storyInput = document.getElementById("storyInput");
const outputBox = document.getElementById("outputBox");

const API_KEY = "PASTE_YOUR_GEMINI_API_KEY_HERE";

btn.addEventListener("click", async () => {

    const story = storyInput.value.trim();

    if (!story) {
        outputBox.innerHTML = "Please enter a story first.";
        return;
    }

    outputBox.innerHTML = "🎬 CineGenie is analyzing your story...";

    try {

        const prompt = `
You are CineGenie.

Analyze the following story and provide:

1. Genre
2. Mood
3. Color Palette
4. Lighting Style
5. Camera Movements
6. Shot Suggestions
7. Music Suggestions
8. Director Style Inspiration
9. Storyboard Outline

Story:
${story}
`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
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

        const result =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No response received.";

        outputBox.innerHTML = `
        <div style="white-space: pre-wrap;">
        ${result}
        </div>
        `;

    } catch (error) {

        outputBox.innerHTML =
            "❌ Error connecting to Gemini API.";

        console.error(error);
    }

});
