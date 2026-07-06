const generateBtn = document.getElementById("generateBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const storyInput = document.getElementById("storyInput");

const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

const loadingPanel = document.getElementById("loading");

// OUTPUT FIELDS
const mood = document.getElementById("mood");
const camera = document.getElementById("camera");
const lighting = document.getElementById("lighting");
const color = document.getElementById("color");
const music = document.getElementById("music");
const notes = document.getElementById("notes");
const shotlist = document.getElementById("shotlist");

/* =========================
   MCP CONFIG (OPTIONAL)
========================= */
const MCP_API_URL = "https://your-mcp-server.com/cinegenie";

/* =========================
   SHOW / HIDE AGENTS
========================= */
function showAgents() {
    loadingPanel.style.display = "block";

    const agents = [
        document.getElementById("agent1"),
        document.getElementById("agent2"),
        document.getElementById("agent3"),
        document.getElementById("agent4"),
        document.getElementById("agent5"),
    ];

    agents.forEach((agent, i) => {
        agent.style.opacity = "0.3";
        setTimeout(() => {
            agent.style.opacity = "1";
        }, i * 400);
    });
}

function hideAgents() {
    loadingPanel.style.display = "none";
}

/* =========================
   MCP CALL
========================= */
async function callMCP(prompt) {
    try {
        const res = await fetch(MCP_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ input: prompt })
        });

        if (!res.ok) throw new Error("MCP failed");

        const data = await res.json();

        return data; // expected structured response

    } catch (err) {
        console.warn("MCP fallback:", err);
        return null;
    }
}

/* =========================
   LOCAL FALLBACK ENGINE
========================= */
function generateCineGenie(prompt) {
    if (!prompt.trim()) prompt = "an unknown cinematic scene";

    return {
        mood: `The scene feels intense and atmospheric based on "${prompt}".`,
        camera: `Use slow tracking shots, wide establishing angles, and close-up emotional cuts.`,
        lighting: `Low-key lighting with strong shadows and selective highlights.`,
        color: `Muted blues, desaturated greys with warm orange highlights.`,
        music: `Deep ambient tones with slow orchestral build-up.`,
        notes: `Focus on emotional storytelling and visual tension.`,
        shotlist: `1. Wide establishing shot\n2. Close-up character reveal\n3. Tracking movement shot\n4. Over-the-shoulder dialogue\n5. Final cinematic fade-out`
    };
}

/* =========================
   RENDER OUTPUT
========================= */
function render(data) {
    mood.textContent = data.mood;
    camera.textContent = data.camera;
    lighting.textContent = data.lighting;
    color.textContent = data.color;
    music.textContent = data.music;
    notes.textContent = data.notes;
    shotlist.textContent = data.shotlist;
}

/* =========================
   MAIN GENERATE
========================= */
async function generate(prompt) {
    showAgents();

    // simulate agent timing
    setTimeout(async () => {

        let result = await callMCP(prompt);

        if (!result) {
            result = generateCineGenie(prompt);
        }

        render(result);
        hideAgents();

    }, 2000);
}

/* =========================
   EVENTS
========================= */

// Normal generate
generateBtn.addEventListener("click", () => {
    generate(storyInput.value);
});

// Surprise button
surpriseBtn.addEventListener("click", () => {
    const ideas = [
        "a detective entering an abandoned hospital",
        "a robot falling in love with a human",
        "a soldier lost in a futuristic desert war",
        "a girl discovering a portal in her mirror",
        "a city where time stops every midnight"
    ];

    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    storyInput.value = randomIdea;

    generate(randomIdea);
});

/* =========================
   COPY ALL OUTPUT
========================= */
copyBtn.addEventListener("click", () => {
    const text =
`MOOD: ${mood.textContent}

CAMERA: ${camera.textContent}

LIGHTING: ${lighting.textContent}

COLOR: ${color.textContent}

MUSIC: ${music.textContent}

NOTES: ${notes.textContent}

SHOTLIST:
${shotlist.textContent}`;

    navigator.clipboard.writeText(text)
        .then(() => alert("Analysis copied!"))
        .catch(() => alert("Copy failed!"));
});

/* =========================
   DOWNLOAD FILE
========================= */
downloadBtn.addEventListener("click", () => {
    const text =
`CINEGENIE AI ANALYSIS

MOOD: ${mood.textContent}

CAMERA: ${camera.textContent}

LIGHTING: ${lighting.textContent}

COLOR: ${color.textContent}

MUSIC: ${music.textContent}

DIRECTOR NOTES: ${notes.textContent}

SHOT LIST:
${shotlist.textContent}`;

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cinegenie-analysis.txt";
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
