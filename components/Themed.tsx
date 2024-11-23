import { Text as DefaultText, View as DefaultView, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

type ColorsKey = keyof typeof Colors.light;

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: ColorsKey
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  return Colors[theme][colorName];
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');  // Get the text color based on theme

  return (
      <DefaultText style={[{ color }, style]} {...otherProps} />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      'background'  // Get background color based on theme
  );

  return (
      <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

// Styles based on theme
const styles = StyleSheet.create({
  dark: {
    backgroundColor: '#1A1A1A',
    color: '#FAFAFA',
  },
  light: {
    backgroundColor: '#FAFAFA',
    color: '#1A1A1A',
  },
});
