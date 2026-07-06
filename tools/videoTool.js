/**
 * Video Tool
 * -----------
 * Generates a structured cinematic report.
 */

export function videoTool(scene, director, camera, story) {

    return {

        title: "CineGenie Cinematic Report",

        scene,

        director,

        camera,

        story,

        generatedAt: new Date().toLocaleString()

    };

}
