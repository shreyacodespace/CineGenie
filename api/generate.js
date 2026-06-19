export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { story } = req.body;

    const prompt = `
You are CineGenie, an AI filmmaking assistant.

Analyze this story and provide:

1. Mood Analysis
2. Camera Suggestions
3. Lighting Plan
4. Color Palette
5. Music Direction
6. Director Notes

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

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response received.";

    res.status(200).json({
      result
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      result: "Server error."
    });
  }
}
