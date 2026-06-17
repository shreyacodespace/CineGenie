const btn = document.getElementById("generateBtn");
const storyInput = document.getElementById("storyInput");
const outputBox = document.getElementById("outputBox");

btn.addEventListener("click", () => {

    const story = storyInput.value.trim();

    if (!story) {
        outputBox.innerHTML =
        "⚠️ Please enter a story idea first.";
        return;
    }

    outputBox.innerHTML = `
    <h2>🎬 CineGenie Analysis</h2>

    <h3>🎭 Genre</h3>
    <p>Sci-Fi Adventure</p>

    <h3>🎨 Color Palette</h3>
    <p>Deep Blue, Purple, Black</p>

    <h3>💡 Lighting Style</h3>
    <p>Low-key cinematic lighting with neon highlights.</p>

    <h3>🎥 Camera Style</h3>
    <p>Slow tracking shots, aerial establishing shots and close emotional frames.</p>

    <h3>🎼 Music Direction</h3>
    <p>Hans Zimmer inspired atmospheric soundtrack.</p>

    <h3>🎬 Director Inspiration</h3>
    <p>Christopher Nolan + Denis Villeneuve.</p>

    <h3>📖 Storyboard Suggestion</h3>
    <p>
    Scene 1: Introduce the protagonist.<br>
    Scene 2: Present the conflict.<br>
    Scene 3: Build tension.<br>
    Scene 4: Climax and resolution.
    </p>
    `;
});
