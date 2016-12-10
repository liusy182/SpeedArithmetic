'use strict';

import { Platform } from 'react-native';

export const Color =  {
  DarkPrimary: '#00796B',
  Primary: '#009688',
  LightPrimary: '#B2DFDB',
  Accent: '#F57C00',
  Dark: '#212121',
  DarkGray: '#757575',
  Gray: '#BDBDBD',
  LightGray: '#EEEEEE',
  White: '#FFFFFF'
};

export const AppBarHHeight = Platform.OS === 'ios' ? 44 : 56;
export const StatusBarHeight = Platform.OS === 'ios' ? 20 : 0;
export const NavBarHeight = AppBarHHeight + StatusBarHeight;



