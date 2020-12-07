import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    black?: string;
  }

  interface Palette {
    black: string;
  }
}
