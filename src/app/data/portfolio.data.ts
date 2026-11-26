// Todo el contenido del portfolio vive aquí: para actualizarlo no hace falta tocar componentes.

export type ProjectCategory = 'movil' | 'escritorio' | 'web' | 'backend';

export interface ProjectLink {
  label: string;
  url: string;
  kind: 'github' | 'web' | 'play' | 'download';
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  categories: ProjectCategory[];
  links: ProjectLink[];
  /** Imagen (icono de la app) o, si no hay, un emoji sobre un degradado. */
  image?: string;
  emoji?: string;
  hue: number;
}

export interface MiniProject {
  name: string;
  description: string;
  tech: string;
  url: string;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary?: string;
  tasks: string[];
  tech: string[];
}

export interface Study {
  title: string;
  school: string;
  period: string;
}

export interface SkillGroup {
  title: string;
  icon: 'server' | 'phone' | 'globe' | 'spark' | 'eye' | 'terminal' | 'puzzle';
  items: string[];
}

export const PROFILE = {
  name: 'Eneko Rebollo Hernández',
  shortName: 'Eneko Rebollo',
  role: 'Ingeniero de software · Visión artificial e IA',
  headline:
    'Programador backend en C#/.NET y Python con cuatro años de experiencia. Desde 2025 trabajo en videoanálisis e IA: detección de objetos, reconocimiento facial y de matrículas, IA de voz y LLMs en local.',
  location: 'Madrid, España',
  email: 'enekorebollo@gmail.com',
  github: 'https://github.com/enekor',
  linkedin: 'https://www.linkedin.com/in/eneko-rebollo-hern%C3%A1ndez-411122143/',
  photo: 'assets/eneko.jpeg',
  cv: 'cv/cv.pdf',
  cvFileName: 'CV Eneko Rebollo Hernández.pdf',
};

export const ABOUT: string[] = [
  'Empecé a programar en serio en el ciclo de DAM y desde 2022 no he parado. Por el camino me ha tocado migrar aplicaciones de .NET Framework, montar APIs y microservicios en C# y traducir más de una función de Python y SQL a C#. Desde junio de 2025 estoy en ISID, metido de lleno en visión artificial e IA.',
  'Ahora mi día a día es una plataforma de videoanálisis que corre en Linux con GPUs: reconocimiento facial, matrículas, modelos de lenguaje en local que resumen lo que ocurre y alguna que otra prueba con IA de voz. Lo que más disfruto es pensar la arquitectura, pelearme con SDKs de terceros hasta que encajan y dejarlo todo documentado para que quien venga detrás no sufra.',
  'Cuando cierro el portátil del trabajo, suelo abrir el mío. Casi todos mis proyectos nacen de algo que necesito en casa: una tablet vieja que ahora me avisa de cuándo pasa el tren, una app para apuntar lo que levanto en el gimnasio o una alternativa a Flo para mi mujer que no vende sus datos. Los hago con Flutter o Kotlin y, si puedo meterles IA, se la meto. Y sí, soy muy fan de Pokémon; algún repo lo delata.',
];

export const STATS = [
  { value: '4+', label: 'años de experiencia' },
  { value: '70+', label: 'repositorios públicos' },
  { value: '2', label: 'apps en Google Play' },
];

export const SKILLS: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'server',
    items: ['C#', '.NET 6', 'Python', 'C++', 'APIs REST', 'Entity Framework', 'SQL', 'SQLite / MySQL'],
  },
  {
    title: 'Visión artificial',
    icon: 'eye',
    items: ['YOLO', 'RF-DETR', 'OpenCV', 'ONNX', 'PyTorch', 'Label Studio', 'FFmpeg / RTSP'],
  },
  {
    title: 'IA generativa y voz',
    icon: 'spark',
    items: ['Qwen3', 'Gemma 3', 'vLLM', 'Ollama', 'Prompt engineering', 'RAG (Qdrant)', 'Phonexia'],
  },
  {
    title: 'DevOps',
    icon: 'terminal',
    items: ['Docker', 'GitLab CI', 'Git', 'Proxmox', 'Ubuntu Server', 'GPUs NVIDIA', 'Prometheus / Grafana'],
  },
  {
    title: 'Productos integrados',
    icon: 'puzzle',
    items: ['Oosto', 'Vaxtor ALPR', 'Milestone XProtect'],
  },
  {
    title: 'Móvil y frontend',
    icon: 'phone',
    items: ['Flutter', 'Dart', 'Kotlin', 'Jetpack Compose', 'Firebase', 'Angular'],
  },
];

export const EXPERIENCE: Job[] = [
  {
    role: 'Ingeniero de software · Visión artificial e IA',
    company: 'ISID',
    period: 'Jun 2025 — Actualidad',
    current: true,
    summary: 'Plataforma de videoanálisis multicliente en .NET 6 sobre Linux y GPU.',
    tasks: [
      'Integración de reconocimiento facial (Oosto) con identificación por cliente y aislamiento de datos',
      'Resúmenes automáticos con LLMs locales (Qwen3, Gemma 3 sobre vLLM/Ollama): prompts, evaluación y despliegue para un cliente del sector de medios',
      'Evaluación de IA de voz (Phonexia: deepfakes, verificación de hablante, transcripción) con informes para producto',
      'Revisión de código y administración de entornos (Debian, Ubuntu, Docker, GPUs NVIDIA)',
    ],
    tech: ['.NET 6', 'Python', 'Linux', 'Docker', 'vLLM', 'Ollama', 'Oosto', 'Phonexia'],
  },
  {
    role: 'Desarrollador de software',
    company: 'INYPSA',
    period: 'Feb 2023 — Jun 2025',
    summary: 'Responsable de un backend en C#/.NET que superó todas las certificaciones requeridas.',
    tasks: [
      'Migración de .NET Framework a .NET Core 6',
      'Traducción de código Python y SQL a C#',
      'Nuevos servicios, microservicios y APIs para la web',
      'Mantenimiento de una aplicación en Node y Angular',
    ],
    tech: ['C#', '.NET', 'SQL', 'Python', 'Angular', 'Node.js'],
  },
  {
    role: 'Desarrollador de software',
    company: 'Originpath',
    period: 'Sep 2022 — Nov 2022',
    tasks: ['API REST con .NET', 'Mantenimiento de un proyecto Angular y Spring'],
    tech: ['.NET', 'Angular', 'Spring'],
  },
];

export const EDUCATION: Study[] = [
  { title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma', school: 'IES Luis Vives', period: '2020 — 2022' },
  { title: 'Bachillerato', school: 'IES Fernando Fernán Gómez', period: '2018 — 2020' },
];

export const SOFT_SKILLS = ['Trabajo en equipo', 'Resolución de problemas', 'Adaptabilidad', 'Comunicación clara de decisiones técnicas'];

export const LANGUAGES = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'C2' },
];

const gh = (repo: string) => `https://github.com/enekor/${repo}`;

export const PROJECTS: Project[] = [
  {
    name: 'Klip',
    tagline: 'Copia en un dispositivo y pega en otro',
    description:
      'Sincroniza el portapapeles (texto, enlaces e imágenes) entre Windows, Android y Linux a través de la red local, sin nube ni cuentas.',
    highlights: [
      'Cifrado de extremo a extremo (AES-256-GCM + HMAC-SHA256)',
      'Descubrimiento automático y emparejamiento por PIN',
      'Respeta lo que los gestores de contraseñas marcan como sensible',
    ],
    tech: ['C#', '.NET', 'Kotlin', 'Windows', 'Linux'],
    categories: ['escritorio', 'movil'],
    links: [
      { label: 'Código', url: gh('klip'), kind: 'github' },
      { label: 'Web', url: 'https://enekor.github.io/klip/', kind: 'web' },
      { label: 'Descargas', url: gh('klip/releases/latest'), kind: 'download' },
    ],
    emoji: '📋',
    hue: 215,
  },
  {
    name: 'Gastoscopio',
    tagline: 'Gestor de finanzas personales con IA',
    description:
      'Registra gastos e ingresos, programa movimientos fijos y consulta estadísticas mensuales. Es la evolución de mis apps anteriores y está publicada en Google Play.',
    highlights: [
      'Categorización automática y análisis de hábitos con IA',
      'Dashboard con gráficos por categoría y balance mensual',
      'Movimientos recurrentes que se repiten cada mes',
    ],
    tech: ['Flutter', 'Dart', 'IA', 'Android'],
    categories: ['movil'],
    links: [
      { label: 'Código', url: gh('Gastoscopio'), kind: 'github' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.N3k0chan.cashly', kind: 'play' },
    ],
    image: 'https://github.com/enekor/Gastoscopio/blob/main/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true',
    hue: 150,
  },
  {
    name: 'AiKitchen',
    tagline: 'Recetas generadas con IA a partir de lo que tienes en casa',
    description:
      'Busca recetas por nombre o por ingredientes, guarda favoritas, créalas o edítalas y compártelas. Publicada en Google Play.',
    highlights: [
      'Búsqueda por ingredientes o por nombre de receta',
      'Favoritos, edición y creación de recetas propias',
      'Disponible en Android (Google Play) y web',
    ],
    tech: ['Flutter', 'Dart', 'Gemini', 'Groq'],
    categories: ['movil', 'web'],
    links: [
      { label: 'Código', url: gh('AiKitchen'), kind: 'github' },
      { label: 'Web', url: 'https://enekor.github.io/AiKitchen/', kind: 'web' },
      { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.N3k0chan.aikitchen', kind: 'play' },
    ],
    image: 'https://github.com/enekor/AiKitchen/blob/main/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true',
    hue: 25,
  },
  {
    name: 'Spotter',
    tagline: 'Tu compañero de gimnasio',
    description:
      'Registro de pesos, repeticiones y tiempos de descanso, con rachas de entrenamiento y un compañero IA opcional.',
    highlights: [
      'Todo local con Room; clave de API en almacenamiento cifrado',
      'Temporizador de descanso como Foreground Service',
      'Copia de seguridad en la carpeta privada de Google Drive',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit'],
    categories: ['movil'],
    links: [{ label: 'Código', url: gh('spotter'), kind: 'github' }],
    emoji: '🏋️',
    hue: 28,
  },
  {
    name: 'Panel de casa',
    tagline: 'Una tablet antigua convertida en panel de información',
    description:
      'Launcher para una tablet con Android 7 que muestra los próximos trenes de Cercanías en ambos sentidos y el tiempo, sin servidor propio.',
    highlights: [
      'Procesa GTFS y GTFS Realtime de Renfe en el dispositivo',
      'Previsión meteorológica de MET Norway',
      'Módulos en Kotlin puro con tests y benchmarks',
    ],
    tech: ['Kotlin', 'Android', 'GTFS', 'JavaScript'],
    categories: ['movil'],
    links: [{ label: 'Código', url: gh('panelcasa'), kind: 'github' }],
    emoji: '🚆',
    hue: 0,
  },
  {
    name: 'FileSender',
    tagline: 'Archivos del PC a una tablet antigua, y al revés',
    description:
      'Para lo que no cabe en un portapapeles: envía archivos de cualquier tipo entre Windows y Android por la WiFi de casa, incluso a dispositivos con Android 7.',
    highlights: [
      'Arrastrar y soltar en Windows; menú Compartir en Android',
      'APK de ~100 KB sin dependencias',
      'Instalador MSI o versión portátil, sin instalar Java',
    ],
    tech: ['Java', 'Android', 'Windows'],
    categories: ['movil', 'escritorio'],
    links: [{ label: 'Código', url: gh('fileSender'), kind: 'github' }],
    emoji: '📤',
    hue: 190,
  },
  {
    name: 'YTFeedPipe',
    tagline: 'YouTube en una tablet con Android 7, reproduciendo en NewPipe',
    description:
      'Muestra el feed de YouTube con tu sesión iniciada y, al tocar un vídeo, lo abre en NewPipe en lugar del reproductor web.',
    highlights: [
      'WebView que intercepta los enlaces a vídeos, incluida la navegación SPA de YouTube',
      'Amplificador de volumen por encima del 100 % sobre el audio de NewPipe',
      'Bloquea las previsualizaciones automáticas para ahorrar datos y CPU',
    ],
    tech: ['Java', 'Android', 'WebView', 'NewPipe'],
    categories: ['movil'],
    links: [{ label: 'Código', url: gh('YTFeedPipe'), kind: 'github' }],
    emoji: '📺',
    hue: 355,
  },
  {
    name: 'Flont',
    tagline: 'Seguimiento del ciclo menstrual sin vender tus datos',
    description:
      'Importa el historial exportado de Flo y lo guarda en local. Una alternativa privada que hice para mi mujer.',
    highlights: ['Importación del JSON de Flo', 'Datos solo en el dispositivo'],
    tech: ['Flutter', 'Dart'],
    categories: ['movil'],
    links: [{ label: 'Código', url: gh('flont'), kind: 'github' }],
    emoji: '🌸',
    hue: 330,
  },
];

export const MORE_PROJECTS: MiniProject[] = [
  { name: 'Room Planner', description: 'Planifica habitaciones a escala y coloca los muebles.', tech: 'HTML / JS', url: 'https://enekor.github.io/room-planner/' },
  { name: 'PokeCounter', description: 'Contador de rachas con imágenes de la PokéAPI.', tech: 'Kotlin', url: gh('PokeCounter') },
  { name: 'PokeBattleSimulator', description: 'Simulador de combates Pokémon.', tech: 'C#', url: gh('PokeBattleSimulator') },
  { name: 'op-tracker', description: 'Seguimiento de lectura del arco de Elbaf de One Piece.', tech: 'JavaScript', url: 'https://enekor.github.io/op-tracker/' },
  { name: 'Pokemon_randomizer', description: 'Generador de nombres para fusiones Pokémon.', tech: 'Python', url: gh('Pokemon_randomizer') },
  { name: 'BTools', description: 'Herramientas básicas del día a día.', tech: 'Flutter', url: gh('BTools') },
];
