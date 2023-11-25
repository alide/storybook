// .storybook/YourTheme.js

import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  // Typography
  fontBase: "Roboto, sans-serif",
  fontCode: "monospace",

  brandTitle: "Design System",
  // brandUrl: "https://example.com",
  // brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  brandTarget: "_self",

  //
  colorPrimary: "#333",
  colorSecondary: "#c4a276",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "rgba(25,26,30,.05)",
  appBorderRadius: 8,

  // Text colors
  textColor: "#333",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#d5d5d5",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#d5d5d5",
  inputTextColor: "#333",
  inputBorderRadius: 2,
});
