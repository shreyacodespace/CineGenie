export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { story } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
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
                  text: `
You are CineGenie, an AI filmmaking assistant.

Analyze this story and provide:

🎬 Shot Planning
🎨 Color Palette
💡 Lighting Suggestions
🎥 Camera Movement
🎵 Music Mood

Story:
${story}
                  `
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response generated.";

    res.status(200).json({
      result
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
