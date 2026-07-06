/**
 * Retrieval Tool
 * ----------------
 * Retrieves filmmaking knowledge
 * that can assist specialized agents.
 */

export function retrievalTool() {

    return {

        cinematography: [
            "Rule of Thirds",
            "Leading Lines",
            "Depth of Field",
            "Shot Composition"
        ],

        cameraShots: [
            "Wide Shot",
            "Medium Shot",
            "Close Up",
            "Extreme Close Up",
            "Over the Shoulder"
        ],

        lighting: [
            "High Key",
            "Low Key",
            "Natural Light",
            "Three Point Lighting"
        ]

    };

}
