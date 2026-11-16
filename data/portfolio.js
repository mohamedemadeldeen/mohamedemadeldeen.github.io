// All site text lives here. Edit this file to update the site; no build step needed.
// Videos: put .mp4 files in assets/videos/ (keep each under ~50 MB) or set a YouTube id.

window.PORTFOLIO = {
  name: "Mohamed Emad",
  shortName: "Emad",
  title: "AI Team Lead | Generative AI, Voice Agents & Computer Vision",
  status: "Leading AI squads at Wakeb Data",
  summary:
    "AI Team Lead with 9+ years building and shipping machine learning systems. I lead four squads (LLMs & agentic systems, speech & voice, computer vision, 3D point cloud) and build alongside them, delivering on-premise Arabic voice agents, grounded RAG platforms, and real-time computer vision for clients who need their data to stay in-house.",
  location: "Giza, Egypt",
  phone: "+20 102 086 6435",
  photo: "assets/images/profile.jpg",
  cv: "assets/Mohamed-Emad-CV.pdf",
  links: {
    email: "mohamedemad9657@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohamed-emad-221831175",
  },

  stats: [
    { value: "9+", label: "Years in AI" },
    { value: "4", label: "AI squads" },
    { value: "10+", label: "Engineers led" },
  ],

  experience: [
    {
      company: "Wakeb Data",
      logo: "assets/logos/wakeb.jpg",
      location: "Cairo, Egypt",
      current: true,
      period: "Mar 2019 – Present",
      roles: [
        { title: "Data Science Team Lead", period: "Jun 2023 – Present" },
        { title: "Senior Data Scientist", period: "Feb 2021 – Jun 2023" },
        { title: "Data Scientist", period: "Mar 2019 – Feb 2021" },
      ],
      groups: [
        {
          label: "Leadership",
          bullets: [
            "Lead four AI squads (LLMs & agentic systems, speech & voice, computer vision, 3D point cloud) with 10+ engineers and data scientists, while staying hands-on in design and code.",
            "Own the AI roadmap and turn client needs into scoped, benchmarked deliveries.",
            "Set the team's standards for experimentation, latency benchmarking and on-premise deployment; mentor engineers across squads.",
          ],
        },
        {
          label: "Agentic AI projects",
          projects: [
            {
              id: "baleegh",
              name: "Baleegh",
              subtitle: "Najdi Arabic Voice Agent Platform",
              bullets: [
                "Led and built Baleegh, an on-premise voice agent that holds natural phone-style conversations in Najdi Arabic for a real-estate client.",
                "Designed and built the pipeline end to end: Cohere Arabic transcription, gemma-4-12b served on vLLM with a document-search tool, and a Najdi voice fine-tuned with LoRA on VoxCPM2, all running over self-hosted LiveKit.",
                "Brought the median response time down from 2.27 s to 1.0 s by streaming speech synthesis, and hid the 10.8 s cold start by warming the models while the caller connects.",
                "Fit speech recognition, the LLM and speech synthesis within one 24 GB GPU, and wrote a normalizer that turns numbers, codes and formatting into spoken Najdi so no reply gets cut off.",
              ],
            },
            {
              id: "naseh",
              name: "Naseh",
              subtitle: "Sovereign Arabic/English RAG Platform",
              bullets: [
                "Led and built Naseh, an Arabic and English document Q&A platform that keeps every byte on the client's servers, built for Saudi data-residency requirements.",
                "Architected it as five services (FastAPI, Qdrant, Docling, Next.js) running local models through Ollama or vLLM, with no calls to outside AI providers.",
                "Built layout-aware parsing for 33 file types, and retrieval that ranks results by fusing keyword (BM25) and semantic search.",
                "Answers only from retrieved sources, cites each claim, and declines when the documents don't support an answer; tenants are isolated inside the vector store.",
                "Added guardrails that screen for prompt injection, mask personal data, and check that each answer stays grounded.",
              ],
            },
            {
              id: "ppgen",
              name: "PPGen",
              subtitle: "AI Presentation Generator",
              bullets: [
                "Led and built PPGen, a self-hosted tool that turns one prompt into a finished slide deck.",
                "Pulls content from uploaded PDFs, web search and RAG, then lays it out slide by slide with structured LLM output.",
                "Chooses the visual for each slide: reuse an image from the source documents, find one online, or generate one with a VLM.",
              ],
            },
            {
              id: "apa",
              name: "APA",
              subtitle: "Agentic Process Automation",
              bullets: [
                "Led and built APA, where business users describe a process in chat and get a working automated workflow, replacing rigid rule-based RPA.",
                "Designed the multi-agent orchestration on LangGraph with checkpointed state, so long workflows can pause, resume and recover.",
                "Integrated Salla, WhatsApp and Slack as built-in connectors.",
              ],
            },
          ],
        },
        {
          label: "Computer vision projects",
          projects: [
            {
              id: "smart-ads",
              name: "Smart Advertising System",
              subtitle: "Real-time Edge Computer Vision",
              bullets: [
                "Recommends ads on digital billboards from live analysis of pedestrians (age, gender, emotion, glasses) and vehicles (type, color, model).",
                "Benchmarked YOLO, Faster R-CNN and DETR for detection, DeepSORT and ByteTrack for tracking, ResNet and EfficientNet for classification, to run in real time on edge devices.",
              ],
            },
          ],
          bullets: [
            "Adapted open vision-language and foundation models to map land cover and track environmental change from satellite imagery.",
            "Shipped satellite segmentation, detection and change-detection systems, plus generative models that remove blur and haze.",
            "Compressed and containerized models to run on NVIDIA Jetson devices at the edge.",
            "Set up the annotation workflow: requirements, task assignment and review, plus scripts that automate data collection, preprocessing and validation.",
          ],
        },
      ],
      tags: ["Voice AI", "LiveKit", "vLLM", "RAG", "Guardrails", "LangGraph", "Agentic AI", "Qdrant", "VLMs", "Jetson", "Docker"],
    },
    {
      company: "Velents",
      logo: "assets/logos/velents.png",
      location: "Remote",
      period: "Apr 2021 – Mar 2022",
      roles: [{ title: "Senior Data Scientist (part-time)", period: "Apr 2021 – Mar 2022" }],
      groups: [
        {
          projects: [
            {
              id: "personality",
              name: "Personality Traits Prediction",
              subtitle: "Multimodal Video Analysis",
              bullets: ["Predicts Big Five (OCEAN) traits from combined speech and visual features; 88.7% accuracy on 1,000 test videos after training on 8,000."],
            },
            {
              id: "cv-ranking",
              name: "CV Ranking System",
              subtitle: "NLP for Recruiting",
              bullets: ["Ranks candidates against a job description, using named-entity recognition to extract and match skills."],
            },
          ],
          bullets: ["Deployed model APIs on AWS, edge devices and local servers."],
        },
      ],
      tags: ["Multimodal", "NLP", "NER", "AWS"],
    },
    {
      company: "Real-Soft",
      logo: "",
      location: "Cairo, Egypt",
      period: "Sep 2017 – Feb 2019",
      roles: [{ title: "Computer Vision Engineer (part-time)", period: "Sep 2017 – Feb 2019" }],
      groups: [{ bullets: ["Built object detection, image classification and speech recognition models."] }],
      tags: ["Detection", "Classification", "Speech Recognition"],
    },
  ],

  // Projects page: one card per project, with a demo video.
  // category: "llm" or "cv". video: local mp4; youtube: video id.
  projects: [
    { id: "baleegh", category: "llm", name: "Baleegh — Najdi Arabic Voice Agent", video: "assets/videos/baleegh-demo.mp4", youtube: "",
      tags: ["Voice AI", "LiveKit", "vLLM", "gemma-4", "Silero VAD", "STT", "TTS", "RAG", "FastAPI"],
      metrics: [{ value: "1.0 s", label: "median time to first audio" }, { value: "−56%", label: "latency cut by streaming TTS" }, { value: "24 GB", label: "STT + LLM + TTS on one GPU" }] },
    { id: "naseh", category: "llm", name: "Naseh — Sovereign Arabic/English RAG", video: "assets/videos/naseh-demo.mp4", youtube: "",
      tags: ["RAG", "Qdrant", "Hybrid Search", "BM25", "RRF", "Docling", "vLLM", "Next.js", "On-premise"],
      metrics: [{ value: "33", label: "file formats parsed" }, { value: "5", label: "microservices" }, { value: "0", label: "external AI APIs" }] },
    { id: "ppgen", category: "llm", name: "PPGen — AI Presentation Generator", video: "assets/videos/ppgen-demo.mp4", youtube: "",
      tags: ["LLM", "RAG", "Web search", "Structured output", "VLMs"], metrics: [] },
    { id: "apa", category: "llm", name: "APA — Agentic Process Automation", video: "assets/videos/apa-demo.mp4", youtube: "",
      tags: ["LangGraph", "Agents", "Checkpointing", "Salla", "WhatsApp", "Slack"], metrics: [] },
    { id: "smart-ads", category: "cv", name: "Smart Advertising System", video: "assets/videos/smart-ads-demo.mp4", youtube: "",
      tags: ["YOLO", "DETR", "ByteTrack", "DeepSORT", "EfficientNet", "Edge"], metrics: [] },
    { id: "personality", category: "cv", name: "Personality Traits Prediction", video: "", youtube: "",
      tags: ["Multimodal", "Speech", "Vision"], metrics: [{ value: "88.7%", label: "accuracy on 1,000 test videos" }] },
  ],

  skills: {
    "LLMs & Agents": ["RAG", "LangGraph", "Tool calling", "vLLM", "Ollama", "AWQ", "Guardrails", "LLM evaluation"],
    "Speech & Voice": ["LiveKit / WebRTC", "STT", "TTS", "Streaming synthesis", "VAD & turn detection"],
    "Computer Vision & 3D": ["YOLO", "DETR", "ByteTrack", "DeepSORT", "VLMs", "Satellite imagery", "Point clouds"],
    "MLOps": ["Docker", "GPU planning", "Jetson / edge", "Azure", "AWS", "Qdrant", "Redis"],
    "Languages & Frameworks": ["Python", "C++", "PyTorch", "TensorFlow / Keras", "FastAPI", "SQL"],
  },

  education: [
    { school: "Menoufia University", degree: "B.Sc. Information Technology", detail: "Faculty of Computers and Information · Grade: Very Good" },
  ],

  certifications: [
    { name: "Deep Learning with TensorFlow", url: "https://courses.cognitiveclass.ai/certificates/61e746e42254440db412a125254f1271" },
    { name: "Deep Learning Fundamentals", url: "https://courses.cognitiveclass.ai/certificates/9d4e49ebf0994d0a821cadde8d405463" },
    { name: "Machine Learning with Python", url: "https://courses.cognitiveclass.ai/certificates/5192fccaab6c4b51a3fb1604c441f6f4" },
    { name: "Internet of Things — UC Irvine", url: "https://www.coursera.org/account/accomplishments/certificate/Q97LUPSBMVK8" },
  ],
};
