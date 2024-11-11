import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';
import Skip1Screen from "@/app/skips/skip1";
import LoginScreen from "@/app/auth/Login";
import RegisterScreen from "@/app/auth/Register";
import Skip2Screen from "@/app/skips/skip2";
import Skip3Screen from "@/app/skips/skip3";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack.Navigator initialRouteName="skips/Skip1">
                <Stack.Screen
                    name="skips/Skip1"
                    component={Skip1Screen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="skips/Skip2"
                    options={{presentation: 'modal'}}
                />
                <Stack.Screen
                    name="skips/Skip3"
                    component={Skip3Screen}
                />
                <Stack.Screen
                    name="auth/Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="auth/Register"
                    component={RegisterScreen}
                />
            </Stack.Navigator>
        </ThemeProvider>
    );
}