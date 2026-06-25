export const skills = [
  "TypeScript", "React", "Python", "FastAPI", "LangGraph", "Spring Boot",
  "Google Cloud", "BigQuery", "MongoDB", "Socket.IO", "PyTorch",
];

export const projects = [
  {
    no: "01",
    name: "Real-time Messaging Platform",
    stack: "MERN · Socket.IO · JWT",
    year: "2024",
    desc:
      "Full-stack chat with live presence, typing indicators, and token-based auth. WebSocket fan-out kept latency low under concurrent rooms.",
  },
  {
    no: "02",
    name: "Cold-Outreach Agent",
    stack: "LangGraph · Claude · Gmail API",
    year: "2025",
    desc:
      "A LangGraph state machine that finds recruiters and drafts tailored emails with Claude, then pauses on a human-in-the-loop interrupt for approval — checkpointed so a run can resume — before sending via Gmail and logging each touch.",
  },
  {
    no: "03",
    name: "LLM Agent Backend",
    stack: "LangGraph · FastAPI · GCP",
    year: "2025",
    desc:
      "Production ReAct agent service on Cloud Run, backed by BigQuery and GCS, fronted by React/TypeScript dashboards for internal teams.",
  },
  {
    no: "04",
    name: "Deer Detection (Research)",
    stack: "YOLOv5 · PyTorch · GIS",
    year: "2023",
    desc:
      "Computer-vision pipeline for wildlife detection from aerial imagery, built during a GIS research internship in Taiwan.",
  },
];

export const timeline = [
  {
    when: "2025 —",
    role: "Software Engineer I",
    org: "Genuine Parts Company · Atlanta",
    note:
      "Building AI/LLM backends — LangGraph agents, FastAPI & Spring Boot services on GCP, and React/TypeScript dashboards.",
  },
  {
    when: "2024",
    role: "Software Engineer Intern",
    org: "Genuine Parts Company",
    note: "Shipped a MERN indoor-mapping application from prototype to internal use.",
  },
  {
    when: "2023–24",
    role: "Teaching Assistant, CS88",
    org: "UC Berkeley",
    note: "Led sections and held office hours for computational structures in data.",
  },
  {
    when: "2023",
    role: "GIS Research Intern",
    org: "Taiwan",
    note: "YOLOv5/PyTorch wildlife-detection pipeline over geospatial imagery.",
  },
];

export const facts = [
  ["Now", "SWE @ Genuine Parts Company"],
  ["Study", "B.A. Computer Science, UC Berkeley ’25"],
  ["Focus", "AI/LLM backends · Full-stack"],
  ["Base", "Atlanta, GA — open to remote"],
  ["Langs", "English · Mandarin"],
];
