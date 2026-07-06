
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { story } = req.body;

    if (!story || story.trim() === "") {
      return res.status(400).json({
        result: "Please enter a story."
      });
    }

    const prompt = `
You are CineGenie, a professional AI Filmmaking Copilot.

Analyze the following story and provide:

🎭 MOOD ANALYSIS
• Emotional Tone
• Audience Feeling

🎬 CINEMATOGRAPHY
• Shot Types
• Camera Movement
• Lens Suggestions

💡 LIGHTING
• Lighting Style
• Practical Lights
• Mood Lighting

🎨 COLOR PALETTE
• Primary Colors
• Color Psychology

🎵 MUSIC
• Background Score
• Instruments
• Atmosphere

📋 SHOT LIST
Generate 5 cinematic shots.

🎥 DIRECTOR NOTES
Creative filmmaking advice.

Story:

${story}
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "system",
              content: "You are CineGenie, an expert filmmaking assistant."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.8
        })
      }
    );

    const data = await response.json();

    console.log("Groq Response:", data);

    if (!response.ok) {
      return res.status(500).json({
        result: `Groq Error: ${JSON.stringify(data)}`
      });
    }

    const result =
      data?.choices?.[0]?.message?.content ||
      "No response generated.";

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
