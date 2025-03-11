import 'styled-components';
import { ReactNative } from 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      error: string;
    };
    fonts: {
      regular: string;
      bold: string;
    };
    spacing: {
      small: number;
      medium: number;
      large: number;
    };
  }

  export const styled: ReactNative['styled'];
}