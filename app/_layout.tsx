import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider} from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';
import Skip1Screen from "@/app/skips/skip1";
import LoginScreen from "@/app/auth/login";
import RegisterScreen from "@/app/auth/register";
import Skip3Screen from "@/app/skips/skip3";
import Skip2Screen from "@/app/skips/skip2";


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
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="skip1"
                        component={Skip1Screen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="skip2"
                        component={Skip2Screen}
                    />
                    <Stack.Screen
                        name="skip3"
                        component={Skip3Screen}
                    />
                    <Stack.Screen
                        name="login"
                        component={LoginScreen}
                    />
                    <Stack.Screen
                        name="register"
                        component={RegisterScreen}
                    />
                    </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}