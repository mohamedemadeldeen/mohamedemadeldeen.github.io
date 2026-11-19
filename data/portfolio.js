// All site text lives here. Edit this file to update the site; no build step needed.
// Videos: put .mp4 files in assets/videos/ (keep each under ~50 MB) or set a YouTube id.

window.PORTFOLIO = {
  name: "Mohamed Emad",
  shortName: "Mohamed Emad",
  title: "AI Team Lead | Generative AI, Voice Agents & Computer Vision",
  status: "Managing the AI team at Wakeb Data",
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
          label: "Agentic AI & voice",
          projects: [
            {
              id: "baleegh",
              name: "Baleegh",
              subtitle: "Arabic (Najdi) Voice Agent Platform",
              bullets: [
                "Led and built a self-hosted platform to create, call and test voice agents: Arabic STT (Cohere Transcribe), gemma-4-12b on vLLM with tools and document search, and a LoRA-tuned Najdi TTS (VoxCPM2), all over self-hosted LiveKit.",
                "Silero VAD and an audio turn detector run locally in the agent, so turn-taking never waits on the network; STT, LLM and TTS share one 24 GB GPU.",
                "Brought median time-to-first-audio from 2.27 s to 1.0 s (p95 1.15 s) by streaming speech synthesis, and removed the 10.8 s cold first turn by warming models while the caller connects.",
                "Benchmarked three Saudi TTS models (Chatterbox, Magpie, VoxCPM2 + LoRA); shipped seven voices and instant voice cloning from takes recorded in the dashboard.",
                "Calls escalate by rule to another agent or to a human queue, every call is recorded to a history dashboard, and agents start from templates written in Najdi Arabic.",
                "Documents show as their parsed layout with chunks synced to the page; the web app is bilingual (Arabic RTL / English) and works on phones.",
                "Researched Arabic speech-emotion recognition across eight datasets and fine-tuned emotion2vec as the next layer of the agent.",
              ],
            },
            {
              id: "naseh",
              name: "Naseh",
              subtitle: "Sovereign Arabic/English RAG Platform",
              bullets: [
                "Led and built an Arabic and English document Q&A platform that keeps every byte on the client's servers, designed for Saudi data-residency rules.",
                "Parses 33 formats (75 extensions) through Docling, with OCR and layout-aware chunking that keeps page boxes for highlighting.",
                "Hybrid dense + BM25 retrieval fused with RRF, multilingual embeddings, streamed answers from a local LLM (Ollama or vLLM).",
                "Answers only from retrieved sources with numbered citations, and refuses when the documents don't support an answer.",
                "Tenant isolation is enforced inside every retrieval branch, not after fusion, and verified with cross-tenant tests; guardrails cover prompt injection, PII and groundedness.",
              ],
            },
            {
              id: "ppgen",
              name: "PPGen",
              subtitle: "AI Presentation Generator",
              bullets: [
                "Led and built a FastAPI service that turns a prompt or uploaded PDF, DOCX or PPTX into a finished deck.",
                "Outline and slides stream to the client as they are written, with tone and verbosity controls and a per-slide edit endpoint.",
                "Document understanding with Docling and an LLM pipeline; generation on Ollama or OpenAI-compatible models.",
                "An image-placement router reuses images from the source documents, searches the web, or generates new ones with Flux; a VLM captions images and an icon finder adds icons.",
              ],
            },
            {
              id: "apa",
              name: "APA",
              subtitle: "Agentic Process Automation",
              bullets: [
                "Led and built a LangGraph system where users describe a business process in chat and get an executable workflow, beyond rule-based RPA.",
                "A sentence-broker agent splits the request into steps; RAG retrieves the matching services; agents extract conditions, expressions and input fields and connect the steps.",
                "Human-in-the-loop approval interrupts the graph, state is checkpointed in Postgres, and an orchestrator runs APA as a sub-graph inside a chat assistant.",
              ],
            },
          ],
        },
        {
          label: "Computer vision",
          projects: [
            {
              id: "air",
              name: "Air Intelligence",
              subtitle: "GIS platform for satellite and drone imagery",
              bullets: [
                "Led and built an analysis platform connected to the GIS: draw an area on the map, run the models, and get the results back as map layers.",
                "Land cover: UNetFormer / FTUNetFormer segmentation with the coverage of each class; 0.64 val mIoU on a 10-class drone set (buildings 0.88, water 0.90), and UNetFormer runs 4.3× faster (0.06 s per tile).",
                "Change detection: compared C-3PO, ChangeFormer and MTP on two dates of the same area; MTP with a U-Net head reached 88.7 F1 / 80.2 mIoU and runs as an API.",
                "Object detection (IMINT): 14 classes (airplanes, ships, storage tanks, stadiums, ports, bridges…) on in-house imagery merged with DOTA and DIOR; oriented boxes lifted YOLOv11 mAP50 from 0.62 to 0.70.",
                "TIDE error analysis, cloud augmentation, and a review app that overlays ground truth and predictions by IoU.",
              ],
            },
          ],
        },
        {
          label: "3D vision",
          projects: [
            {
              id: "aware3d",
              name: "3D-Aware",
              subtitle: "Real-time LiDAR perception",
              bullets: [
                "Point-cloud semantic segmentation with KPConv, exported to ONNX and TensorRT and run live through ROS 2.",
                "3D object detection and tracking with CenterPoint on in-house data, also accelerated with TensorRT.",
                "Scene change detection with octree, voxel and point-distance strategies behind one pipeline, plus occupancy heat maps and restricted-area alerts.",
                "Results stream to the browser over WebRTC.",
              ],
            },
          ],
        },
      ],
      tags: ["Voice AI", "LiveKit", "vLLM", "RAG", "LangGraph", "Qdrant", "Segmentation", "Change detection", "YOLOv11 OBB", "KPConv", "TensorRT", "ROS 2"],
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
              id: "cv-ranking",
              name: "CV Ranking System",
              subtitle: "NLP for Recruiting",
              bullets: ["Ranks candidates against a job description, using named-entity recognition to extract and match skills."],
            },
          ],
          bullets: ["Deployed model APIs on AWS, edge devices and local servers."],
        },
      ],
      tags: ["NLP", "NER", "AWS"],
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
    { id: "baleegh", category: "llm", name: "Baleegh — Arabic Voice Agent Platform",
      tags: ["LiveKit", "vLLM", "gemma-4-12b", "Silero VAD", "Cohere Transcribe", "VoxCPM2 LoRA", "Voice cloning", "Qdrant", "Next.js"],
      metrics: [{ value: "1.0 s", label: "median time to first audio" }, { value: "−56%", label: "latency cut by streaming TTS" }, { value: "7", label: "voices + instant cloning" }, { value: "24 GB", label: "STT + LLM + TTS on one GPU" }] },
    { id: "naseh", category: "llm", name: "Naseh — Sovereign Arabic/English RAG",
      tags: ["Docling", "OCR", "Qdrant", "BM25 + dense", "RRF", "Guardrails", "Ollama / vLLM", "Next.js", "On-premise"],
      metrics: [{ value: "33", label: "formats (75 extensions)" }, { value: "0", label: "external AI APIs" }, { value: "5", label: "services, all self-hosted" }] },
    { id: "ppgen", category: "llm", name: "PPGen — AI Presentation Generator",
      tags: ["FastAPI", "Docling", "Ollama / OpenAI", "Streaming", "VLM", "Flux", "Web search"], metrics: [] },
    { id: "apa", category: "llm", name: "APA — Agentic Process Automation",
      tags: ["LangGraph", "Multi-agent", "RAG", "Human-in-the-loop", "Postgres checkpoints"], metrics: [] },
    { id: "air", category: "cv", name: "Air Intelligence — GIS Imagery Platform",
      tags: ["UNetFormer", "MTP (RVSA ViT)", "ChangeFormer", "YOLOv11 OBB", "MMDetection", "GIS"],
      metrics: [{ value: "0.64", label: "land-cover mIoU (10 classes)" }, { value: "88.7", label: "change-detection F1" }, { value: "0.70", label: "object-detection mAP50" }, { value: "14", label: "object classes" }] },
    { id: "aware3d", category: "3d", name: "3D-Aware — Real-time LiDAR Perception",
      tags: ["KPConv", "CenterPoint", "ONNX", "TensorRT", "ROS 2", "WebRTC"], metrics: [] },
  ],

  skills: {
    "LLMs & Agents": ["RAG", "LangGraph", "Tool calling", "vLLM", "Ollama", "AWQ", "Guardrails", "LLM evaluation"],
    "Speech & Voice": ["LiveKit / WebRTC", "STT", "TTS", "Streaming synthesis", "VAD & turn detection"],
    "Computer Vision & 3D": ["Remote-sensing segmentation", "Change detection", "YOLOv11 OBB", "MMDetection", "KPConv", "CenterPoint", "TensorRT", "ROS 2"],
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
