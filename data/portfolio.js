// All site text lives here. Edit this file to update the site; no build step needed.
// Videos: put .mp4 files in assets/videos/ (keep each under ~50 MB) or use a YouTube id.

window.PORTFOLIO = {
  name: "Mohamed Emad",
  title: "AI Team Lead",
  tagline: "Generative AI · Voice Agents · Computer Vision · 3D Vision",
  location: "Giza, Egypt",
  photo: "assets/images/profile.jpg",
  cv: "assets/Mohamed-Emad-CV.pdf",
  links: {
    email: "mohamedemad9657@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohamed-emad-221831175",
    github: "https://github.com/mohamedemadeldeen",
  },

  about: [
    "I lead four AI squads at Wakeb Data: LLMs & agentic systems, speech & voice, computer vision, and 3D point cloud, with 10+ engineers and data scientists.",
    "For 9+ years I have built and shipped machine learning systems, from real-time computer vision on edge devices to Arabic voice agents that answer a caller in about one second.",
  ],

  stats: [
    { value: "9+", label: "years in ML" },
    { value: "4", label: "AI squads led" },
    { value: "10+", label: "engineers" },
    { value: "1.0 s", label: "voice-agent response time" },
  ],

  expertise: [
    { title: "LLMs & Agents", text: "RAG with hybrid search, LangGraph agents, tool calling, quantized serving on vLLM." },
    { title: "Speech & Voice", text: "Real-time voice agents over WebRTC: STT, LLM and streaming TTS, tuned for latency." },
    { title: "Computer Vision", text: "Detection, tracking and video analytics running in real time on edge devices." },
    { title: "3D Vision", text: "Point-cloud processing and 3D perception pipelines." },
    { title: "MLOps & Deployment", text: "Docker, GPU memory planning, edge, Azure, AWS and on-premise deployment." },
  ],

  experience: [
    {
      company: "Wakeb Data",
      role: "Data Science Team Lead",
      period: "Jun 2023 – Present",
      points: [
        "Lead four AI squads with 10+ engineers and data scientists.",
        "Led delivery of Baleegh, a real-time Arabic voice-agent platform (median response 2.27 s → 1.00 s).",
        "Built LLM products with RAG and agentic workflows, including PGen.",
        "Own the AI roadmap and the team's standards for benchmarking and deployment.",
      ],
    },
    {
      company: "Wakeb Data",
      role: "Senior Data Scientist",
      period: "Feb 2021 – Jun 2023",
      points: [
        "Shipped computer vision and ML systems to edge, cloud and on-premise servers.",
        "Turned business needs into ML project scopes and delivery plans with leadership.",
      ],
    },
    {
      company: "Wakeb Data",
      role: "Data Scientist",
      period: "Mar 2019 – Feb 2021",
      points: ["Built deep learning models for computer vision and speech recognition and took them to production."],
    },
    {
      company: "Velents",
      role: "Senior Data Scientist (part-time)",
      period: "Apr 2021 – Mar 2022",
      points: ["Built ML and deep learning solutions and deployed them on AWS, edge devices and local servers."],
    },
    {
      company: "Real-Soft",
      role: "Computer Vision Engineer (part-time)",
      period: "Sep 2017 – Feb 2019",
      points: ["Built object detection, classification and speech recognition models."],
    },
  ],

  // featured: true → shown on the home page. video: local mp4 path; youtube: video id (optional).
  projects: [
    {
      id: "baleegh",
      featured: true,
      name: "Baleegh",
      subtitle: "Real-time Arabic (Najdi) voice-agent platform",
      video: "assets/videos/baleegh-demo.mp4",
      poster: "assets/images/baleegh.jpg",
      youtube: "",
      tags: ["LiveKit", "vLLM", "Gemma 4 12B", "RAG", "Qdrant", "Docker", "Next.js"],
      metrics: [
        { value: "1.00 s", label: "median time to first audio" },
        { value: "−56%", label: "latency vs. first version" },
        { value: "24 GB", label: "whole stack on one GPU" },
      ],
      summary:
        "A web platform to build voice agents, call them live, and use speech-to-text and text-to-speech on their own, built for a real-estate support and booking use case.",
      details: [
        "Pipeline: caller audio over WebRTC (LiveKit) → Arabic STT → LLM with tools → Najdi TTS, with document RAG as an agent tool.",
        "Streaming the synthesizer's output cut median time-to-first-audio from 2.27 s to 1.00 s (p95 1.15 s); the first sound now starts 0.05 s after text is ready.",
        "STT, a Najdi fine-tuned TTS and Gemma 4 12B (AWQ INT4 on vLLM) share one RTX 4090, peaking at 22.8 of 24 GB.",
        "RAG service: Docling parsing with OCR, layout-aware chunking, hybrid dense + BM25 search on Qdrant. A 4-page PDF is searchable in about 7 s.",
        "Answered 35 of 40 benchmark questions correctly from client documents; the other 5 were follow-ups the agent was instructed to ask.",
      ],
    },
    {
      id: "pgen",
      featured: true,
      name: "PGen",
      subtitle: "LLM presentation generator",
      video: "assets/videos/pgen-demo.mp4",
      poster: "assets/images/pgen.jpg",
      youtube: "",
      tags: ["LangGraph", "RAG", "Tool calling", "Streaming"],
      metrics: [],
      summary: "Generates a full presentation from a prompt or a set of documents.",
      details: [
        "LangGraph agents plan the structure, write each slide and summarize the sources.",
        "Online RAG pulls from the web; offline RAG pulls from internal knowledge bases and uploaded documents.",
        "Slides stream to the user while they are being written.",
      ],
    },
    {
      id: "smart-ads",
      featured: true,
      name: "Smart Advertising System",
      subtitle: "Real-time computer vision on the edge",
      video: "assets/videos/smart-ads-demo.mp4",
      poster: "assets/images/smart-ads.jpg",
      youtube: "",
      tags: ["YOLO", "DETR", "ByteTrack", "DeepSORT", "EfficientNet", "Edge"],
      metrics: [],
      summary: "Chooses which ad to show on a digital billboard from live analysis of the people and vehicles in front of it.",
      details: [
        "Pedestrian attributes: age, gender, emotion, glasses. Vehicle attributes: type, color, model.",
        "Benchmarked YOLO, Faster R-CNN and DETR for detection, DeepSORT and ByteTrack for tracking, ResNet and EfficientNet for classification, to run in real time on edge devices.",
      ],
    },
    {
      id: "personality",
      featured: false,
      name: "Personality Traits Prediction",
      subtitle: "Multimodal video analysis",
      video: "",
      poster: "",
      youtube: "",
      tags: ["Multimodal", "Speech", "Vision"],
      metrics: [{ value: "88.7%", label: "accuracy on 1,000 test videos" }],
      summary: "Predicts Big Five (OCEAN) personality traits from speech and visual features in video.",
      details: ["Trained on 8,000 videos; 88.7% accuracy on a 1,000-video test set."],
    },
    {
      id: "cv-ranking",
      featured: false,
      name: "CV Ranking System",
      subtitle: "NLP for recruiting",
      video: "",
      poster: "",
      youtube: "",
      tags: ["NLP", "NER"],
      metrics: [],
      summary: "Ranks candidates against a job description.",
      details: ["Named-entity recognition extracts skills from CVs and job descriptions, then candidates are scored and sorted."],
    },
  ],

  skills: {
    "LLMs & Agents": ["RAG", "LangGraph", "Tool calling", "vLLM", "Ollama", "AWQ quantization", "LLM evaluation"],
    "Speech & Voice": ["LiveKit / WebRTC", "STT", "TTS", "Streaming synthesis", "Turn detection"],
    "Computer Vision & 3D": ["YOLO", "DETR", "Faster R-CNN", "ByteTrack", "DeepSORT", "Video analytics", "Point clouds"],
    "MLOps": ["Docker", "GPU planning", "Edge deployment", "Azure", "AWS", "Qdrant", "Redis"],
    "Languages & Frameworks": ["Python", "C++", "PyTorch", "TensorFlow / Keras", "SQL"],
  },

  education: [
    { degree: "B.Sc. Information Technology", school: "Faculty of Computers and Information, Menoufia University", detail: "Grade: Very Good" },
  ],
};
