import type { Landing } from "./landings.ts";
import { FREE_FIRE_PHRASES, PROFILE_PHRASES, TITLE_PHRASES, WHATSAPP_PHRASES, type Phrase } from "./site.ts";

const copySteps = (place: string): string[] => [
  "Escribe tu texto o toca una frase lista.",
  `Elige un estilo que se lea bien en ${place}.`,
  "Pulsa Copiar. El botón cambia a ¡Copiado! cuando ya está en el portapapeles.",
  `Pega el resultado en ${place}.`,
];

const NAME_PHRASES: readonly Phrase[] = [
  { label: "Luna", text: "Luna" },
  { label: "Mateo", text: "Mateo" },
  { label: "Sofía", text: "Sofía" },
  { label: "Valentina", text: "Valentina" },
  { label: "Diego", text: "Diego" },
];

const BIRTHDAY_PHRASES: readonly Phrase[] = [
  { label: "Cumpleaños", text: "Feliz cumpleaños" },
  { label: "Para ti", text: "Para ti" },
  { label: "Te queremos", text: "Te queremos" },
  { label: "Feliz día", text: "Feliz día" },
];

const SIGN_PHRASES: readonly Phrase[] = [
  { label: "Bienvenidos", text: "Bienvenidos" },
  { label: "Fiesta", text: "Fiesta" },
  { label: "Aviso", text: "Aviso" },
  { label: "Abierto", text: "Abierto" },
  ...TITLE_PHRASES.slice(0, 2),
];

const QUOTE_PHRASES: readonly Phrase[] = [
  { label: "Buenos días", text: "Buenos días" },
  { label: "Buenas noches", text: "Buenas noches" },
  { label: "Te extraño", text: "Te extraño" },
  { label: "Hasta pronto", text: "Hasta pronto" },
  { label: "Gracias", text: "Gracias" },
  ...WHATSAPP_PHRASES.slice(1, 3),
];

export const CLUSTER_LANDINGS: readonly Landing[] = [
  {
    slug: "fuentes-tipografias",
    title: "Tipos de letras",
    description:
      "Tipos de letras y tipografías para copiar en Word, Canva o el celular. No hay archivo de fuente para descargar.",
    h1: "Tipos de letras para copiar",
    eyebrow: "Tipografía",
    paragraphs: [
      "Cada tarjeta es un tipo de letra distinto: cursiva, gótica, negrita, ancha, monoespaciada o con marco. Eliges una, copias y la pegas donde ya estés escribiendo.",
      "No hay una fuente para instalar. Ni TTF, ni OTF, ni un ZIP. Son caracteres Unicode, así que Word, Google Docs, Canva y el teléfono los muestran con las letras que ya tienen.",
    ],
    category: "all",
    sample: "Tipografía",
    phrases: TITLE_PHRASES,
    steps: [
      "Escribe la palabra o el título.",
      "Compara los tipos: cursiva para una frase, negrita para un nombre, gótica para un título.",
      "Copia el que se lea en el tamaño que vas a usar.",
      "Pégalo en Word, en Canva o en el documento. El tamaño se cambia allí, no aquí.",
    ],
    sections: [
      {
        heading: "En Word y en la computadora",
        paragraphs: [
          "Pega el texto en el documento y sube el cuerpo de la fuente del párrafo. Si una letra sale como un recuadro, esa fuente de Windows no trae el carácter y el sistema lo toma de otra. Si sigue vacío, elige negrita o cursiva, que casi todos los equipos dibujan.",
          "Cambiar la fuente del documento a Arial o a Times no convierte tu palabra en gótica. El estilo ya va dentro del carácter. La fuente del programa solo decide el trazo con el que lo pinta.",
        ],
      },
      {
        heading: "Qué tipo conviene",
        paragraphs: [
          "Para un título de portada, gótica o cursiva manuscrita. Para un nick que tiene que leerse de un vistazo, negrita o burbuja. Para una bio, cursiva o versalitas. Los marcos quedan bien en una frase corta y estorban en un párrafo.",
          "Si buscabas “fuentes de letras bonitas” para descargar e instalarlas en el PC, este sitio no las reparte. El atajo real es copiar el estilo y pegarlo.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Dónde descargo la fuente?",
        a: "En ningún lado de este sitio. No hay archivo de tipografía. Copias el texto y el otro programa lo muestra.",
      },
      {
        q: "¿Funciona en Word?",
        a: "Sí. Pega y, si hace falta, sube el tamaño. Sigue siendo texto, así que puedes seguir escribiendo al lado.",
      },
      {
        q: "¿Puedo usarla en Canva?",
        a: "Sí, en un cuadro de texto. Canva no la trata como una de sus fuentes de catálogo: es el texto que pegaste.",
      },
      {
        q: "¿Por qué a veces cambia el dibujo?",
        a: "Cada teléfono y cada Windows pintan el mismo carácter con una fuente distinta. El estilo se mantiene; el grosor del trazo puede variar.",
      },
    ],
    related: [
      "letras-cursivas",
      "letras-goticas",
      "letras-negritas",
      "letras-para-titulos",
      "abecedario",
      "tipos-de-letras-bonitas",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "tipos-de-letras-bonitas",
    title: "Letras chidas",
    description:
      "Letras chidas y fáciles de copiar para un nombre, un estado o un título. Varios diseños, un solo texto.",
    h1: "Letras chidas para copiar y pegar",
    eyebrow: "Estilos",
    paragraphs: [
      "“Chidas” aquí quiere decir letras que se notan sin dejar de leerse: cursiva, burbuja, gótica, negrita y marcos cortos. Escribes una vez y comparas el diseño al lado.",
      "No hace falta saber dibujar. Si la palabra es larga, empieza por un estilo limpio. Un marco en cada letra acaba tapando lo que querías decir.",
    ],
    category: "aesthetic",
    sample: "Hola",
    phrases: PROFILE_PHRASES,
    steps: copySteps("el nombre, el estado o el título"),
    sections: [
      {
        heading: "Diseños que se leen",
        paragraphs: [
          "Para escribir a mano de verdad, mira la página de letras a mano: allí se explica qué es una cursiva de Unicode y qué es lettering. En esta página el objetivo es otro: un diseño listo para pegar.",
          "Las letras fáciles son las que no dependen de un símbolo raro. Negrita, cursiva y burbuja blanca salen en casi todos los teléfonos. El glitch y algunos marcos se rompen en un chat viejo.",
        ],
      },
      {
        heading: "Una palabra, no un párrafo",
        paragraphs: [
          "Estos estilos aguantan un nombre, un saludo o un título. Un párrafo entero en burbuja se vuelve un muro. Si el texto es largo, deja el adorno en la primera línea y sigue en letra normal.",
          "La ñ y las tildes se conservan. Prueba la palabra completa, no solo la primera letra, porque el dibujo cambia cuando entra una eñe.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuál es el estilo más fácil?",
        a: "Negrita o cursiva. Se leen en un tamaño pequeño y no añaden caracteres.",
      },
      {
        q: "¿Sirven para un cuaderno?",
        a: "Puedes copiarlas en un título y calcar el trazo si quieres practicar. Para apuntes largos, la letra normal sigue siendo más clara.",
      },
      {
        q: "¿Hay letras negras?",
        a: "La burbuja negra y la gótica negrita se ven más oscuras. Siguen siendo texto, no un dibujo relleno.",
      },
      {
        q: "¿Puedo mezclar dos diseños?",
        a: "Cada tarjeta es un estilo cerrado. Copia uno. Si quieres un corazón al lado, añádelo desde la página de símbolos.",
      },
    ],
    related: ["letras-aesthetic", "letras-decoradas", "letras-burbuja", "letras-cursivas", "fuentes-tipografias", "letras-cholas"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "moldes-letras-imprimir",
    title: "Letras bonitas para imprimir",
    description:
      "Copia letras grandes y pégalas en Word o Canva para imprimirlas. No hay un PDF ni un molde de foami para descargar.",
    h1: "Letras bonitas para imprimir",
    eyebrow: "Imprenta casera",
    paragraphs: [
      "Si buscas moldes o plantillas, el camino honesto es este: copia la letra o la palabra, pégala en un documento, súbele el tamaño y imprime desde Word, desde el navegador o desde Canva.",
      "Este sitio no reparte un PDF, un molde de foami ni una plantilla para recortar. El abecedario de abajo y el conversor son texto. El papel lo pones tú.",
    ],
    category: "decoradas",
    sample: "Bienvenidos",
    phrases: SIGN_PHRASES,
    steps: [
      "Copia una letra del abecedario o escribe la palabra del cartel.",
      "Pégala en Word o en Canva.",
      "Pon un cuerpo grande, de 72 puntos o más, y revisa que no se corte.",
      "Imprime. Si una letra sale vacía, cambia a negrita o a cursiva antes de gastar la hoja.",
    ],
    sections: [
      {
        heading: "Letras grandes sin un archivo",
        paragraphs: [
          "Una letra “grande y bonita” en la búsqueda suele pedir un molde tamaño cartulina. Aquí la agrandas con el tamaño de fuente del documento, no con una imagen. Así puedes cambiar Bienvenidos por el nombre de la fiesta sin volver a descargar nada.",
          "Para un letrero de una sola palabra, la gótica negrita o la burbuja se leen desde lejos. Para una frase, quédate en cursiva: a 72 puntos un marco decorado se come el margen.",
        ],
      },
      {
        heading: "Qué no vas a encontrar",
        paragraphs: [
          "No hay plantilla punteada, ni alfabeto para calcar en foami, ni un botón de descarga. Quien vende eso entrega un dibujo. Aquí entregamos el texto para que lo imprimas a tu medida.",
          "Si necesitas la A, la B o la Ñ sueltas, están en la tabla. No hay una página distinta por letra: el abecedario completo vive aquí y en la página del abecedario.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Hay un PDF de moldes?",
        a: "No. Copia el texto, amplíalo en Word o en Canva e imprime desde ahí.",
      },
      {
        q: "¿Sirve para foami o para un cartel escolar?",
        a: "Como referencia de la forma, sí. No es un molde con el contorno ya dibujado para recortar.",
      },
      {
        q: "¿Puedo imprimir solo la A?",
        a: "Sí. Toca la A del abecedario, pégala en un documento y sube el tamaño.",
      },
      {
        q: "¿La ñ sale en la hoja?",
        a: "Sí, si eliges un estilo que la incluye. La tabla y el conversor mantienen la eñe.",
      },
    ],
    related: ["abecedario", "letras-para-carteles", "letras-para-titulos", "letras-para-dibujar", "fuentes-tipografias", "letras-goticas"],
    alphabet: true,
    symbols: false,
  },
  {
    slug: "lettering-letras-a-mano",
    title: "Letras a mano",
    description:
      "Cursiva y manuscrita para copiar, y la diferencia entre ese texto y un lettering dibujado a mano.",
    h1: "Letras a mano para copiar",
    eyebrow: "Lettering",
    paragraphs: [
      "La manuscrita y la cursiva son lo más cerca que llega un texto de una letra escrita a mano. Se pegan en un chat, en un título o en una nota, y se leen como frase, no como un dibujo.",
      "Un lettering de verdad se traza con lápiz: presión, ligadura y un alfabeto que tú dibujas. Unicode no hace eso. Si buscas “mano escrita” para calcar, usa estas formas como modelo y dibuja encima. El sitio no te da la lámina.",
    ],
    category: "cursiva",
    sample: "Hola",
    phrases: WHATSAPP_PHRASES,
    steps: copySteps("la nota, el título o el mensaje"),
    sections: [
      {
        heading: "Manuscrita, cursiva y negrita cursiva",
        paragraphs: [
          "La manuscrita imita un trazo de pluma. La cursiva matemática es más seca y se lee mejor en una pantalla pequeña. La negrita cursiva aguanta un nombre de perfil.",
          "Ninguna une las letras como la caligrafía inglesa. Cada carácter va suelto. Por eso una palabra larga se ve ordenada y no como una firma.",
        ],
      },
      {
        heading: "Si vas a dibujarla",
        paragraphs: [
          "Copia la palabra, amplíala en el teléfono y calcála en el cuaderno si estás practicando. Eso es un ejercicio. No sustituye una clase de lettering ni un alfabeto con guías.",
          "Para títulos de libreta ya escritos, la página de títulos tiene materias listas. Esta se queda en el trazo a mano.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Es letra ligada?",
        a: "No. Cada letra es un carácter aparte. Se parece a la mano, pero no es una firma continua.",
      },
      {
        q: "¿La puedo usar como guía para dibujar?",
        a: "Sí, como referencia de la forma. No es una plantilla con líneas de calco.",
      },
      {
        q: "¿Se pega en WhatsApp?",
        a: "Sí. No depende del botón de cursiva del chat: el estilo va en el carácter.",
      },
      {
        q: "¿Qué hago si sale un recuadro?",
        a: "Ese teléfono no pinta esa cursiva. Prueba la otra manuscrita o la negrita cursiva.",
      },
    ],
    related: ["letras-cursivas", "letras-para-titulos", "letras-para-dibujar", "abecedario", "letras-para-whatsapp", "letras-aesthetic"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "nombres-en-letras-bonitas",
    title: "Nombres en letras bonitas",
    description:
      "Escribe un nombre y cópialo en cursiva, gótica o negrita. Para un perfil o una dedicatoria, no para un nick de 12 letras.",
    h1: "Nombres en letras bonitas",
    eyebrow: "Nombres",
    paragraphs: [
      "Escribe Luna, Mateo, Sofía o el nombre que vayas a poner en una bio, una dedicatoria o una portada. Cada tarjeta es ese nombre en otro estilo.",
      "Esto no inventa un nombre nuevo. Si lo que buscas es un nick de Free Fire ya armado, con símbolos y el tope de 12 caracteres, está en Nombres para Free Fire.",
    ],
    category: "cursiva",
    sample: "Luna",
    phrases: NAME_PHRASES,
    steps: copySteps("la biografía, la dedicatoria o la portada"),
    sections: [
      {
        heading: "Qué estilo le sienta a un nombre",
        paragraphs: [
          "Un nombre corto aguanta gótica o burbuja. Uno de tres palabras se lee mejor en cursiva o en negrita, sin marco. Sofía y Núñez conservan la tilde y la eñe: pruébalas en la tarjeta antes de pegarlas.",
          "En Instagram y TikTok el nombre visible acepta estas letras. El @usuario no. Si el campo rechaza el texto, estás en el usuario, no en el nombre.",
        ],
      },
      {
        heading: "Nombre propio y nick de juego",
        paragraphs: [
          "Un nombre de persona puede ser largo. Un nick de Free Fire no: doce caracteres, contando espacios y símbolos. No uses esta página para forzar un nombre de pila dentro de ese límite.",
          "Para un clan o un dúo, parte del catálogo de Free Fire. Aquí el texto es el que tú escribes.",
        ],
      },
    ],
    faq: [
      {
        q: "¿El creador inventa nombres?",
        a: "No. Convierte el nombre que escribes. Los nicknames ya hechos están en Nombres para Free Fire.",
      },
      {
        q: "¿Funciona con tildes y con ñ?",
        a: "Sí. Valentina, Sofía y Núñez se convierten sin perder el acento ni la eñe.",
      },
      {
        q: "¿Cabe en el nombre de Instagram?",
        a: "El nombre visible admite unos 30 caracteres. El @usuario solo acepta letras, números, puntos y guion bajo.",
      },
      {
        q: "¿Puedo poner dos nombres?",
        a: "Sí. Escríbelos juntos, por ejemplo Ana y Luis, y copia la tarjeta que siga leyéndose.",
      },
    ],
    related: [
      "nombres-para-free-fire",
      "letras-cursivas",
      "letras-goticas",
      "letras-para-instagram",
      "nombres-nicks-juegos",
      "letras-para-whatsapp",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-cumpleanos",
    title: "Feliz cumpleaños en letras bonitas",
    description:
      "Feliz cumpleaños y otras frases cortas en cursiva, con corazones o en negrita, listas para copiar en un chat o un estado.",
    h1: "Feliz cumpleaños en letras bonitas",
    eyebrow: "Felicitación",
    paragraphs: [
      "La frase ya está escrita: Feliz cumpleaños, Te queremos, Para ti. Elige el estilo y pégala en WhatsApp, en una publicación o en una historia.",
      "Una felicitación se lee mejor en cursiva o con un solo marco de corazones. Tres adornos seguidos compiten con el nombre de la persona.",
    ],
    category: "cursiva",
    sample: "Feliz cumpleaños",
    phrases: BIRTHDAY_PHRASES,
    steps: copySteps("el chat, el estado o la publicación"),
    sections: [
      {
        heading: "La frase y el nombre",
        paragraphs: [
          "Escribe Feliz cumpleaños, Luna si quieres el nombre dentro de la misma línea. Comprueba el límite del sitio donde vas a pegarla: un estado de WhatsApp ronda los 139 caracteres y esta frase cabe de sobra.",
          "Si el mensaje es largo, deja el estilo en la primera línea y sigue en texto normal. Un párrafo entero en gótica cansa antes de llegar al deseo.",
        ],
      },
      {
        heading: "Dónde pegarla",
        paragraphs: [
          "En WhatsApp funciona en el chat y en el estado. En Instagram, en la biografía, en un pie de foto o en una historia de texto. En Facebook, en la publicación. El nombre real de la cuenta de Facebook no acepta este adorno.",
          "No es una invitación para imprimir ni una imagen de pastel. Si necesitas un letrero en papel, copia la frase en la página de carteles y amplíala en Word.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo añadir el nombre?",
        a: "Sí. Escribe Feliz cumpleaños y el nombre en el recuadro, y copia la tarjeta.",
      },
      {
        q: "¿Se ve en WhatsApp?",
        a: "Sí. El estilo va en las letras, no en el formato de negrita del chat.",
      },
      {
        q: "¿Hay una imagen para descargar?",
        a: "No. Es texto. Si lo quieres en una foto, pégalo encima en la app donde editas.",
      },
      {
        q: "¿Y si quiero corazones?",
        a: "Copia la frase y añade un corazón desde Símbolos, o usa un marco de la página de corazones con una frase corta.",
      },
    ],
    related: [
      "letras-para-whatsapp",
      "letras-con-corazones",
      "letras-para-facebook",
      "letras-para-instagram",
      "frases-palabras-letras-bonitas",
      "letras-cursivas",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-cholas",
    title: "Letras cholas",
    description:
      "Letras cholas hechas con los estilos góticos y de bloque que sí puedes copiar. No hay una fuente chola para instalar.",
    h1: "Letras cholas para copiar",
    eyebrow: "Estilo",
    paragraphs: [
      "Quien busca letras cholas suele querer la gótica de estilo antiguo o una letra de bloque, las dos que se ven en nombres y en títulos. Esas están aquí, como texto para copiar.",
      "No es un alfabeto de graffiti dibujado ni una fuente “chola” para descargar. Si el teléfono no pinta la gótica, prueba la negrita: se lee y no promete un trazo que no existe.",
    ],
    category: "graffiti",
    sample: "Amor",
    phrases: [
      { label: "Amor", text: "Amor" },
      { label: "Barrio", text: "Barrio" },
      { label: "Leal", text: "Leal" },
      ...FREE_FIRE_PHRASES.slice(0, 2),
    ],
    steps: copySteps("el nombre o el título"),
    sections: [
      {
        heading: "Gótica y letra de bloque",
        paragraphs: [
          "La gótica es la que más se parece a la old english que la gente asocia con este estilo. La cuadrada y la de bloque se ven más cerca del graffiti. Puedes compararlas en las tarjetas sin salir de la página.",
          "Un nombre corto funciona. Una frase larga en gótica se apelmaza. Si vas a ponerla en un nick de Free Fire, el tope sigue siendo 12 caracteres.",
        ],
      },
      {
        heading: "Lo que este texto no es",
        paragraphs: [
          "No es un tatuaje, ni un molde, ni letras para calcar en la pared. Es una palabra que puedes pegar en un perfil, en un estado o en un título.",
          "La página de graffiti explica el límite de estos estilos de bloque. La de góticas se queda solo en la letra antigua. Esta junta las dos porque la búsqueda las pide juntas.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Hay una fuente chola para descargar?",
        a: "No. Copias la gótica o la letra de bloque. No hay archivo para instalar.",
      },
      {
        q: "¿Sirve para un tatuaje?",
        a: "Solo como referencia de un estilo. Un tatuador tiene que redibujarla. No es un diseño listo para la piel.",
      },
      {
        q: "¿La ñ existe en gótica?",
        a: "Sí en los estilos de este sitio que declaran la eñe. Escribe la palabra completa y mírala en la tarjeta antes de copiar.",
      },
      {
        q: "¿Cabe en Free Fire?",
        a: "Si el nombre, ya convertido, mide 12 caracteres o menos. Un marco alrededor suele pasarse.",
      },
    ],
    related: ["letras-goticas", "letras-graffiti", "letras-para-tatuajes", "nombres-para-free-fire", "letras-negritas", "abecedario"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-para-carteles",
    title: "Letras para carteles",
    description:
      "Letras para carteles y letreros: Bienvenidos, Fiesta, Aviso. Copia el texto y amplíalo en Word o en Canva.",
    h1: "Letras bonitas para carteles",
    eyebrow: "Letreros",
    paragraphs: [
      "Un cartel pide una o dos palabras que se lean de lejos: Bienvenidos, Fiesta, Abierto, el nombre de una materia. Escríbela, copia el estilo más claro y pégala donde vas a diseñar.",
      "El tamaño de un letrero no se decide aquí. En Word o en Canva subes el cuerpo hasta que ocupe el papel. Esto no es una plantilla ni un molde.",
    ],
    category: "decoradas",
    sample: "Bienvenidos",
    phrases: SIGN_PHRASES,
    steps: [
      "Toca Bienvenidos, Fiesta o escribe el texto del letrero.",
      "Elige gótica, negrita o burbuja. Evita un marco si la palabra ya es larga.",
      "Copia la tarjeta.",
      "Pégala en el diseño y amplía ahí. Imprime solo cuando el trazo se vea entero.",
    ],
    sections: [
      {
        heading: "Letreros cortos",
        paragraphs: [
          "Bienvenidos en burbuja se reconoce en una puerta. En cursiva parece una invitación. En gótica parece un título de feria. Prueba las tres con la misma palabra antes de quedarte con una.",
          "Si el cartel lleva una segunda línea, con la fecha o el salón, déjala en texto normal. Dos estilos en el mismo letrero pelean.",
        ],
      },
      {
        heading: "Cartel, título y molde",
        paragraphs: [
          "La página de títulos está pensada para la portada del cuaderno: Matemáticas, Historia, Biología. Esta es para un letrero que se ve a distancia.",
          "Si ibas a imprimir letras sueltas para recortar, usa Letras para imprimir. Allí está el abecedario, y tampoco hay un PDF.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo hacer un bienvenidos grande?",
        a: "Sí. Copia la palabra y sube el tamaño en Word o en Canva hasta llenar la hoja.",
      },
      {
        q: "¿Qué estilo se lee de lejos?",
        a: "Negrita, burbuja o gótica negrita. La cursiva fina se pierde en un pasillo.",
      },
      {
        q: "¿Hay plantillas de cartel?",
        a: "No. Hay texto. El diseño del papel lo haces en el programa donde pegas.",
      },
      {
        q: "¿Sirve para una fiesta?",
        a: "Para el letrero, sí. Escribe Fiesta o el nombre y copia el estilo. No incluye dibujos ni invitaciones.",
      },
    ],
    related: [
      "letras-para-titulos",
      "moldes-letras-imprimir",
      "letras-cumpleanos",
      "letras-goticas",
      "letras-burbuja",
      "fuentes-tipografias",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "numeros-a-letras",
    title: "Números a letras",
    description:
      "Convierte un número en palabras en español, del 0 al 999999. Después puedes copiarlo o pasarlo al conversor de estilos.",
    h1: "Números a letras",
    eyebrow: "Conversor",
    paragraphs: [
      "Escribe 21 y obtienes veintiuno. Escribe 1000 y obtienes mil. El recuadro de arriba deletrea la cantidad; no disfraza el dígito con otra fuente.",
      "Si lo que querías era un 2 bonito, un 0 redondo o la fecha 2026 en otro estilo, eso está en Números bonitos. Son dos tareas distintas y cada una tiene su página.",
    ],
    category: "all",
    sample: "quince",
    phrases: [
      { label: "Uno", text: "uno" },
      { label: "Quince", text: "quince" },
      { label: "Cien", text: "cien" },
      { label: "Mil", text: "mil" },
    ],
    steps: [
      "Escribe un entero entre 0 y 999999. Sin puntos ni comas.",
      "Lee las palabras. 21 es veintiuno y 21000 es veintiún mil.",
      "Copia las palabras o pulsa Pasar al conversor para verlas en cursiva, negrita o gótica.",
      "Pega el resultado donde lo necesites.",
    ],
    sections: [
      {
        heading: "Cómo se escriben",
        paragraphs: [
          "Del 0 al 999999, en español. Cien es cien, no ciento. Ciento uno lleva la forma larga. Mil no se dice un mil. Antes de mil, 21 se apocopa: veintiún mil, y el uno del final se queda en uno, como en veintiún mil uno.",
          "No convierte decimales, ni cantidades con punto de millar, ni cifras mayores de 999999. Si pegas 1.500, el punto estorba: escribe 1500.",
        ],
      },
      {
        heading: "Palabras y dígitos bonitos",
        paragraphs: [
          "Pasar al conversor mete las palabras en el generador de abajo para que elijas un estilo. El significado no cambia: sigue diciendo la cantidad.",
          "Un número de teléfono, un año o un marcador se ven mejor como dígitos. Para eso no uses esta caja. Abre Números bonitos y escribe 2026.",
        ],
      },
    ],
    faq: [
      {
        q: "¿21 sale como veintiuno?",
        a: "Sí. 22 es veintidós y 16 es dieciséis.",
      },
      {
        q: "¿Acepta el punto de millar?",
        a: "No. Escribe 1500, no 1.500 ni 1,500.",
      },
      {
        q: "¿Puedo convertir 1000000?",
        a: "No. El tope es 999999. Un millón queda fuera para no inventar un caso a medias.",
      },
      {
        q: "¿Esto pone el 7 en un círculo?",
        a: "No. Eso es un dígito con estilo, y vive en Números bonitos.",
      },
    ],
    related: ["numeros-bonitos", "letras-negritas", "letras-cursivas", "abecedario", "fuentes-tipografias", "letras-para-titulos"],
    alphabet: false,
    symbols: false,
    numbers: true,
  },
  {
    slug: "numeros-bonitos",
    title: "Números bonitos",
    description:
      "Números bonitos para copiar: fechas, edades y marcadores en negrita, ancha o burbuja. No los convierte en palabras.",
    h1: "Números bonitos para copiar",
    eyebrow: "Dígitos",
    paragraphs: [
      "Escribe 2026, una edad o un marcador. Las tarjetas que saben dibujar dígitos los cambian: negrita, ancha, monoespaciada y burbuja. Las que no tienen números en Unicode dejan el dígito igual.",
      "Si querías leer 21 como veintiuno, no es esta página. El conversor de números a letras deletrea la cantidad.",
    ],
    category: "all",
    sample: "2026",
    phrases: [
      { label: "Año", text: "2026" },
      { label: "Edad", text: "15" },
      { label: "Marcador", text: "2-1" },
      { label: "Cumple", text: "10" },
    ],
    steps: copySteps("la fecha, la edad o el marcador"),
    sections: [
      {
        heading: "Qué estilos cambian el dígito",
        paragraphs: [
          "La negrita, la ancha, la monoespaciada y la burbuja traen cifras propias. La gótica clásica no: el número se queda como lo escribiste al lado de las letras góticas. Míralo en la tarjeta antes de copiar una fecha.",
          "Un guion en 2-1 no se convierte. Solo cambian los dígitos que el estilo conoce. El resultado sigue siendo texto, así que cabe en una bio o en un estado.",
        ],
      },
      {
        heading: "Fechas y límites",
        paragraphs: [
          "2026 en burbuja cuenta más caracteres que 2026 en negrita, porque cada cifra circled puede ocupar más de un código. Si lo vas a pegar en un nick de 12, usa negrita o ancha y mira el contador.",
          "Para un cumpleaños, puedes escribir la edad aquí y la frase Feliz cumpleaños en su página. Juntar las dos en una sola línea también vale, si el estilo tiene letras y números.",
        ],
      },
    ],
    faq: [
      {
        q: "¿El 2026 cambia en todos los estilos?",
        a: "No. Solo en los que Unicode dotó de dígitos: negrita, ancha, mono y burbuja, entre otros. La gótica deja los números normales.",
      },
      {
        q: "¿Escribe el número con palabras?",
        a: "No. Para veintiuno o mil usa Números a letras.",
      },
      {
        q: "¿Sirve para un teléfono?",
        a: "Puedes copiarlo, pero un número de teléfono decorado es más difícil de marcar. Mejor déjalo en dígitos normales.",
      },
      {
        q: "¿Cabe en Free Fire?",
        a: "Si el texto convertido mide 12 o menos. La burbuja a veces alarga la cuenta.",
      },
    ],
    related: ["numeros-a-letras", "letras-burbuja", "letras-negritas", "letras-cumpleanos", "nombres-para-free-fire", "abecedario"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "nombres-nicks-juegos",
    title: "Nombres para juegos",
    description:
      "Límites reales para un nick: 12 en Free Fire, unos 20 en el nombre visible de Roblox y 32 en Discord. El @usuario no acepta estas letras.",
    h1: "Nombres y nicks para juegos",
    eyebrow: "Juegos",
    paragraphs: [
      "El mismo estilo no cabe igual en todos los juegos. Free Fire corta el nick en 12 caracteres. El nombre visible de Roblox ronda los 20. El nombre de Discord admite 32. El usuario con @, en Roblox y en las redes, solo acepta letras y números sin adorno.",
      "Aquí conviertes el nombre que ya pensaste. Si quieres un nick de Free Fire ya hecho, el catálogo está en su página: más de mil nombres, y cada uno avisa cuando no cabe en 12.",
    ],
    category: "juegos",
    sample: "Nova",
    phrases: FREE_FIRE_PHRASES,
    steps: [
      "Escribe el nick.",
      "Mira el contador y compáralo con el juego: 12 Free Fire, unos 20 Roblox, 32 Discord.",
      "Copia un estilo sin marco si estás justo en el límite.",
      "Pégalo en el nombre visible, no en el @usuario.",
    ],
    sections: [
      {
        heading: "Tres límites, un texto",
        paragraphs: [
          "Free Fire: 12 caracteres en el nombre de la cuenta. Un corazón o un espacio invisible también cuenta. Si la tarjeta se pasa, el juego recorta o rechaza.",
          "Roblox: el nombre que ven los demás admite estas letras y anda por los 20 caracteres. El @username no. Discord: el nombre para mostrar admite 32 y sí acepta el estilo; el usuario técnico, no.",
        ],
      },
      {
        heading: "Elige el juego antes del adorno",
        paragraphs: [
          "En 12 caracteres, negrita o gótica. El marco déjalo para Discord, donde hay sitio. El glitch puede contar de más dentro de la partida aunque aquí se vea como una sola letra.",
          "Más de mil nombres ya medidos para Free Fire están en su página, separados por estilo, y cada uno marca si se pasa de 12. Esta página no repite ese catálogo: compara los topes.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuántos caracteres tiene Free Fire?",
        a: "12 en el nick. Cuenta letras, espacios y símbolos del texto ya convertido.",
      },
      {
        q: "¿Roblox acepta letras góticas?",
        a: "En el nombre visible, sí. En el @username, no: ese campo es alfanumérico.",
      },
      {
        q: "¿Y Discord?",
        a: "El nombre para mostrar admite unos 32 caracteres y estos estilos. El usuario no.",
      },
      {
        q: "¿Dónde hay nombres ya hechos?",
        a: "En Nombres para Free Fire. Son más de 1000, con el aviso en rojo cuando no caben.",
      },
    ],
    related: [
      "nombres-para-free-fire",
      "letras-para-free-fire",
      "letras-para-roblox",
      "letras-para-discord",
      "letras-goticas",
      "texto-invisible",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "frases-palabras-letras-bonitas",
    title: "Frases en letras bonitas",
    description:
      "Frases cortas listas para copiar: buenos días, te quiero, gracias, hasta pronto. Elige el estilo y pégalas.",
    h1: "Frases y palabras en letras bonitas",
    eyebrow: "Frases",
    paragraphs: [
      "Una frase corta cabe en un estado, en una bio o en una dedicatoria. Buenos días, Te quiero, Gracias y Hasta pronto ya están escritas: toca una y compara el estilo.",
      "Si la frase es tuya, escríbela. Funciona igual. Lo que no funciona es un párrafo de cuatro líneas en burbuja: se lee peor que en letra normal.",
    ],
    category: "aesthetic",
    sample: "Buenos días",
    phrases: QUOTE_PHRASES,
    steps: copySteps("el estado, la biografía o el chat"),
    sections: [
      {
        heading: "Frase corta, estilo claro",
        paragraphs: [
          "Un saludo va bien en cursiva. Un te quiero aguanta un marco de corazones si la línea sigue siendo una. Un gracias en negrita se entiende en una notificación, donde el tamaño es pequeño.",
          "Las palabras sueltas, como Luna o Paz, se tratan igual que una frase de una palabra. Para un nombre propio con más contexto, usa Nombres en letras bonitas.",
        ],
      },
      {
        heading: "Dónde se quedan cortas",
        paragraphs: [
          "El estado de WhatsApp ronda los 139 caracteres. La bio de Instagram admite 150 y la de TikTok unos 80. Estas frases caben. Una cita larga, no siempre.",
          "Feliz cumpleaños tiene su propia página, con las variantes de felicitación. No hace falta repetirla aquí para encontrarla.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo escribir mi propia frase?",
        a: "Sí. Las frases listas son un atajo. El recuadro acepta la tuya.",
      },
      {
        q: "¿Te quiero cabe en un estado?",
        a: "Sí. Es mucho más corta que el límite de un estado de WhatsApp.",
      },
      {
        q: "¿Se pueden poner emojis?",
        a: "Añádelos en el recuadro o cópialos desde Símbolos. Cada emoji cuenta en el límite del sitio donde pegues.",
      },
      {
        q: "¿Hay letras de canciones?",
        a: "No. Esta página no publica letras de temas. Son frases cortas para un mensaje.",
      },
    ],
    related: [
      "letras-para-whatsapp",
      "letras-cumpleanos",
      "letras-aesthetic",
      "letras-cursivas",
      "simbolos",
      "letras-para-instagram",
    ],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-para-dibujar",
    title: "Letras para dibujar",
    description:
      "Formas de letras para mirar y dibujar: cursiva, gótica y burbuja. No hay láminas ni dibujos para descargar.",
    h1: "Letras bonitas para dibujar",
    eyebrow: "Referencia",
    paragraphs: [
      "Si estás practicando lettering, estas tarjetas sirven de modelo: escribes la letra o la palabra, amplías la pantalla y dibujas lo que ves. La forma es la del carácter, no la de un alfabeto ilustrado.",
      "No hay hojas descargables, ni flechas de trazo, ni un lápiz incluido. Para la A suelta y el resto del alfabeto, abre el abecedario y copia la letra que vas a estudiar.",
    ],
    category: "cursiva",
    sample: "ABC",
    phrases: [
      { label: "ABC", text: "ABC" },
      { label: "Ñ", text: "Ñ" },
      { label: "Hola", text: "Hola" },
      ...NAME_PHRASES.slice(0, 2),
    ],
    steps: [
      "Escribe la letra o la palabra que quieres estudiar.",
      "Elige cursiva si buscas un trazo de pluma, o cambia a gótica en su página si buscas el estilo antiguo.",
      "Amplía con el control de tamaño y dibuja en tu cuaderno.",
      "No esperes un archivo: la referencia es el texto de la pantalla.",
    ],
    sections: [
      {
        heading: "Qué puedes calcar y qué no",
        paragraphs: [
          "Puedes calcar la silueta de una cursiva o de una gótica para entender la proporción. No vas a conseguir la ligadura de una palabra escrita con pluma, porque cada letra va separada.",
          "La burbuja enseña una letra circular, útil si estás rellenando nombres grandes. Sigue siendo un carácter, así que el contorno es el de la fuente del teléfono, no el de un diseñador.",
        ],
      },
      {
        heading: "Del modelo al papel",
        paragraphs: [
          "Para imprimir la referencia y calcarla en papel, copia la letra en Word, ponla enorme y saca una hoja. Eso está explicado en Letras para imprimir. Aquí no hay un molde escondido.",
          "Si el dibujo va a acabar en la piel, para en la página de tatuajes y lee el aviso: esto no es un diseño de tatuaje.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Hay dibujos para descargar?",
        a: "No. La referencia es el texto en pantalla o la misma letra pegada en un documento.",
      },
      {
        q: "¿Muestran por dónde empieza el trazo?",
        a: "No. No hay flechas ni orden de strokes. Solo la forma del carácter.",
      },
      {
        q: "¿Puedo ver solo la A?",
        a: "Escríbela aquí o tócala en el abecedario. No hay una página aparte para cada letra.",
      },
      {
        q: "¿La ñ se puede dibujar desde aquí?",
        a: "Sí. Escribe Ñ y usa esa forma como modelo. La virgulilla forma parte de la letra.",
      },
    ],
    related: ["abecedario", "lettering-letras-a-mano", "letras-cursivas", "letras-goticas", "moldes-letras-imprimir", "letras-para-tatuajes"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-para-tatuajes",
    title: "Letras para tatuajes",
    description:
      "Estilos de letra que la gente usa de referencia para un tatuaje. No son diseños descargables ni un flash listo para la piel.",
    h1: "Letras para tatuajes",
    eyebrow: "Referencia",
    paragraphs: [
      "La gótica, la cursiva y la de bloque son los estilos que más se piden como idea de lettering. Aquí puedes ver cómo queda una palabra corta, Amor o un nombre, antes de hablar con quien tatúa.",
      "Esto no es un tatuaje. No hay flash, no hay plantilla para calcar en la piel y no hay archivo. Un tatuador tiene que redibujar la letra a mano. Copiar un carácter de pantalla y clavarlo tal cual suele verse torpe a los pocos años.",
    ],
    category: "gotica",
    sample: "Amor",
    phrases: [
      { label: "Amor", text: "Amor" },
      { label: "Vida", text: "Vida" },
      { label: "Fe", text: "Fe" },
      { label: "Luna", text: "Luna" },
    ],
    steps: [
      "Escribe una palabra corta. En la piel, menos letras se leen mejor.",
      "Compara gótica y, si quieres cursiva, abre la página de cursivas con la misma palabra.",
      "Lleva la referencia, no el carácter pegado, a quien va a tatuar.",
      "Pide que la redibuje. No uses este texto como transfer.",
    ],
    sections: [
      {
        heading: "Qué mirar antes de decidir",
        paragraphs: [
          "Una palabra de cuatro letras en gótica se reconoce. Una frase entera se cierra con los años y se lee peor. La ñ y las tildes tienen que diseñarse: no des por hecho que el carácter de pantalla ya resuelve la virgulilla.",
          "La cursiva de Unicode no es lettering ligado. Si quieres las letras unidas, hace falta un dibujo nuevo. Esta página solo enseña el estilo general.",
        ],
      },
      {
        heading: "Lo que no vendemos",
        paragraphs: [
          "No hay diseños de tatuaje, ni alfabetos exclusivos, ni un botón de descarga. Quien ofrezca eso está vendiendo un dibujo. Aquí hay texto de referencia y ya está dicho el límite.",
          "Para letras cholas, la página de ese nombre junta gótica y bloque, que es lo que esa búsqueda suele pedir. El aviso es el mismo: referencia, no plantilla para la piel.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo descargar el diseño?",
        a: "No. No hay flash ni archivo. Es una palabra en un estilo de texto.",
      },
      {
        q: "¿Sirve para calcar en la piel?",
        a: "No. Pide que un tatuador la redibuje. El carácter de pantalla no está pensado para aguantar en la piel.",
      },
      {
        q: "¿Qué estilo se pide más?",
        a: "Gótica para una palabra corta y cursiva cuando se busca un trazo más fino. Las dos se pueden comparar.",
      },
      {
        q: "¿Incluye nombres?",
        a: "Escribe el nombre y mira la tarjeta. Sigue siendo una referencia, no el tatuaje terminado.",
      },
    ],
    related: ["letras-goticas", "letras-cursivas", "letras-cholas", "letras-para-dibujar", "nombres-en-letras-bonitas", "abecedario"],
    alphabet: false,
    symbols: false,
  },
  {
    slug: "letras-redes-sociales",
    title: "Letras para redes sociales",
    description:
      "Dónde sí entran las letras bonitas: bio y nombre visible. El @usuario de Instagram, TikTok, X y el resto no las acepta.",
    h1: "Letras bonitas para redes sociales",
    eyebrow: "Redes",
    paragraphs: [
      "En la biografía y en el nombre visible, estas letras se pegan. En el @usuario, no: Instagram, TikTok, Facebook y X piden letras, números y unos pocos signos, sin gótica ni cursiva Unicode.",
      "Cada red corta en un sitio distinto. Abajo están los topes que usa este sitio. Si la app los cambia, manda el contador de la propia app, no el recuerdo.",
    ],
    category: "aesthetic",
    sample: "Hola",
    phrases: PROFILE_PHRASES,
    steps: [
      "Escribe el nombre o la frase de la bio.",
      "Mira el contador y el tope de esa red.",
      "Copia un estilo que quepa en el nombre visible o en la bio, nunca en el @.",
      "Si la app lo borra al guardar, estabas en el campo del usuario.",
    ],
    sections: [
      {
        heading: "Límites que importan",
        paragraphs: [
          "Instagram: la bio admite 150 caracteres y el nombre visible unos 30. TikTok: la bio ronda los 80. WhatsApp: un estado ronda los 139 y el mensaje de chat da más margen. Facebook: la intro del perfil ronda los 101, y el nombre real de la cuenta rechaza el adorno.",
          "X usa unos 50 caracteres en el nombre visible y unos 160 en la bio. El @usuario, igual que en las otras, no acepta estas letras. Un estilo que cabe en la bio de Instagram puede no caber en la de TikTok.",
        ],
      },
      {
        heading: "Una página por red",
        paragraphs: [
          "Instagram, TikTok, WhatsApp y Facebook tienen su página, con el contador ya puesto en ese límite y las frases que allí se buscan. Esta no las copia: sirve para elegir a cuál entrar.",
          "El mismo texto se puede reutilizar. Lo que no se reutiliza es el campo. Pega en la bio, revisa en el teléfono, y no insistas en el usuario si la red lo vacía.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo poner letras bonitas en el @usuario?",
        a: "No. Ni en Instagram, ni en TikTok, ni en X, ni en Facebook. Ese campo no acepta estos caracteres.",
      },
      {
        q: "¿Y en el nombre del perfil?",
        a: "En Instagram, TikTok y X, el nombre visible sí. En Facebook, el nombre de la cuenta normalmente no.",
      },
      {
        q: "¿Cuál es el límite de X?",
        a: "Unos 50 en el nombre visible y unos 160 en la bio. Si la app marca otro número, gana la app.",
      },
      {
        q: "¿WhatsApp cuenta como red aquí?",
        a: "Sí, para estados y chats. El tope corto es el del estado, unos 139 caracteres.",
      },
    ],
    related: [
      "letras-para-instagram",
      "letras-para-tiktok",
      "letras-para-whatsapp",
      "letras-para-facebook",
      "letras-aesthetic",
      "letras-negritas",
    ],
    alphabet: false,
    symbols: false,
  },
];
