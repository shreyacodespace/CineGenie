/**
 * Coordinator Agent
 * -----------------
 * Receives the user's filmmaking request,
 * coordinates all specialized agents,
 * and combines their responses into one report.
 */

import { analyzeScene } from "./sceneAgent.js";
import { directorInsights } from "./directorAgent.js";
import { cameraSuggestions } from "./cameraAgent.js";
import { storyAnalysis } from "./storyAgent.js";

export async function coordinatorAgent(userPrompt) {

    const scene = await analyzeScene(userPrompt);

    const director = await directorInsights(userPrompt);

    const camera = await cameraSuggestions(userPrompt);

    const story = await storyAnalysis(userPrompt);

    return {
        scene,
        director,
        camera,
        story,

        summary: `
Scene Analysis
${scene}

Director Suggestions
${director}

Camera Suggestions
${camera}

Story Analysis
${story}
`
    };
}
