import {
  DEFAULT_SAMPLE,
  FREE_FIRE_PHRASES,
  PROFILE_PHRASES,
  TITLE_PHRASES,
  WHATSAPP_PHRASES,
  type Phrase,
  type TextLimit,
} from "./site.ts";

export type LandingSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type LandingFaq = {
  q: string;
  a: string;
};

export type Landing = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  paragraphs: readonly string[];
  category: string;
  sample: string;
  limit?: TextLimit;
  phrases: readonly Phrase[];
  steps: readonly string[];
  sections: readonly LandingSection[];
  faq: readonly LandingFaq[];
  related: readonly string[];
  alphabet: boolean;
  symbols: boolean;
  names?: boolean;
  blanks?: boolean;
};

const copySteps = (place: string): string[] => [
  "Escribe tu texto o toca una frase lista.",
  `Elige un estilo que se lea bien en ${place}.`,
  "Pulsa Copiar. El botón cambia a ¡Copiado! cuando ya está en el portapapeles.",
  `Pega el resultado en ${place}.`,
];

export const LANDINGS: readonly Landing[] = [
  {
    slug: "letras-para-instagram",
    title: "Letras bonitas para Instagram",
    description:
      "Genera nombres, biografías y pies de foto con letras bonitas para Instagram. Copia el estilo y pégalo en tu perfil.",
    h1: "Letras bonitas para Instagram",
    eyebrow: "Perfil",
    paragraphs: [
      "Un nombre o una biografía con letras distintas hace que el perfil se reconozca antes de leer la foto. Escribe una vez y copia el estilo que quepa en el campo.",
      "El nombre de Instagram admite unos 30 caracteres. La biografía admite 150. El contador de cada tarjeta usa 150, que es el límite de la bio. Si estás eligiendo nombre, quédate por debajo de 30.",
    ],
    category: "aesthetic",
    sample: DEFAULT_SAMPLE,
    limit: {
      label: "Biografía de Instagram",
      max: 150,
      hint: "La biografía admite 150 caracteres. El nombre del perfil admite unos 30.",
    },
    phrases: PROFILE_PHRASES,
    steps: copySteps("Instagram"),
    sections: [
      {
        heading: "Dónde pegarlo",
        paragraphs: [
          "Sirve para el nombre, la biografía y los pies de foto. El nombre de usuario, el que va con @, solo acepta letras, números y punto: estas letras no entran ahí.",
          "Si un estilo se ve como un cuadrado vacío en el teléfono, prueba otra tarjeta. Las cursivas y las negritas suelen mostrarse en más móviles que los marcos muy largos.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Estas letras funcionan en la biografía de Instagram?",
        a: "Sí. Son texto Unicode, no una fuente que haya que instalar. Copia la tarjeta y pégala en la bio.",
      },
      {
        q: "¿Puedo usarlas en el nombre de usuario?",
        a: "No. El @usuario solo admite letras normales, números, punto y guion bajo. Úsalas en el nombre visible y en la biografía.",
      },
      {
        q: "¿Cuántos caracteres caben?",
        a: "Unos 30 en el nombre y 150 en la biografía. El contador avisa al pasar de 150.",
      },
      {
        q: "¿Hace falta una aplicación?",
        a: "No. El generador corre en el navegador y el resultado se pega como texto normal.",
      },
    ],
    related: [
      "letras-para-tiktok",
      "letras-aesthetic",
      "letras-cursivas",
      "letras-con-emojis",
      "letras-para-whatsapp",
      "letras-para-free-fire",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-para-tiktok",
    title: "Letras bonitas para TikTok",
    description:
      "Nombres y biografías con letras bonitas para TikTok. Copia un estilo corto y pégalo en tu perfil.",
    h1: "Letras bonitas para TikTok",
    eyebrow: "Perfil",
    paragraphs: [
      "En TikTok el nombre y la biografía se leen en una pantalla pequeña. Un estilo claro gana a un marco que ocupa media bio.",
      "La biografía ronda los 80 caracteres y el nombre visible unos 30. El contador de esta página usa 80.",
    ],
    category: "aesthetic",
    sample: "Luna",
    limit: {
      label: "Biografía de TikTok",
      max: 80,
      hint: "La biografía admite unos 80 caracteres. El nombre visible admite unos 30.",
    },
    phrases: PROFILE_PHRASES,
    steps: copySteps("TikTok"),
    sections: [
      {
        heading: "Nombre y pie de foto",
        paragraphs: [
          "Pega el estilo en el nombre para que se vea en el perfil y en los comentarios. En el pie de foto puedes permitirte un marco corto si todavía cabe.",
          "El usuario @ es un identificador normal. Las letras decoradas van en el nombre, no en el @.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Sirven para el nombre de TikTok?",
        a: "Sirven para el nombre visible. El @usuario sigue siendo letras y números normales.",
      },
      {
        q: "¿Cuál es el límite de la biografía?",
        a: "Unos 80 caracteres. Si la tarjeta se pone en rojo, acorta el texto o elige un estilo sin marco.",
      },
      {
        q: "¿Qué estilos se leen mejor en el móvil?",
        a: "Negrita, cursiva y gótica. Los marcos quedan bien cuando el texto es de una o dos palabras.",
      },
      {
        q: "¿Hay que instalar una fuente?",
        a: "No. Copias el texto y TikTok lo muestra con las letras que ya trae el teléfono.",
      },
    ],
    related: [
      "letras-para-instagram",
      "letras-aesthetic",
      "letras-chiquitas",
      "letras-con-emojis",
      "letras-para-whatsapp",
      "letras-cursivas",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-aesthetic",
    title: "Letras aesthetic para copiar y pegar",
    description:
      "Letras aesthetic para copiar y pegar en biografías, estados y títulos. Estilos suaves, marcos cortos y versalitas.",
    h1: "Letras aesthetic para copiar y pegar",
    eyebrow: "Estilo",
    paragraphs: [
      "Aesthetic, en este generador, significa letras suaves: manuscrita, versalitas, marcos finos y un poco de espacio entre caracteres.",
      "Quedan bien en biografías y en títulos cortos. En un nick de juego, revisa el contador: el espacio extra y los marcos suman caracteres.",
    ],
    category: "aesthetic",
    sample: DEFAULT_SAMPLE,
    phrases: PROFILE_PHRASES,
    steps: copySteps("tu biografía o tu título"),
    sections: [
      {
        heading: "Cómo elegir un estilo aesthetic",
        paragraphs: [
          "Si el texto es largo, usa cursiva manuscrita o versalitas, sin marco. Si es una sola palabra, un marco de luna, alas o destellos suele bastar.",
          "Los estilos de esta página están filtrados. En Todos aparecen el resto, por si quieres comparar.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué es una letra aesthetic?",
        a: "Aquí es un estilo Unicode de aspecto suave: manuscrita, versalitas o un marco corto. No es una fuente descargable.",
      },
      {
        q: "¿Se pueden usar en Instagram y TikTok?",
        a: "Sí. Copia la tarjeta y pégala en el nombre o en la biografía, respetando el límite de cada red.",
      },
      {
        q: "¿Por qué algunas letras no cambian?",
        a: "Unicode no tiene todas las letras en todos los estilos. La ñ y las tildes se conservan aunque el dibujo base cambie.",
      },
      {
        q: "¿El espaciado cuenta como caracteres?",
        a: "Sí. El estilo Espaciado separa cada letra y alarga el texto. Míralo antes de pegarlo en una bio corta.",
      },
    ],
    related: [
      "letras-para-instagram",
      "letras-para-tiktok",
      "letras-cursivas",
      "letras-decoradas",
      "letras-chiquitas",
      "letras-con-corazones",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-para-whatsapp",
    title: "Letras bonitas para WhatsApp",
    description:
      "Letras cursivas y decoradas para WhatsApp: saludos, mensajes de amor, cumpleaños, estados y nombres de contacto.",
    h1: "Letras bonitas para WhatsApp",
    eyebrow: "Mensajes",
    paragraphs: [
      "Sirve para un buenos días, un te amo, un feliz cumpleaños, el estado y el nombre de un contacto. Escribes la frase, copias el estilo y la pegas en el chat.",
      "El texto de información del perfil admite unos 139 caracteres. Un mensaje de chat puede ser más largo. El contador de esta página marca 139 para el estado y la info.",
    ],
    category: "cursiva",
    sample: "Te amo",
    limit: {
      label: "Info de WhatsApp",
      max: 139,
      hint: "La información del perfil admite unos 139 caracteres. En el chat puedes escribir más, pero un estilo largo se lee peor.",
    },
    phrases: WHATSAPP_PHRASES,
    steps: copySteps("WhatsApp"),
    sections: [
      {
        heading: "Chat, estado y contacto",
        paragraphs: [
          "En el chat y en el estado casi todos los estilos se ven. En el nombre del contacto depende del teléfono: algunos guardan las letras decoradas y otros las cambian por el carácter normal.",
          "Para un saludo, la cursiva o un marco de corazones corto suele ser suficiente. Si el marco no cabe, quédate con la cursiva.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Funcionan en el estado de WhatsApp?",
        a: "Sí. Copia el estilo y pégalo al publicar el estado o en la información del perfil.",
      },
      {
        q: "¿Puedo guardarlas en el nombre de un contacto?",
        a: "En muchos teléfonos sí. Si el contacto vuelve a verse con letras normales, el sistema no guardó esos caracteres: prueba un estilo más simple, como negrita o cursiva.",
      },
      {
        q: "¿Hay frases listas?",
        a: "Sí: buenos días, te amo, te quiero, feliz cumpleaños y feliz aniversario. Al tocarlas se escriben en el recuadro.",
      },
      {
        q: "¿Hace falta la misma fuente en el otro teléfono?",
        a: "No. El otro teléfono muestra el texto Unicode con las letras que ya tiene instaladas.",
      },
    ],
    related: [
      "letras-cursivas",
      "letras-con-corazones",
      "letras-para-instagram",
      "letras-decoradas",
      "letras-con-emojis",
      "letras-para-titulos",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-cursivas",
    title: "Letras cursivas bonitas",
    description:
      "Letras cursivas para copiar y pegar. Manuscritas, negritas e inclinadas, listas para WhatsApp, Instagram y títulos.",
    h1: "Letras cursivas bonitas",
    eyebrow: "Estilo",
    paragraphs: [
      "La cursiva es el estilo que más gente busca para un mensaje o una biografía: se lee, y se nota que no es el texto plano.",
      "Hay varias. La manuscrita parece escrita a mano. La negrita cursiva se ve más en un nombre. Prueba la frase entera, no solo una letra, porque la ñ y las tildes cambian el dibujo.",
    ],
    category: "cursiva",
    sample: "Buenos días",
    phrases: WHATSAPP_PHRASES,
    steps: copySteps("el mensaje o la biografía"),
    sections: [
      {
        heading: "Cuál cursiva usar",
        paragraphs: [
          "Para un saludo o una frase de amor, la manuscrita. Para un nombre de perfil, la negrita cursiva o la sans cursiva, que aguantan mejor un tamaño pequeño.",
          "Si una letra se queda en el estilo normal, Unicode no tiene esa pieza en cursiva. La palabra sigue siendo legible.",
        ],
      },
    ],
    faq: [
      {
        q: "¿La cursiva se pega en WhatsApp?",
        a: "Sí. No es la cursiva del formato de WhatsApp: es otro carácter, y se mantiene aunque el chat quite el formato.",
      },
      {
        q: "¿Sirve para títulos?",
        a: "Sí. Copia el título y pégalo en Word, en Canva o en la portada. Sigue siendo texto, no una plantilla para imprimir.",
      },
      {
        q: "¿Se ve igual en iPhone y en Android?",
        a: "El estilo es el mismo. El trazo cambia un poco según la fuente del sistema. Si se ve un recuadro vacío, elige otra cursiva.",
      },
      {
        q: "¿Puedo mezclar cursiva y corazones?",
        a: "Elige la cursiva y, si aún cabe, un marco de la página de corazones. Cada tarjeta es un estilo cerrado.",
      },
    ],
    related: [
      "letras-para-whatsapp",
      "letras-aesthetic",
      "letras-goticas",
      "letras-con-corazones",
      "letras-para-instagram",
      "abecedario",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "nombres-para-free-fire",
    title: "Nombres para Free Fire | Más de 1000 nicknames",
    description:
      "Más de 1000 nombres para Free Fire listos para copiar: chidos, de mujer, de clan, dúos y con símbolos. Cada uno marca si cabe en 12 caracteres.",
    h1: "Nombres para Free Fire",
    eyebrow: "Generador de nicknames",
    paragraphs: [
      "Elige un nombre ya hecho o escribe el tuyo arriba. Hay 60 nombres en cada categoría y se ven 12 al empezar. Ver todos abre el resto.",
      "Free Fire admite 12 caracteres en el nick. El número de cada tarjeta es el texto que vas a pegar. Si está en rojo, ese nombre no cabe.",
    ],
    category: "juegos",
    sample: "Fuego",
    limit: {
      label: "Nick de Free Fire",
      max: 12,
      hint: "El nombre del jugador admite 12 caracteres. Si la tarjeta pasa de 12, ese estilo no cabe en el nick.",
    },
    phrases: FREE_FIRE_PHRASES,
    steps: [
      "Toca una categoría o escribe tu palabra en el conversor.",
      "Mira el contador. En negro cabe en los 12. En rojo, no.",
      "Toca el nombre. Verás ¡Copiado!.",
      "Pégalo en el perfil de Free Fire, junto al lápiz del nickname.",
    ],
    sections: [
      {
        heading: "Cómo cambiar el nombre en Free Fire",
        paragraphs: [
          "Abre el juego, entra en tu perfil y toca el lápiz junto al nickname. Pega el nombre y confirma con la tarjeta de cambio o los diamantes que pida el juego.",
          "El id numérico no cambia. Si el juego rechaza un símbolo, quita el adorno y deja la gótica o la negrita.",
        ],
      },
      {
        heading: "Qué hace que un nick se lea en la partida",
        paragraphs: [
          "Las palabras de 4 a 6 letras en gótica, negrita o versalitas se leen en el lobby. Un marco largo queda bien en una bio y mal en un nombre de 12.",
          "Los dúos van en una sola copia porque son dos nicks. Pártelos si cada jugador tiene su propio límite.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuántos nombres hay?",
        a: "Más de 1000, en 17 categorías de 60. Cada categoría muestra 12 y el botón Ver todos abre los 60.",
      },
      {
        q: "¿Puedo copiarlos?",
        a: "Sí. Toca la tarjeta. El nombre pasa al portapapeles sin seleccionar letra por letra.",
      },
      {
        q: "¿Cuál es el límite de Free Fire?",
        a: "12 caracteres. La tarjeta se pone en rojo cuando el texto copiado pasa de 12.",
      },
      {
        q: "¿Sirven los símbolos?",
        a: "Muchos sí. Si la partida sustituye uno por un cuadrado, usa gótica o negrita, que fallan menos.",
      },
      {
        q: "¿Y si quiero escribir el mío?",
        a: "Usa el conversor de arriba. También está la página de letras para Free Fire, con los estilos cortos y el mismo límite.",
      },
    ],
    related: ["letras-para-free-fire", "letras-goticas", "letras-para-discord", "letras-burbuja", "texto-invisible", "simbolos"],
    alphabet: false,
    symbols: false,
    names: true,
  },
  {
    slug: "texto-invisible",
    title: "Texto invisible para copiar y pegar",
    description:
      "Copia un espacio en blanco para nombres y mensajes. El relleno Hangul cuenta como un carácter y es el que más juegos aceptan.",
    h1: "Texto invisible para copiar y pegar",
    eyebrow: "Espacio en blanco",
    paragraphs: [
      "Un texto invisible es un carácter que ocupa sitio y no dibuja una letra. Sirve para separar dos palabras de un nick o para dejar un hueco donde un espacio normal no entra.",
      "El más fiable en juegos es el relleno Hangul, U+3164. Cuenta dentro de los 12 caracteres de Free Fire. No borra tu nombre: solo mete un espacio.",
    ],
    category: "all",
    sample: "Luna",
    phrases: [],
    steps: [
      "Elige un espacio: uno, cinco, o Luna y Nova ya separados.",
      "Toca la tarjeta.",
      "Pégalo donde quieras el hueco.",
      "Si la app lo borra, prueba el espacio ancho.",
    ],
    sections: [
      {
        heading: "Dónde se usa",
        paragraphs: [
          "En un nick, para separar dos palabras cortas sin que el juego las junte. En un mensaje, para un hueco que no se come al enviar.",
          "No es un mensaje vacío de verdad. La app recibe un carácter. Algunas lo enseñan como un cuadrito y otras lo esconden.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Por qué no se ve nada?",
        a: "Porque el carácter es un espacio. Después de copiar, pégalo entre dos letras para comprobar que está.",
      },
      {
        q: "¿Cuenta en Free Fire?",
        a: "Sí. Cada espacio invisible cuenta como un carácter de los 12.",
      },
      {
        q: "¿WhatsApp lo envía?",
        a: "A veces lo recorta. Si desaparece, usa el espacio ancho de la lista.",
      },
      {
        q: "¿Puedo generar cientos?",
        a: "Cinco ya se notan en un nick. Más que eso te deja sin sitio para el nombre.",
      },
    ],
    related: ["nombres-para-free-fire", "simbolos", "letras-para-whatsapp", "letras-para-free-fire"],
    alphabet: false,
    symbols: false,
    blanks: true,
  },
  {
    slug: "letras-para-free-fire",
    title: "Letras bonitas para Free Fire | Nombres cortos",
    description:
      "Nombres para Free Fire con letras góticas, negritas y burbuja. El nick admite 12 caracteres: copia un nombre que quepa.",
    h1: "Nombres con letras bonitas para Free Fire",
    eyebrow: "Juego",
    paragraphs: [
      "El nombre de Free Fire admite 12 caracteres. Un marco largo que queda precioso en Instagram no cabe en el nick. Esta página abre estilos cortos: gótica, negrita, burbuja y algún símbolo de una sola pieza.",
      "Toca un nombre listo —Fuego, Luna, Nova, Sombra, Rayo o Lobo— y copia la tarjeta cuyo contador no esté en rojo. El número de cada tarjeta es el largo del texto que vas a pegar, no el del recuadro.",
    ],
    category: "juegos",
    sample: "Fuego",
    limit: {
      label: "Nick de Free Fire",
      max: 12,
      hint: "El nombre del jugador admite 12 caracteres. Si la tarjeta pasa de 12, ese estilo no cabe en el nick.",
    },
    phrases: FREE_FIRE_PHRASES,
    steps: [
      "Toca un nombre corto o escribe el tuyo. Doce caracteres como máximo.",
      "Mira el número de la tarjeta. En rojo significa que ese estilo no cabe en Free Fire.",
      "Pulsa Copiar en una tarjeta que siga en negro.",
      "Pega el nombre en el perfil de Free Fire.",
    ],
    sections: [
      {
        heading: "Nombres cortos que suelen caber",
        paragraphs: [
          "Fuego, Luna, Nova, Sombra, Rayo y Lobo tienen entre 4 y 6 letras. En gótica o en negrita siguen midiendo lo mismo, así que entran en los 12. Un marco de estrella suma dos caracteres: Fuego con estrellas sigue dentro; un nombre más largo, no.",
          "La gótica es la que más se busca para un nick. La burbuja y la cuadrada también cambian el dibujo sin alargar la palabra. El glitch y los marcos dobles es mejor dejarlos para una bio, no para el nombre.",
        ],
      },
      {
        heading: "Dónde pegar el nick",
        paragraphs: [
          "Se pega en el nombre del jugador, dentro del perfil de Free Fire. El id numérico no cambia. Si el juego rechaza el texto, quita el marco y deja solo la gótica o la negrita.",
          "Para el clan o para Discord, el límite es otro. Discord admite unos 32 caracteres y tiene su propia página.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuántos caracteres tiene un nombre de Free Fire?",
        a: "12. El contador de cada estilo se pone rojo cuando el texto copiado pasa de 12.",
      },
      {
        q: "¿Qué letras quedan mejor en el nick?",
        a: "Gótica, gótica negrita, negrita y burbuja. No alargan el nombre. Los corazones y los marcos largos suelen pasarse del límite.",
      },
      {
        q: "¿Puedo usar el mismo nombre en Roblox o Discord?",
        a: "En Discord, casi siempre. En Roblox el @usuario no acepta estas letras; allí van en el nombre visible. Cada juego tiene su página y su límite.",
      },
      {
        q: "¿El nombre se ve igual dentro de la partida?",
        a: "En el perfil suele verse. Dentro de la partida el juego a veces sustituye un carácter que no tiene. Si pasa, usa gótica o negrita, que fallan menos.",
      },
    ],
    related: [
      "nombres-para-free-fire",
      "letras-goticas",
      "letras-para-discord",
      "letras-para-roblox",
      "letras-burbuja",
      "letras-negritas",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-para-roblox",
    title: "Letras bonitas para nombres de Roblox",
    description:
      "Letras bonitas para el nombre visible de Roblox. El usuario @ solo admite letras, números y guion bajo.",
    h1: "Letras bonitas para Roblox",
    eyebrow: "Juego",
    paragraphs: [
      "El usuario de Roblox, el que empieza por @, solo admite letras normales, números y guion bajo. Pegar una gótica ahí no va a funcionar.",
      "Estas letras sí tienen sentido en el nombre visible y en los textos del perfil o del grupo, cuando el juego las deja pasar. El nombre visible ronda los 20 caracteres. El contador usa ese tope.",
    ],
    category: "juegos",
    sample: "Luna",
    limit: {
      label: "Nombre visible de Roblox",
      max: 20,
      hint: "El @usuario no acepta letras decoradas. El contador es para el nombre visible, unos 20 caracteres.",
    },
    phrases: FREE_FIRE_PHRASES,
    steps: copySteps("el nombre visible de Roblox"),
    sections: [
      {
        heading: "Usuario y nombre visible",
        paragraphs: [
          "Crea el @usuario con letras normales. Luego prueba el nombre visible con gótica o negrita. Si Roblox lo borra al guardar, ese campo no está aceptando Unicode y no hay un estilo que lo fuerce.",
          "Para un nick de Free Fire el límite es 12 y el campo sí suele aceptar estas letras. No uses el mismo largo para los dos juegos.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo poner letras góticas en el @ de Roblox?",
        a: "No. El usuario solo admite letras sin adornos, números y guion bajo.",
      },
      {
        q: "¿Y en el nombre que ven los demás?",
        a: "A veces sí. Si al guardar vuelve al texto normal, Roblox ha filtrado esos caracteres.",
      },
      {
        q: "¿Cuánto puede medir?",
        a: "El nombre visible ronda los 20 caracteres. El contador avisa al pasar de ahí.",
      },
      {
        q: "¿Sirve el mismo estilo para Free Fire?",
        a: "El estilo sí, el límite no. Free Fire admite 12 caracteres en el nick.",
      },
    ],
    related: [
      "letras-para-free-fire",
      "letras-para-discord",
      "letras-goticas",
      "letras-negritas",
      "letras-burbuja",
      "letras-graffiti",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-para-discord",
    title: "Letras bonitas para Discord",
    description:
      "Nombres y apodos con letras bonitas para Discord. El apodo del servidor admite unos 32 caracteres.",
    h1: "Letras bonitas para Discord",
    eyebrow: "Juego",
    paragraphs: [
      "En Discord puedes usar estas letras en el nombre global y en el apodo de un servidor. Un apodo gótico o con un marco corto se distingue en la lista de miembros.",
      "El apodo admite unos 32 caracteres. Es más holgado que Free Fire, así que aquí sí cabe un símbolo al lado del nombre.",
    ],
    category: "juegos",
    sample: "Nova",
    limit: {
      label: "Apodo de Discord",
      max: 32,
      hint: "El apodo de un servidor admite unos 32 caracteres.",
    },
    phrases: FREE_FIRE_PHRASES,
    steps: copySteps("Discord"),
    sections: [
      {
        heading: "Nombre global y apodo",
        paragraphs: [
          "El nombre global es el de tu cuenta. El apodo es el que un servidor muestra en su lista. Puedes usar un estilo en uno y otro texto en el otro.",
          "Si un estilo se ve tachado o con cuadrados, elige gótica, negrita o doble trazo. Esos fallan menos entre móvil y escritorio.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Discord acepta letras góticas?",
        a: "En el nombre y en el apodo, normalmente sí. Si el servidor tiene un filtro, puede bloquear símbolos concretos.",
      },
      {
        q: "¿Cuántos caracteres caben?",
        a: "Unos 32 en el apodo. El contador de la tarjeta usa ese número.",
      },
      {
        q: "¿Sirve para el estado personalizado?",
        a: "Sí. Un estado es corto: una palabra en cursiva o con un destello suele verse mejor que una frase larga.",
      },
      {
        q: "¿Es el mismo límite que Free Fire?",
        a: "No. Free Fire admite 12 caracteres en el nick. Discord admite unos 32 en el apodo.",
      },
    ],
    related: [
      "letras-para-free-fire",
      "letras-para-roblox",
      "letras-goticas",
      "letras-negritas",
      "letras-graffiti",
      "letras-burbuja",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-goticas",
    title: "Letras góticas bonitas",
    description:
      "Letras góticas para copiar y pegar. Para nombres de Free Fire, Discord y títulos con estilo medieval.",
    h1: "Letras góticas para copiar y pegar",
    eyebrow: "Estilo",
    paragraphs: [
      "La gótica es la letra de los nicks y de los títulos que quieren verse antiguos sin dejar de ser texto. Hay dos: gótica y gótica negrita.",
      "En Free Fire miden lo mismo que tu palabra original, así que un nombre de 6 letras sigue cabiendo en los 12 del nick. Un marco alrededor ya es otra cuenta.",
    ],
    category: "gotica",
    sample: "Sombra",
    phrases: FREE_FIRE_PHRASES,
    steps: copySteps("el nick o el título"),
    sections: [
      {
        heading: "Gótica en un nombre de juego",
        paragraphs: [
          "Escribe el nick, copia la tarjeta Gótica y comprueba el contador si estás en Free Fire. Doce caracteres es el tope del nombre.",
          "Para un título de portada puedes permitir una gótica negrita, que se lee mejor cuando la palabra es larga.",
        ],
      },
    ],
    faq: [
      {
        q: "¿La gótica cabe en un nombre de Free Fire?",
        a: "Sí, porque no añade caracteres. El límite de 12 se aplica al texto ya convertido. Un marco extra puede sacarte de ese límite.",
      },
      {
        q: "¿Se puede usar en Instagram?",
        a: "Sí, en el nombre visible y en la biografía. No en el @usuario.",
      },
      {
        q: "¿Por qué a veces se ve un recuadro?",
        a: "Ese teléfono no tiene el carácter gótico en su fuente. Prueba la gótica negrita o la negrita normal.",
      },
      {
        q: "¿Incluye números?",
        a: "La gótica clásica de Unicode no trae dígitos. Los números se quedan como los escribiste.",
      },
    ],
    related: [
      "letras-para-free-fire",
      "letras-para-discord",
      "letras-para-roblox",
      "letras-negritas",
      "letras-graffiti",
      "abecedario",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-negritas",
    title: "Letras negritas para copiar y pegar",
    description: "Letras negritas que se pegan en Instagram, WhatsApp, Free Fire y títulos. Sin instalar fuentes.",
    h1: "Letras negritas para copiar y pegar",
    eyebrow: "Estilo",
    paragraphs: [
      "La negrita Unicode se mantiene aunque la aplicación no tenga botón de negrita. Por eso funciona en un nombre de juego y en un estado.",
      "No alarga el texto. En Free Fire, un nick en negrita mide los mismos caracteres que el nick normal.",
    ],
    category: "negrita",
    sample: DEFAULT_SAMPLE,
    phrases: [{ label: "Negrita", text: "Hola" }, ...FREE_FIRE_PHRASES.slice(0, 4)],
    steps: copySteps("el nombre o el mensaje"),
    sections: [
      {
        heading: "Negrita y negrita cursiva",
        paragraphs: [
          "La negrita recta se lee de lejos. La negrita cursiva y la manuscrita negrita sirven cuando quieres algo más blando sin perder peso.",
          "Sans negrita es la más parecida a una letra de interfaz. Úsala si la gótica te resulta difícil de leer.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Es la misma negrita de WhatsApp?",
        a: "No. La de WhatsApp es formato y se puede quitar. Esta es otro carácter y se queda al copiar.",
      },
      {
        q: "¿Cabe en Free Fire?",
        a: "Sí. No suma caracteres. El tope sigue siendo 12.",
      },
      {
        q: "¿Puedo poner una frase larga?",
        a: "Sí. En un chat no hay el límite del nick. En una bio, respeta el contador de esa red.",
      },
      {
        q: "¿Los números también cambian?",
        a: "En la negrita y en la sans negrita, sí. En algunos estilos manuscritos los números se quedan igual.",
      },
    ],
    related: [
      "letras-goticas",
      "letras-cursivas",
      "letras-para-free-fire",
      "letras-para-instagram",
      "letras-burbuja",
      "letras-para-whatsapp",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-chiquitas",
    title: "Letras chiquitas para copiar y pegar",
    description: "Letras pequeñas, versalitas, superíndice y subíndice para copiar y pegar en bios y comentarios.",
    h1: "Letras chiquitas para copiar y pegar",
    eyebrow: "Estilo",
    paragraphs: [
      "Las letras chiquitas sirven para una bio, un comentario o una aclaración al lado de un nombre. Versalitas, superíndice y subíndice están en esta página.",
      "Unicode no tiene todas las letras en subíndice. Las que faltan se quedan en tamaño normal para no inventar un carácter.",
    ],
    category: "chiquitas",
    sample: "hola",
    phrases: PROFILE_PHRASES,
    steps: copySteps("la biografía o el comentario"),
    sections: [
      {
        heading: "Cuándo usarlas",
        paragraphs: [
          "Versalitas para un nombre aesthetic. Superíndice para una palabra corta. Subíndice solo si compruebas que todas las letras de tu palabra existen: si no, mezcla tamaños.",
          "En Free Fire un nick diminuto a veces se vuelve ilegible dentro de la partida. Mejor déjalas para la bio.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Por qué alguna letra no se hace pequeña?",
        a: "Porque ese estilo no tiene esa letra en Unicode. Preferimos dejarla normal antes que poner un símbolo equivocado.",
      },
      {
        q: "¿Se leen en el móvil?",
        a: "Las versalitas sí. El superíndice y el subíndice, mejor en una o dos palabras.",
      },
      {
        q: "¿Cuentan igual en Instagram?",
        a: "Sí. Una letra pequeña sigue siendo un carácter.",
      },
      {
        q: "¿Puedo usarlas en un título de cuaderno?",
        a: "Puedes copiarlas a Word o a Canva. Para un título que se lee a distancia, la negrita o la gótica se ven mejor.",
      },
    ],
    related: ["letras-aesthetic", "letras-para-instagram", "letras-para-tiktok", "letras-cursivas", "abecedario", "letras-decoradas"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-burbuja",
    title: "Letras burbuja para copiar y pegar",
    description: "Letras burbuja, redondas y cuadradas para nombres y títulos. Cada letra sigue ocupando un carácter.",
    h1: "Letras burbuja para copiar y pegar",
    eyebrow: "Estilo",
    paragraphs: [
      "La burbuja mete cada letra en un círculo. La cuadrada, en un recuadro. El largo de la palabra no cambia, y eso importa en un nick de 12 caracteres.",
      "Quedan claras en nombres cortos. En una frase larga cansan: úsalas para una palabra.",
    ],
    category: "burbuja",
    sample: "Luna",
    phrases: FREE_FIRE_PHRASES,
    steps: copySteps("el nombre"),
    sections: [
      {
        heading: "Burbuja en juegos y en títulos",
        paragraphs: [
          "En Free Fire, Luna en burbuja sigue midiendo 4. Cabe. Un nombre de 12 letras también mide 12, así que entra justo, sin margen para un símbolo más.",
          "Para un cartel, copia la palabra y pégala en el diseño. Esto no genera un molde para recortar.",
        ],
      },
    ],
    faq: [
      {
        q: "¿La burbuja alarga el texto?",
        a: "No. Cada letra se sustituye por un carácter redondo. El contador no sube.",
      },
      {
        q: "¿Hay minúsculas?",
        a: "En la burbuja blanca, sí. En la burbuja negra y en la cuadrada, Unicode solo trae mayúsculas, así que la palabra se ve en ese juego de letras.",
      },
      {
        q: "¿Funciona en WhatsApp?",
        a: "Casi siempre. Si alguna letra sale vacía, prueba la burbuja blanca.",
      },
      {
        q: "¿Sirve para un abecedario?",
        a: "Sí. En la página del abecedario puedes copiar letra por letra, incluida la Ñ.",
      },
    ],
    related: ["letras-para-free-fire", "letras-goticas", "letras-negritas", "abecedario", "letras-decoradas", "letras-para-discord"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-graffiti",
    title: "Letras graffiti para copiar y pegar",
    description:
      "Estilos con aire graffiti hechos con texto Unicode: cuadradas, bloques y neón. No son un dibujo ni una fuente para instalar.",
    h1: "Letras graffiti para copiar y pegar",
    eyebrow: "Estilo",
    paragraphs: [
      "Un graffiti de verdad se dibuja. Lo que hay aquí es texto con aire de bloque, sombra o neón, para pegar en un nombre, un estado o un título.",
      "Si buscas un molde para imprimir o una letra para calcar, este generador no lo fabrica. Copia el texto y llévalo a tu diseño.",
    ],
    category: "graffiti",
    sample: "Nova",
    phrases: FREE_FIRE_PHRASES,
    steps: copySteps("el nombre o el título"),
    sections: [
      {
        heading: "Qué puedes esperar",
        paragraphs: [
          "Cuadrada, bloque, sombra y glitch suave están en este filtro. El glitch añade marcas encima de la letra: se ve más sucio y en algunos teléfonos se descuadra. Para un nick, empieza por la cuadrada.",
          "En Free Fire confirma que la tarjeta no pase de 12. El glitch puede contar de más dentro del juego aunque aquí se vea como una sola letra.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Es una fuente graffiti?",
        a: "No. No hay archivo que descargar. Es texto que puedes copiar.",
      },
      {
        q: "¿Puedo imprimirlo como molde?",
        a: "Puedes pegarlo en un documento y ampliarlo, pero no es una plantilla de lettering ni un molde de foami.",
      },
      {
        q: "¿El glitch es seguro de copiar?",
        a: "Usamos como mucho dos marcas por letra para que no rompa el chat. Aun así, en un nick corto es mejor un estilo limpio.",
      },
      {
        q: "¿Sirve para Free Fire?",
        a: "La cuadrada, sí. Revisa el contador de 12 antes de copiar un estilo con símbolos.",
      },
    ],
    related: ["letras-goticas", "letras-para-free-fire", "letras-burbuja", "letras-para-discord", "letras-decoradas", "letras-negritas"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-decoradas",
    title: "Letras decoradas para copiar y pegar",
    description: "Letras decoradas con flores, estrellas, marcos y coronas. Copia el texto ya enmarcado.",
    h1: "Letras decoradas para copiar y pegar",
    eyebrow: "Lettering",
    paragraphs: [
      "Una letra decorada, aquí, es tu texto con un marco: flores, estrellas, alas, corona. El marco suma caracteres. Míralo si el destino es una bio o un nick.",
      "Para un título de cartel puedes permitirte el marco. Para Free Fire, casi nunca.",
    ],
    category: "decoradas",
    sample: DEFAULT_SAMPLE,
    phrases: [{ label: "Bienvenidos", text: "Bienvenidos" }, ...PROFILE_PHRASES],
    steps: copySteps("el título o la biografía"),
    sections: [
      {
        heading: "Decorar sin salirte del límite",
        paragraphs: [
          "Un marco de una flor a cada lado suma dos caracteres. Uno doble suma cuatro. La palabra de dentro no cambia de estilo en estas tarjetas: si la quieres cursiva y con flores, copia primero la cursiva y acepta que el marco es otra tarjeta.",
          "Esto no es un alfabeto para imprimir. Si necesitas el abecedario letra por letra, está en su página.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Las flores forman parte del texto?",
        a: "Sí. Al copiar se llevan la palabra y el marco, todo junto.",
      },
      {
        q: "¿Puedo decorar solo la inicial?",
        a: "Escribe la inicial en el recuadro y copia un marco. Para el resto de la palabra, cópiala en otro estilo.",
      },
      {
        q: "¿Sirven para un cumpleaños?",
        a: "Sí. Escribe Feliz cumpleaños, elige un marco corto y pégalo en WhatsApp o en una tarjeta digital.",
      },
      {
        q: "¿Y para imprimir moldes?",
        a: "No fabricamos moldes. El resultado es texto para pegar en Canva, Word o un chat.",
      },
    ],
    related: ["letras-con-corazones", "letras-con-emojis", "abecedario", "letras-para-titulos", "letras-aesthetic", "simbolos"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-con-corazones",
    title: "Letras bonitas con corazones",
    description: "Texto con corazones para copiar y pegar en WhatsApp, Instagram y dedicatorias.",
    h1: "Letras bonitas con corazones",
    eyebrow: "Lettering",
    paragraphs: [
      "Para un te amo, un cumpleaños o una bio corta. El corazón va a los lados del texto y se copia con él.",
      "Dos corazones suman dos caracteres. En una biografía larga casi no se notan. En un nick de Free Fire, cuenta antes de copiar.",
    ],
    category: "corazones",
    sample: "Te amo",
    phrases: WHATSAPP_PHRASES,
    steps: copySteps("el mensaje"),
    sections: [
      {
        heading: "Mensajes que combinan bien",
        paragraphs: [
          "Te amo, te quiero y feliz cumpleaños están listos arriba. Si la frase es larga, un solo par de corazones finos se lee mejor que una fila de símbolos.",
          "La cursiva del mensaje, si la quieres sin marco, está en la página de letras cursivas.",
        ],
      },
    ],
    faq: [
      {
        q: "¿El corazón se copia junto con la frase?",
        a: "Sí. La tarjeta entera va al portapapeles.",
      },
      {
        q: "¿WhatsApp los muestra?",
        a: "Los corazones de texto sí. Si uno sale en blanco y negro o a color depende del teléfono, no del generador.",
      },
      {
        q: "¿Puedo ponerlos en el nombre de un contacto?",
        a: "Pruébalo. Algunos teléfonos guardan el corazón y otros lo quitan al guardar el contacto.",
      },
      {
        q: "¿Caben en Free Fire?",
        a: "Solo si el nombre más los corazones suman 12 o menos. La página de Free Fire marca ese límite en rojo.",
      },
    ],
    related: ["letras-para-whatsapp", "letras-cursivas", "letras-decoradas", "letras-con-emojis", "letras-para-instagram", "simbolos"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-con-emojis",
    title: "Letras bonitas con emojis",
    description: "Marcos con emoji para copiar y pegar: fuego, mariposa, luna, lazo y más. El emoji no se rompe al invertir el texto.",
    h1: "Letras bonitas con emojis",
    eyebrow: "Estilo",
    paragraphs: [
      "Estos marcos usan emoji a los lados de tu texto. También puedes escribir un emoji en el recuadro: se conserva en todos los estilos, incluidos el invertido y el espejo.",
      "Un emoji cuenta como carácter. En Instagram suele caber. En un nick de 12, dos emojis se comen una parte del nombre.",
    ],
    category: "emojis",
    sample: "Hola",
    phrases: [
      { label: "Fuego", text: "Fuego" },
      { label: "Hola", text: "Hola" },
      { label: "Bio", text: "Hoy toca brillar" },
    ],
    steps: copySteps("la biografía o el estado"),
    sections: [
      {
        heading: "Emojis que no se parten",
        paragraphs: [
          "Al invertir una frase, el emoji viaja entero. No se convierte en un símbolo roto. Eso incluye la ñ: Niño invertido sigue teniendo la eñe.",
          "Si quieres solo la lista de símbolos, sin convertir una palabra, usa la página de símbolos.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo mezclar mi emoji con un estilo?",
        a: "Sí. Escríbelo en el texto. Las letras cambian y el emoji se queda.",
      },
      {
        q: "¿Por qué a veces el emoji se ve en otro color?",
        a: "Cada sistema dibuja el emoji a su manera. El carácter copiado es el mismo.",
      },
      {
        q: "¿Cuentan en el límite de la bio?",
        a: "Sí. Un emoji es un carácter más.",
      },
      {
        q: "¿El espejo rompe el emoji?",
        a: "No. El generador trata el emoji como una pieza entera.",
      },
    ],
    related: ["simbolos", "letras-decoradas", "letras-con-corazones", "letras-para-instagram", "letras-para-tiktok", "letras-para-whatsapp"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-para-facebook",
    title: "Letras bonitas para Facebook",
    description: "Letras bonitas para publicaciones, la intro del perfil y comentarios de Facebook.",
    h1: "Letras bonitas para Facebook",
    eyebrow: "Perfil",
    paragraphs: [
      "En una publicación puedes pegar cualquier estilo. En el nombre real de la cuenta, Facebook suele rechazar las letras decoradas: ese campo quiere un nombre, no un nick.",
      "La intro corta del perfil ronda los 101 caracteres. El contador usa ese número. En el texto de una publicación hay mucho más sitio.",
    ],
    category: "all",
    sample: DEFAULT_SAMPLE,
    limit: {
      label: "Intro de Facebook",
      max: 101,
      hint: "La intro del perfil ronda los 101 caracteres. Una publicación puede ser más larga.",
    },
    phrases: PROFILE_PHRASES,
    steps: copySteps("Facebook"),
    sections: [
      {
        heading: "Publicación e intro",
        paragraphs: [
          "Para la intro, elige cursiva o negrita y una frase corta. Para una publicación de cumpleaños, un marco de corazones cabe sin problema.",
          "Si Facebook borra el estilo al guardar el nombre de la cuenta, no insistas: va contra la norma de nombres de esa red.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo cambiar mi nombre de Facebook por letras góticas?",
        a: "Normalmente no. Facebook pide el nombre que usas en la vida real y quita los adornos.",
      },
      {
        q: "¿Y en una publicación?",
        a: "Sí. Copia el estilo y pégalo en el compositor.",
      },
      {
        q: "¿Hay límite en la intro?",
        a: "Unos 101 caracteres. El contador avisa al pasar de ahí.",
      },
      {
        q: "¿Funciona en Messenger?",
        a: "Sí, igual que en WhatsApp: es texto, y el otro lado lo ve si su teléfono tiene esos caracteres.",
      },
    ],
    related: ["letras-para-instagram", "letras-para-whatsapp", "letras-cursivas", "letras-negritas", "letras-decoradas", "letras-para-tiktok"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-para-titulos",
    title: "Letras bonitas para títulos",
    description:
      "Títulos y carteles en letras bonitas para copiar en Word, Canva o una portada. Matemáticas, Historia y frases listas.",
    h1: "Letras bonitas para títulos",
    eyebrow: "Lettering",
    paragraphs: [
      "Para el título de una portada, una diapositiva o un cartel. Escribe Matemáticas, Biología, Historia o la frase que necesites y copia el estilo.",
      "El resultado es texto. Pégalo en Word, PowerPoint o Canva y cambia allí el tamaño. No es un molde para recortar ni una hoja de lettering.",
    ],
    category: "all",
    sample: "Matemáticas",
    phrases: TITLE_PHRASES,
    steps: [
      "Toca la materia o escribe el título del cartel.",
      "Elige gótica, cursiva o un marco corto.",
      "Copia la tarjeta.",
      "Pega el título en tu documento o en tu diseño y ajusta el tamaño allí.",
    ],
    sections: [
      {
        heading: "Portadas y carteles",
        paragraphs: [
          "Las frases listas cubren materias que la gente busca junto a letras bonitas: matemáticas, biología, historia, inglés, español y un bienvenidos.",
          "Un título largo en burbuja se vuelve difícil de leer. Para una portada, la gótica negrita o la cursiva manuscrita suelen bastar.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo pegar el título en Word?",
        a: "Sí. Es texto. Word lo muestra con la fuente del documento y, si esa fuente no tiene el carácter, Windows lo toma de otra.",
      },
      {
        q: "¿Sirve para imprimir un molde?",
        a: "No. Si necesitas letras para calcar o recortar, busca una plantilla de lettering. Aquí copias el texto del título.",
      },
      {
        q: "¿Hay un estilo por cada materia?",
        a: "No hace falta. La materia se escribe en el recuadro y todos los estilos la convierten. Las frases listas evitan teclearla.",
      },
      {
        q: "¿La ñ de Español se conserva?",
        a: "Sí. Español mantiene la eñe en todos los estilos.",
      },
    ],
    related: ["abecedario", "letras-decoradas", "letras-cursivas", "letras-goticas", "letras-negritas", "letras-para-whatsapp"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "abecedario",
    title: "Abecedario de letras bonitas",
    description:
      "Abecedario de la A a la Z y la Ñ en varios estilos. Copia una letra o convierte una palabra entera.",
    h1: "Abecedario de letras bonitas",
    eyebrow: "Lettering",
    paragraphs: [
      "Cada celda es una letra que puedes copiar. Debajo, el generador convierte una palabra completa, por si no quieres ir letra por letra.",
      "Incluye la Ñ. No es una plancha para imprimir: es texto. Si buscabas moldes para recortar, este sitio no los dibuja.",
    ],
    category: "all",
    sample: "Ñandú",
    phrases: [
      { label: "Ñ", text: "Ñ" },
      { label: "ABC", text: "ABC" },
      ...TITLE_PHRASES.slice(0, 3),
    ],
    steps: [
      "Toca una letra del abecedario para copiarla.",
      "O escribe una palabra en el generador si la quieres entera.",
      "Pulsa Copiar en el estilo que te guste.",
      "Pega la letra o la palabra en tu diseño o en tu chat.",
    ],
    sections: [
      {
        heading: "Una letra o la palabra",
        paragraphs: [
          "La tabla sirve cuando buscas cómo se ve la M, la S o la Ñ. El generador sirve cuando ya tienes el nombre escrito.",
          "Los estilos de la tabla son negrita, cursiva, gótica y burbuja. El resto está en las tarjetas.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Está la Ñ?",
        a: "Sí. En la tabla y en el generador. La tilde se mantiene al cambiar el estilo.",
      },
      {
        q: "¿Puedo copiar solo la A gótica?",
        a: "Sí. Toca esa celda.",
      },
      {
        q: "¿Esto reemplaza un molde de abecedario?",
        a: "No. Un molde es un dibujo para calcar. Esto es texto para pegar.",
      },
      {
        q: "¿Las minúsculas también están?",
        a: "En el generador, sí: escribe la letra en minúscula. La tabla muestra las mayúsculas, que es lo que se busca para un título.",
      },
    ],
    related: ["letras-cursivas", "letras-goticas", "letras-burbuja", "letras-decoradas", "letras-para-titulos", "letras-negritas"],
    alphabet: true,
    symbols: false,
  },
  {
    slug: "simbolos",
    title: "Símbolos y kaomoji para copiar",
    description: "Símbolos, corazones, estrellas, marcos y kaomoji para copiar y pegar al lado de tus letras.",
    h1: "Símbolos para copiar y pegar",
    eyebrow: "Extra",
    paragraphs: [
      "Una caja de símbolos para cuando no quieres convertir una palabra, solo copiar un corazón, una estrella o un kaomoji.",
      "Si quieres la palabra ya metida dentro del símbolo, vuelve al generador y abre Decoradas, Corazones o Emojis.",
    ],
    category: "simbolos",
    sample: DEFAULT_SAMPLE,
    phrases: [],
    steps: [
      "Busca el grupo: corazones, estrellas, flores, marcos, juegos o kaomoji.",
      "Toca el símbolo.",
      "Pégalo donde lo necesites.",
      "Para enmarcar una palabra entera, usa el generador de letras decoradas.",
    ],
    sections: [
      {
        heading: "Símbolos y letras",
        paragraphs: [
          "Un símbolo suelto no cambia tu nombre. Úsalo al lado de un nick o dentro de una bio, contando los caracteres del destino.",
          "En Free Fire, un símbolo más el nombre tienen que seguir en 12.",
        ],
      },
    ],
    faq: [
      {
        q: "¿El símbolo se copia solo?",
        a: "Sí. Cada pieza es un botón. No convierte el texto de otra página.",
      },
      {
        q: "¿Puedo ponerlo en WhatsApp?",
        a: "Sí. Es texto, igual que un emoji.",
      },
      {
        q: "¿Los kaomoji cuentan como un carácter?",
        a: "No. Un kaomoji está hecho de varias letras y signos. Cuenta cada pieza si tienes un límite corto.",
      },
      {
        q: "¿Dónde enmarco una palabra?",
        a: "En Letras decoradas, Corazones o Emojis. Allí el marco y la palabra se copian juntos.",
      },
    ],
    related: ["letras-decoradas", "letras-con-corazones", "letras-con-emojis", "letras-para-whatsapp", "letras-para-free-fire", "abecedario"],
    alphabet: false,
    symbols: true,
  },
];

export function getLanding(slug: string): Landing | undefined {
  return LANDINGS.find((landing) => landing.slug === slug);
}

export const HOME_FAQ: readonly LandingFaq[] = [
  {
    q: "¿Cómo copio las letras bonitas?",
    a: "Escribe en el recuadro, pulsa Copiar en el estilo que quieras y pega en Instagram, WhatsApp, TikTok o tu juego.",
  },
  {
    q: "¿Tengo que instalar una fuente?",
    a: "No. Son caracteres Unicode. El otro teléfono los muestra con las letras que ya tiene.",
  },
  {
    q: "¿Cuántos caracteres admite un nombre de Free Fire?",
    a: "12. En Nombres para Free Fire hay más de 1000 nicknames y cada uno marca si cabe.",
  },
  {
    q: "¿Funcionan en todas las redes?",
    a: "En biografías, chats y la mayoría de nombres visibles, sí. El @usuario de Instagram, TikTok y Roblox no acepta estas letras.",
  },
  {
    q: "¿Guardáis lo que escribo?",
    a: "No. La conversión ocurre en tu navegador. Los favoritos se quedan en este dispositivo.",
  },
];

export type UseCase = {
  title: string;
  text: string;
  href: string;
  links: readonly { href: string; label: string }[];
};

export const USE_CASES: readonly UseCase[] = [
  {
    title: "Instagram y TikTok",
    text: "Nombres, biografías y pies de foto que se distinguen en el perfil.",
    href: "/letras-para-instagram/",
    links: [
      { href: "/letras-para-instagram/", label: "Instagram" },
      { href: "/letras-para-tiktok/", label: "TikTok" },
      { href: "/letras-aesthetic/", label: "Aesthetic" },
    ],
  },
  {
    title: "WhatsApp",
    text: "Saludos, frases de amor, cumpleaños, estados y nombres de contacto.",
    href: "/letras-para-whatsapp/",
    links: [
      { href: "/letras-para-whatsapp/", label: "WhatsApp" },
      { href: "/letras-cursivas/", label: "Cursivas" },
      { href: "/letras-con-corazones/", label: "Corazones" },
    ],
  },
  {
    title: "Nombres para juegos",
    text: "Más de 1000 nombres para Free Fire, con el límite de 12 a la vista. También Discord y Roblox.",
    href: "/nombres-para-free-fire/",
    links: [
      { href: "/nombres-para-free-fire/", label: "Nombres Free Fire" },
      { href: "/letras-para-free-fire/", label: "Letras Free Fire" },
      { href: "/letras-para-discord/", label: "Discord" },
      { href: "/letras-para-roblox/", label: "Roblox" },
    ],
  },
  {
    title: "Letras para decorar",
    text: "Abecedario y títulos para copiar en un diseño. No son moldes para imprimir.",
    href: "/abecedario/",
    links: [
      { href: "/abecedario/", label: "Abecedario" },
      { href: "/letras-decoradas/", label: "Decoradas" },
      { href: "/letras-para-titulos/", label: "Títulos" },
    ],
  },
];
