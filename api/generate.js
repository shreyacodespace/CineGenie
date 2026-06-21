export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { story } = req.body;

    if (!story || story.trim() === "") {
      return res.status(400).json({
        result: "Please enter a story."
      });
    }

    const prompt = `
You are CineGenie, an advanced AI Filmmaking Agent.

Your task is to analyze the story and generate a professional filmmaking blueprint.

Provide the response in the following format:

🎭 MOOD ANALYSIS
- Main emotional tone
- Audience feeling

🎬 CINEMATOGRAPHY
- Shot types
- Camera movements
- Lens suggestions

💡 LIGHTING PLAN
- Lighting style
- Practical lights
- Mood lighting

🎨 COLOR PALETTE
- Main colors
- Color psychology

🎵 MUSIC DIRECTION
- Soundtrack style
- Instruments
- Atmosphere

📋 SHOT LIST
Give 5 cinematic shots.

🎥 DIRECTOR'S NOTES
Creative filmmaking advice.

Story:
${story}
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.gemini_api_key}`,
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

console.log("Gemini Response:", JSON.stringify(data, null, 2));

if (!response.ok) {
  return res.status(500).json({
    result: `Gemini Error: ${JSON.stringify(data)}`
  });
}

const result =
  data?.candidates?.[0]?.content?.parts?.[0]?.text ||
  JSON.stringify(data);
    return res.status(200).json({
      result
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      result: "Server Error. Please try again."
    });
  }
}
