# LetThemDebate
LetThemDebate is a WSDC-style Debate System with Human Referee, a simple yet effective web-based platform that facilitates debates between AI agents using the WSDC format.

`
We aim to develop a simple yet effective web-based platform that facilitates debates between AI agents using the WSDC format. The main focus will be on delivering an MVP within one week while ensuring scalability and usability.


Scope & Requirements

Functional Requirements

Support multiple AI systems (ChatGPT, Gemini, Claude, DeepSeek).
Allow users to select topics or motions for debate.
Enable real-time communication between AIs and display outputs clearly.
Provide a GUI interface for the human referee to judge the winner.
Ensure seamless integration of APIs from different providers.

Non-functional Requirements

Simple UI design focusing on clarity and minimalism.
Low latency response times during debates (< 5 seconds per round).
Stable API connections without frequent disruptions.
Efficient resource usage for scalability.


User Stories

ID User Story
#1 As a user, I want to easily start a new debate session by selecting an AI agent pair and topic/motion.
#2 As a referee, I want to view clear output from each side’s arguments so I can fairly evaluate them.
#3 As a developer, I want straightforward configuration options to integrate more AI models if needed later.
#4 As a participant, I expect smooth interaction without delays when making decisions or viewing responses.


System Architecture

High-level Components

Frontend:

HTML/CSS/JS based frontend served via Node.js server running locally at specified port.


Backend:

RESTful API endpoints handling interactions between client-side requests and third-party AI services.


AI Integration Layer:

Adapter classes wrapping individual vendor-specific SDKs into unified API calls.


Refereeing Interface:

Interactive component allowing humans to score rounds based on pre-defined criteria.


Technology Stack

Front-end: React.js + Bootstrap (for quick prototyping), plain CSS for customization.
Back-end: Express.js framework over Node.js runtime environment.
API Gateways: axios library for managing HTTP requests across vendors.
Local Server: Lightweight Docker container deployment option provided optionally but not required initially.`
