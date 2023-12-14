import { createContext } from "react";

// export type CssValues = {
//     "color": string,
//     "background-color": string,
//     "font-family": string,
//     "font-size": string
// };


export type CssValues = { [key: string]: string };

export const appTheme: CssValues = {
    "color": "magenta",
    "background-color": "pink",
    "font-family": "arial",
    "font-size": "small"
};

const ThemeContext = createContext<CssValues>(null);

export default ThemeContext;
