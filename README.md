🎬 CineGenie: Multi-Agent AI Filmmaking Assistant

«An AI-powered multi-agent filmmaking copilot that transforms scripts and creative ideas into cinematic insights through intelligent scene analysis, directing assistance, cinematography guidance, and storytelling support.»

---

Table of Contents

- Overview
- Problem Statement
- Solution
- Key Features
- System Architecture
- Multi-Agent Design
- MCP Tool Integration
- ADK-Based Agent Orchestration
- Technical Stack
- Repository Structure
- Installation
- Running Locally
- Example Workflow
- Example Output
- Future Improvements
- Contributing
- License

---

Overview

CineGenie is an AI-powered filmmaking assistant designed for filmmakers, content creators, students, storytellers, and creative professionals.

Rather than functioning as a simple chatbot, CineGenie uses a multi-agent architecture, where specialized AI agents collaborate to analyze scenes, understand narrative structure, provide directing suggestions, recommend cinematography techniques, and generate creative filmmaking insights.

The objective is to reduce the gap between creative imagination and professional filmmaking knowledge by making cinematic expertise accessible through AI.

---

Problem Statement

Creating cinematic content requires expertise across multiple creative domains:

- Directing
- Storytelling
- Cinematography
- Camera language
- Lighting
- Scene composition
- Color grading
- Visual narrative

Independent filmmakers and students often lack access to experienced collaborators who can provide meaningful creative feedback during pre-production.

Traditional AI assistants generally provide generic responses and cannot reason through filmmaking from multiple professional perspectives.

---

Solution

CineGenie introduces a multi-agent AI system where each specialized agent focuses on a unique filmmaking responsibility.

Instead of relying on one large prompt, CineGenie decomposes filmmaking tasks into multiple intelligent agents that collaborate to produce comprehensive cinematic recommendations.

The platform assists users by generating:

- Scene breakdowns
- Director commentary
- Shot composition suggestions
- Camera movement recommendations
- Lighting guidance
- Color grading ideas
- Storytelling improvements
- Visual inspiration

---

Key Features

- 🎬 Scene Analysis
- 🎥 Cinematic Shot Planning
- 🎞 Director Commentary
- 📷 Camera Angle Suggestions
- 💡 Lighting Recommendations
- 🎨 Color Grading Assistance
- 📖 Story Structure Analysis
- 😊 Mood & Emotion Detection
- 🎵 Background Music Suggestions
- ✨ Creative Visual Storytelling

---
# System Architecture

```text
                           User
                             │
                             ▼
                  Web Interface (Frontend)
                             │
                             ▼
                    Coordinator Agent
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
 Scene Analysis Agent   Director Agent     Story Agent
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                             ▼
                     Camera Agent
                             │
                             ▼
                      MCP Tool Layer
        ┌────────────────┬────────────────┬────────────────┐
        │                │                │
        ▼                ▼                ▼
   Video Tool       Scene Tool      Retrieval Tool
                             │
                             ▼
                    LLM Inference Layer
                             │
                             ▼
                 Cinematic AI Response
```

> **Architecture Diagram:** `docs/architecture.png`


---

Multi-Agent Design

Coordinator Agent

The Coordinator Agent manages the complete workflow.

Responsibilities:

- Request routing
- Context management
- Agent orchestration
- Response aggregation

---

Scene Analysis Agent

Responsible for understanding scenes.

Responsibilities:

- Scene segmentation
- Visual analysis
- Scene understanding
- Emotional context extraction

---

Director Agent

Provides creative directing assistance.

Responsibilities:

- Directorial interpretation
- Creative decision support
- Scene enhancement suggestions
- Audience impact analysis

---

Camera Agent

Focuses on cinematography.

Responsibilities:

- Camera angle recommendations
- Lens suggestions
- Camera movement
- Framing advice

---

Story Agent

Analyzes narrative quality.

Responsibilities:

- Story pacing
- Character progression
- Emotional consistency
- Narrative improvements

---

MCP Tool Integration

CineGenie follows a modular tool-based architecture inspired by the Model Context Protocol (MCP).

Specialized tools provide structured capabilities to agents instead of embedding all logic into prompts.

Video Tool

- Video metadata processing
- Clip information
- Frame-level support

Scene Tool

- Scene segmentation
- Scene metadata
- Context extraction

Retrieval Tool

- Film knowledge retrieval
- Cinematography references
- Directing best practices

This modular approach enables better scalability, maintainability, and agent specialization.

---

ADK-Based Agent Orchestration

The project is designed around Agent Development Kit (ADK) principles.

The orchestration layer enables:

- Task decomposition
- Multi-agent collaboration
- Context sharing
- Tool invocation
- Structured response generation

This allows CineGenie to extend beyond traditional single-agent AI assistants.

---

Technical Stack

Frontend

- HTML
- CSS
- JavaScript

Backend

- JavaScript
- API Routes

AI

- Large Language Model API
- Multi-Agent Workflow
- Prompt Engineering

Architecture

- Modular Agent System
- MCP Tool Layer

Deployment

- Vercel

---

Repository Structure

CineGenie/

│
├── index.html
├── style.css
├── script.js
│
├── api/
│   └── generate.js
│
├── agents/
│   ├── coordinatorAgent.js
│   ├── directorAgent.js
│   ├── sceneAgent.js
│   ├── cameraAgent.js
│   └── storyAgent.js
│
├── tools/
│   ├── mcpTools.js
│   ├── videoTool.js
│   ├── sceneTool.js
│   └── retrievalTool.js
│
├── docs/
│   ├── architecture.png
│   └── workflow.png
│
└── README.md

---

Installation

Clone the repository

git clone https://github.com/<your-username>/cinegenie.git

Move into the project directory

cd cinegenie

Install dependencies

npm install

---

Environment Variables

Create a ".env" file.

LLM_API_KEY=YOUR_API_KEY

«Never commit API keys or secrets to the repository.»

---

Running Locally

Start the development server.

npm run dev

Open your browser and navigate to:

http://localhost:3000

---

Example Workflow

1. User enters a script, scene description, or filmmaking idea.
2. The Coordinator Agent distributes tasks to specialized agents.
3. Agents analyze storytelling, cinematography, directing, and scene structure.
4. MCP tools retrieve supporting information where required.
5. The Coordinator Agent combines all outputs.
6. CineGenie generates a comprehensive filmmaking report.

---

Example Output

Input

«"Two rivals meet inside an abandoned warehouse during heavy rain."»

Generated Output

- Scene mood analysis
- Emotional tone
- Director commentary
- Recommended camera shots
- Camera movement suggestions
- Lighting recommendations
- Color grading palette
- Storytelling improvements
- Visual composition advice

---

Future Improvements

- Real-time video analysis
- Storyboard generation
- Automatic shot list creation
- Character relationship tracking
- Voice-based filmmaking assistant
- AI production planner
- Multi-modal scene understanding
- Director style simulation
- Cloud collaboration features

---

Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to open issues or submit pull requests to enhance CineGenie.

---

License

This project is intended for educational, research, and hackathon purposes.

---

Acknowledgements

Built as part of an AI Agents Hackathon to explore multi-agent collaboration, AI-assisted filmmaking, and intelligent creative workflows.

If you find this project useful, consider giving the repository a ⭐.
