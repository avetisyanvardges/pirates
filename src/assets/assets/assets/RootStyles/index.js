import {Dimensions} from 'react-native';

let width = Dimensions.get('window').width;

export const ratio = width / 375;

export const Size = {};

for (let i = 1; i < 700; i++) {
  Size[`size${i}`] = i * ratio > i ? i : i * ratio;
}

export const normalize = size => {
  return Size[`size${size}`];
};

export const Colors = {
  black: '#212121',
  white: '#ffffff',
  placeholder: '#cccccc',
  yellow: '#fcba03',
  silver: '#818195',
  green: {
    50: '#eff8ea',
    100: '#cdeabf',
    200: '#b4df9f',
    300: '#92d174',
    400: '#7dc859',
    500: '#5dba2f',
    600: '#55a92b',
    700: '#428421',
    800: '#33661a',
    900: '#274e14',
  },
  grey: {
    50: '#e9e9e9',
    100: '#bcbcbc',
    200: '#9b9b9b',
    300: '#6e6e6e',
    400: '#515151',
    500: '#262626',
    600: '#232323',
    700: '#1b1b1b',
    800: '#151515',
    900: '#101010',
  },
  oxford_blue: {
    30: '#F5F5F5',
    50: '#e7e9ec',
    100: '#b3bbc4',
    200: '#8e9ba7',
    300: '#5b6d7f',
    400: '#3b5166',
    500: '#0a2540',
    600: '#09223a',
    700: '#071a2d',
    800: '#061423',
    900: '#04101b',
  },
  blue: {
    50: '#edf5fb',
    100: '#c8def3',
    200: '#aecfee',
    300: '#89b9e6',
    400: '#72abe1',
    500: '#4f96d9',
    600: '#4889c5',
    700: '#386b9a',
    800: '#2b5377',
    900: '#213f5b',
  },
  orange: {
    50: '#fff5eb',
    100: '#fee0c2',
    200: '#fed1a4',
    300: '#fdbb7b',
    400: '#fdae61',
    500: '#fc9a3a',
    600: '#e58c35',
    700: '#b36d29',
    800: '#8b5520',
    900: '#6a4118',
  },
  red: {
    50: '#ffeced',
    100: '#fec5c6',
    200: '#fea9aa',
    300: '#fd8284',
    400: '#fd696c',
    500: '#fc4447',
    600: '#e53e41',
    700: '#e53e41',
    800: '#8b2527',
    900: '#6a1d1e',
  },
  purple: {
    50: '#f3f2fe',
    100: '#dad8fd',
    200: '#c8c5fb',
    300: '#afabfa',
    400: '#9f9af9',
    500: '#8781f7',
    600: '#7b75e1',
    700: '#605caf',
    800: '#4a4788',
    900: '#393668',
  },
  pink: {
    50: '#ffedfb',
    100: '#fec8f2',
    200: '#fdaeec',
    300: '#fc88e3',
    400: '#fc71dd',
    500: '#fb4ed5',
    600: '#e447c2',
    700: '#b23797',
    800: '#8a2b75',
    900: '#692159',
  },
};

export const Fonts = {
  arm: {
    black: 'Montserratarm2-Black',
    bold: 'Montserratarm2-Bold',
    extraBold: 'Montserratarm2-ExtraBold',
    extraLight: 'Montserratarm2-ExtraLight',
    light: 'Montserratarm2-Light',
    medium: 'Montserratarm2-Medium',
    regular: 'Montserratarm2-Regular',
    semi_bold: 'Montserratarm2-SemiBold',
    thin: 'Montserratarm2-Thin',
  },
  melorist: 'melorist',
};

export const BackgroundColors = {
  black: '#181a20',
  white: '#ffffff',
  blue: '#0A2540',
};

export const Shadow = {
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  elevation: 24,
};

export const FullScreen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
