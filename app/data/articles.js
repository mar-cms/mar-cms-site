/**
 * Article `content` definition:
 * Each item in this array represents a block of the article.
 *
 * Structure:
 *   - type: The kind of block. Supported values:
 *       "title"  → A heading for a section
 *       "text"   → A paragraph of text
 *       "image"  → An image (value must be a string with the image URL)
 *
 *   - value: The block content.
 *       For "title" and "text":
 *         An object with language codes as keys and the text as values, e.g.:
 *           {
 *             en: "English text",
 *             pt: "Texto em português"
 *           }
 *
 *       For "image":
 *         A string containing the image URL, e.g.:
 *           "https://example.com/image.jpg"
 *
 * Example:
 * const content = [
 *   { type: "title", value: { en: "My Title", pt: "O Meu Título" } },
 *   { type: "text", value: { en: "Hello", pt: "Olá" } },
 *   { type: "image", value: "https://example.com/photo.jpg" }
 * ];
 */
const content = [
  {
    type: "title",
    value: {
      en: "The Rise of AI in Daily Life",
      pt: "A Ascensão da IA na Vida Diária",
    },
  },
  {
    type: "text",
    value: {
      en: "Artificial Intelligence (AI) is no longer a distant concept reserved for research labs. It has become an integral part of modern life, quietly influencing the way we communicate, work, and make decisions. Voice assistants, automated customer support, recommendation engines, and even smart home devices are powered by AI algorithms designed to understand and anticipate human needs. This shift is creating a world where technology is not just a tool but a partner in everyday activities.",
      pt: "A Inteligência Artificial (IA) deixou de ser um conceito distante reservado a laboratórios de investigação. Tornou-se parte integrante da vida moderna, influenciando de forma discreta a forma como comunicamos, trabalhamos e tomamos decisões. Assistentes de voz, apoio ao cliente automatizado, motores de recomendação e até dispositivos domésticos inteligentes são alimentados por algoritmos de IA concebidos para compreender e antecipar as necessidades humanas. Esta mudança está a criar um mundo onde a tecnologia não é apenas uma ferramenta, mas um parceiro nas actividades do dia a dia.",
    },
  },
  {
    type: "title",
    value: {
      en: "Transforming Healthcare",
      pt: "A Transformação dos Cuidados de Saúde",
    },
  },
  {
    type: "text",
    value: {
      en: "In the healthcare sector, AI is revolutionizing patient care. Machine learning models can analyze complex medical data faster and more accurately than humans, detecting patterns that may go unnoticed. AI-assisted diagnostics, predictive analytics for patient outcomes, and personalized treatment plans are becoming standard in top medical institutions. Hospitals are now using AI to manage resources efficiently, streamline workflows, and reduce the risk of human error, ultimately improving patient safety and satisfaction.",
      pt: "No sector da saúde, a IA está a revolucionar os cuidados aos doentes. Modelos de aprendizagem automática conseguem analisar dados clínicos complexos de forma mais rápida e precisa do que os humanos, detectando padrões que poderiam passar despercebidos. Diagnósticos assistidos por IA, análises preditivas para resultados clínicos e planos de tratamento personalizados estão a tornar-se padrão nas principais instituições médicas. Os hospitais já utilizam IA para gerir recursos de forma eficiente, optimizar fluxos de trabalho e reduzir o risco de erro humano, melhorando assim a segurança e a satisfação dos doentes.",
    },
  },
  {
    type: "image",
    value:
      "https://www.monash.edu/__data/assets/image/0006/3672105/fb-AI-healthcare-may-24-getty-1689003176.jpg",
  },
  {
    type: "title",
    value: {
      en: "Education Reimagined",
      pt: "A Educação Reimaginada",
    },
  },
  {
    type: "text",
    value: {
      en: "AI is also making a significant impact on education. Intelligent tutoring systems can adapt lessons to match individual learning speeds and styles, providing personalized feedback that was once impossible in large classrooms. Teachers can rely on AI to automate grading, analyze student performance, and identify areas where extra support is needed. This allows educators to spend more time fostering creativity, critical thinking, and mentorship. In addition, AI-powered educational platforms are helping bridge the gap in remote learning and providing access to quality education worldwide.",
      pt: "A IA também está a ter um impacto significativo na educação. Sistemas de tutoria inteligentes conseguem adaptar as aulas ao ritmo e estilo de aprendizagem de cada aluno, fornecendo feedback personalizado que antes era impossível em turmas numerosas. Os professores podem recorrer à IA para automatizar a correcção de trabalhos, analisar o desempenho dos alunos e identificar áreas onde é necessário apoio adicional. Isto permite que os educadores dediquem mais tempo a estimular a criatividade, o pensamento crítico e a orientação. Além disso, plataformas educativas baseadas em IA estão a ajudar a reduzir a lacuna no ensino à distância e a proporcionar acesso a educação de qualidade em todo o mundo.",
    },
  },
  {
    type: "title",
    value: {
      en: "Ethical Considerations and AI Responsibility",
      pt: "Considerações Éticas e Responsabilidade na IA",
    },
  },
  {
    type: "text",
    value: {
      en: "With great power comes great responsibility. As AI becomes more embedded in our daily lives, ethical considerations must guide its development and implementation. Transparent algorithms, privacy protections, and bias mitigation are essential to ensure fair and equitable AI solutions. Society must ask tough questions about accountability, data security, and the potential consequences of automated decision-making. By addressing these concerns proactively, we can maximize the benefits of AI while minimizing risks.",
      pt: "Com grande poder vem grande responsabilidade. À medida que a IA se torna mais presente no nosso dia a dia, as considerações éticas devem orientar o seu desenvolvimento e implementação. Algoritmos transparentes, protecção da privacidade e mitigação de preconceitos são essenciais para garantir soluções de IA justas e equitativas. A sociedade deve colocar questões difíceis sobre responsabilidade, segurança dos dados e as possíveis consequências da tomada de decisões automatizada. Ao abordar estas questões de forma proactiva, podemos maximizar os benefícios da IA, minimizando simultaneamente os riscos.",
    },
  },
  {
    type: "title",
    value: {
      en: "The Future is Collaborative",
      pt: "O Futuro é Colaborativo",
    },
  },
  {
    type: "text",
    value: {
      en: "The ultimate potential of AI lies in collaboration between humans and machines. Instead of replacing human effort, AI can augment our capabilities, helping us tackle complex problems, generate creative solutions, and make more informed decisions. Industries ranging from finance to transportation to entertainment are already seeing transformative results. As AI continues to evolve, the focus should remain on creating systems that empower humans, enhance productivity, and improve quality of life for everyone.",
      pt: "O potencial máximo da IA reside na colaboração entre humanos e máquinas. Em vez de substituir o esforço humano, a IA pode ampliar as nossas capacidades, ajudando-nos a resolver problemas complexos, gerar soluções criativas e tomar decisões mais informadas. Sectores que vão desde as finanças ao transporte e ao entretenimento já estão a observar resultados transformadores. À medida que a IA continua a evoluir, o foco deve permanecer na criação de sistemas que capacitem as pessoas, aumentem a produtividade e melhorem a qualidade de vida para todos.",
    },
  },
  {
    type: "text",
    value: {
      en: "In conclusion, AI is reshaping the way we live, work, and learn. Its applications are vast, from healthcare and education to business and entertainment. By embracing AI responsibly and ethically, we can unlock unprecedented opportunities and build a future where humans and intelligent machines work together to create a smarter, more connected world.",
      pt: "Em conclusão, a IA está a remodelar a forma como vivemos, trabalhamos e aprendemos. As suas aplicações são vastas, desde a saúde e a educação até aos negócios e ao entretenimento. Ao adoptar a IA de forma responsável e ética, podemos desbloquear oportunidades sem precedentes e construir um futuro onde humanos e máquinas inteligentes trabalhem em conjunto para criar um mundo mais inteligente e mais conectado.",
    },
  },
];

/**
 * Article definition:
 * Represents a single article with metadata and content.
 *
 * Properties:
 *   - id:
 *       Unique numeric identifier for the article.
 *       Example: 1
 *
 *   - img:
 *       String containing the URL of the main article image (cover or thumbnail).
 *       Example:
 *         "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
 *
 *   - title:
 *       Object containing the localized titles of the article.
 *       Keys are language codes (e.g., "en", "pt"), and values are the translations.
 *       Example:
 *         { en: "Article Title", pt: "Título do Artigo" }
 *
 *   - date:
 *       Publication date of the article in ISO format (YYYY-MM-DD).
 *       Example:
 *         "2025-08-15"
 *
 *   - author:
 *       Name of the person who wrote the article.
 *
 *   - content:
 *       An array of content blocks that make up the article body.
 *       See the `content` object documentation for details on structure.
 */
export default [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?cs=srgb&dl=pexels-tara-winstead-8386440.jpg&fm=jpg",
    title: {
      en: "Article Title",
      pt: "Título do Artigo",
    },
    date: "2025-08-15",
    author: "Luis Pereira",
    content: content,
  },
  {
    id: 2,
    img: "https://www.shutterstock.com/image-photo/ai-technology-artificial-intelligence-man-600nw-2263545623.jpg",
    title: {
      en: "Article Title",
      pt: "Título do Artigo",
    },
    date: "2025-08-10",
    author: "Luis Pereira",
    content: content,
  },
  {
    id: 3,
    img: "https://thumbs.dreamstime.com/b/ai-artificial-intelligence-machine-learning-big-data-analysis-automation-technology-business-industrial-manufacturing-132528154.jpg",
    title: {
      en: "Article Title",
      pt: "Título do Artigo",
    },
    date: "2025-08-08",
    author: "Luis Pereira",
    content: content,
  },
  {
    id: 4,
    img: "https://img.freepik.com/vektor-gratis/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg?t=st=1747827240~exp=1747830840~hmac=d127e22e04f059db50f2831d292f7f4d103710133c6f626ce6637cdbca650afb",
    title: {
      en: "Article Title",
      pt: "Título do Artigo",
    },
    date: "2025-08-05",
    author: "Luis Pereira",
    content: content,
  },
  {
    id: 5,
    img: "https://www.zdnet.com/a/img/resize/3d37b69dbf868fb5b2412b5e2b5518fb4403c36c/2024/11/05/11553a12-ce17-4e85-bc83-f7f0a85e0a26/gettyimages-2180270757.jpg?auto=webp&width=1280",
    title: {
      en: "Article Title",
      pt: "Título do Artigo",
    },
    date: "2025-08-02",
    author: "Luis Pereira",
    content: content,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?cs=srgb&dl=pexels-tara-winstead-8386440.jpg&fm=jpg",
    title: {
      en: "Article Title",
      pt: "Título do Artigo",
    },
    date: "2025-08-15",
    author: "Luis Pereira",
    content: content,
  },
  {
    id: 7,
    img: "https://www.shutterstock.com/image-photo/ai-technology-artificial-intelligence-man-600nw-2263545623.jpg",
    title: {
      en: "Article Title",
      pt: "Título do Artigo",
    },
    date: "2025-08-10",
    author: "Luis Pereira",
    content: content,
  },
  {
    id: 8,
    img: "https://thumbs.dreamstime.com/b/ai-artificial-intelligence-machine-learning-big-data-analysis-automation-technology-business-industrial-manufacturing-132528154.jpg",
    title: {
      en: "Article Title",
      pt: "Título do Artigo",
    },
    date: "2025-08-08",
    author: "Luis Pereira",
    content: content,
  },
  {
    id: 9,
    img: "https://img.freepik.com/vektor-gratis/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg?t=st=1747827240~exp=1747830840~hmac=d127e22e04f059db50f2831d292f7f4d103710133c6f626ce6637cdbca650afb",
    title: {
      en: "Article Title",
      pt: "Título do Artigo",
    },
    date: "2025-08-05",
    author: "Luis Pereira",
    content: content,
  },
  {
    id: 10,
    img: "https://www.zdnet.com/a/img/resize/3d37b69dbf868fb5b2412b5e2b5518fb4403c36c/2024/11/05/11553a12-ce17-4e85-bc83-f7f0a85e0a26/gettyimages-2180270757.jpg?auto=webp&width=1280",
    title: {
      en: "Article Title",
      pt: "Título do Artigo",
    },
    date: "2025-08-02",
    author: "Luis Pereira",
    content: content,
  },
];
