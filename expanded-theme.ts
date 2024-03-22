// import { Palette, PaletteColor } from "@mui/material/styles/createPalette";
// eslint-disable-next-line
// import { Palette, PaletteColor } from "@mui/material/styles/createPalette";
// import * as Palette from "@mui/material/styles/createPalette";

 // eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}

//   type NumericOrStringKey = string | number;

//   interface PaletteColorWithNumericIndex extends PaletteColor {
//     [index: number]: string;
//     [index: string]: string;
//   }

//   interface Palette {
//     tertiary: PaletteColorWithNumericIndex;
//   }
// }

// declare module "@mui/material/styles/createPalette" {
//   interface Palette {
//     primary: PaletteColor;
//   }

//   interface PaletteColor {
//     [index: number]: string;
//   }
// }

// declare module "@mui/material/styles/createPalette" {
//   interface PaletteColor {
//     [key: number]: string;
//   }

//   interface Palette {
//     tertiary: PaletteColor;
//   }
// }

// declare module "@mui/material/styles/createPalette" {
//   interface PaletteColor {
//     [index: string]: string;
//   }

//   interface PaletteColorWithNumericIndex extends PaletteColor {
//     [index: number]: string;
//   }

//   interface Palette {
//     tertiary: PaletteColorWithNumericIndex;
//   }
// }


// declare module "@mui/material/styles/createPalette" {
//   export type PaletteColorWithNumericType = string | number;
  
//   export interface PaletteColor {
//     [key: PaletteColorWithNumericType]: string;
//   }

//   export interface Palette {
//     tertiary: PaletteColor;
//   }
// }


// eslint-disable-next-line
// import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

// declare module "@mui/material/styles/createPalette" {
  
//   export interface PaletteColor {
//     [index: number]: string;
//   }

//   export interface Palette {
//     tertiary: PaletteColor;
//   }
// }

// export declare module "@mui/material/styles/createPalette" {
// }
