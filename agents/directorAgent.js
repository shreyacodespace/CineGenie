/**
 * Director Agent
 * ----------------
 * Provides creative directing suggestions
 * based on the user's script or scene.
 */

export async function directorInsights(prompt) {

    return `
Director's Recommendations

• Establish a strong opening shot.
• Maintain emotional pacing throughout the scene.
• Use blocking to highlight character relationships.
• Focus on visual storytelling rather than excessive dialogue.
• Build tension through shot progression.

Based on:
${prompt}
`;

}
