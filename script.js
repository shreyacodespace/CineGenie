const btn = document.getElementById("generateBtn");
const storyInput = document.getElementById("storyInput");
const outputBox = document.getElementById("outputBox");

btn.addEventListener("click", () => {

    const story = storyInput.value.trim().toLowerCase();

    if (!story) {
        outputBox.innerHTML = `
        <h2>⚠️ No Story Found</h2>
        <p>Please enter your story idea first.</p>
        `;
        return;
    }

    outputBox.innerHTML = `
    <h2>🎬 CineGenie is imagining your film...</h2>
    <p>Please wait...</p>
    `;

    setTimeout(() => {

        let genre = "Drama";
        let mood = "Emotional";
        let colorPalette = "Warm Orange, Gold and Beige";
        let director = "Greta Gerwig";
        let music = "Emotional orchestral soundtrack";

        if (
            story.includes("space") ||
            story.includes("planet") ||
            story.includes("astronaut") ||
            story.includes("future") ||
            story.includes("alien")
        ) {
            genre = "Science Fiction";
            mood = "Mysterious and Awe-Inspiring";
            colorPalette = "Deep Blue, Purple and Black";
            director = "Christopher Nolan";
            music = "Hans Zimmer inspired atmospheric score";
        }

        if (
            story.includes("ghost") ||
            story.includes("haunted") ||
            story.includes("monster") ||
            story.includes("spirit") ||
            story.includes("horror")
        ) {
            genre = "Horror";
            mood = "Dark and Tense";
            colorPalette = "Dark Green, Black and Grey";
            director = "James Wan";
            music = "Suspenseful horror soundtrack";
        }

        if (
            story.includes("love") ||
            story.includes("romance") ||
            story.includes("heart")
        ) {
            genre = "Romance";
            mood = "Warm and Hopeful";
            colorPalette = "Pink, Golden and White";
            director = "Richard Linklater";
            music = "Soft piano soundtrack";
        }

        outputBox.innerHTML = `
        <div class="cine-result">

            <h2>🎬 CineGenie Vision</h2>

            <p>
            Based on your story idea, CineGenie imagines this as a
            <strong>${genre}</strong> film experience.
            </p>

            <h3>🎭 Mood</h3>
            <p>${mood}</p>

            <h3>🎨 Visual Style</h3>
            <p>${colorPalette}</p>

            <h3>🎥 Director Inspiration</h3>
            <p>${director}</p>

            <h3>🎼 Music Direction</h3>
            <p>${music}</p>

            <h3>📖 Opening Scene</h3>
            <p>
            The film opens with a visually striking sequence that immediately
            draws the audience into the world of the story.
            </p>

            <h3>🎞️ Cinematography Suggestions</h3>
            <p>
            Use wide establishing shots, cinematic close-ups, dramatic
            lighting and slow camera movement to enhance immersion.
            </p>

            <h3>⭐ CineGenie Verdict</h3>
            <p>
            This concept has strong cinematic potential and could develop
            into a visually engaging film narrative.
            </p>

        </div>
        `;

    }, 1500);

});
