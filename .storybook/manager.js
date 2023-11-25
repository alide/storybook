// .storybook/manager.js

import { addons } from "@storybook/manager-api";
import theme from "./theme";
import "./styles/variables.css";
import "./styles/sidebar.css";

addons.setConfig({
  theme: theme,
});
