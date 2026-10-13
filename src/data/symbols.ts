export type SymbolGroup = {
  title: string;
  items: readonly string[];
};

export const SYMBOL_GROUPS: readonly SymbolGroup[] = [
  {
    title: "Corazones",
    items: ["♡", "♥", "❥", "❣", "❤", "💕", "💖", "💗", "💘", "💝"],
  },
  {
    title: "Estrellas y brillo",
    items: ["★", "☆", "✦", "✧", "⋆", "✺", "✹", "✸", "✶", "✨"],
  },
  {
    title: "Flores",
    items: ["✿", "❀", "❁", "✾", "❃", "⚘", "🌸", "🌺", "🌼", "🌷"],
  },
  {
    title: "Marcos",
    items: ["『』", "「」", "〖〗", "【】", "〔〕", "༺༻", "⎛⎞", "❝❞"],
  },
  {
    title: "Juegos",
    items: ["⚔", "⚡", "🔥", "♛", "♕", "♔", "☠", "✧", "★", "➳"],
  },
  {
    title: "Kaomoji",
    items: ["(◕‿◕)", "(✿◠‿◠)", "(˘▽˘)", "ʕ•ᴥ•ʔ", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "♡(◡‿◡✿)", "(•̀ᴗ•́)و", "(*˘︶˘*)"],
  },
];
