/**
 * Camera Agent
 * ----------------
 * Generates cinematography suggestions
 * including framing, movement and lenses.
 */

export async function cameraSuggestions(prompt) {

    return `
Camera Recommendations

• Start with a Wide Establishing Shot.
• Use Medium Shots for conversations.
• Close-Ups during emotional moments.
• Slow Dolly-In for dramatic emphasis.
• Prefer cinematic lighting with soft shadows.

Scene:
${prompt}
`;

}
