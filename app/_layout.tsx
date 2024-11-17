import React, { useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import this
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';
import Skip1Screen from "@/app/skips/skip1";
import LoginScreen from "@/app/auth/login";
import RegisterScreen from "@/app/auth/register";
import Skip3Screen from "@/app/skips/skip3";
import Skip2Screen from "@/app/skips/skip2";
import 'react-native-url-polyfill/auto';
import TerminsScreen from "@/app/termin/termins";
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfileScreen from "@/app/registered/profile";
import PatientTypeScreen from "@/app/termin/patientType";
import PregnantScreen from "@/app/termin/pregnant";
import UnpregnantScreen from "@/app/termin/unpregnant";
import TerminScreen from "@/app/termin/termin";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="skip3"
                        component={Skip3Screen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="register"
                        component={RegisterScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="tabNavigation"
                        component={TabNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="patientType"
                        component={PatientTypeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="pregnant"
                        component={PregnantScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="unpregnant"
                        component={UnpregnantScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="termin"
                        component={TerminScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;
                    if (route.name === 'profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'termins') {
                        iconName = focused ? 'calendar' : 'calendar-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#ffb3c1',
                tabBarInactiveTintColor: '#978386',
                headerShown: false,
            })}
        >
            <Tab.Screen name="termins" component={TerminsScreen} />
            <Tab.Screen name="profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}