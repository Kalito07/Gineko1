import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  NavigationProp, NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import Ionicons from "@expo/vector-icons/Ionicons";
import translations from "./../translations.json";
import Skip1Screen from "@/app/skips/skip1";
import Skip2Screen from "@/app/skips/skip2";
import Skip3Screen from "@/app/skips/skip3";
import LoginScreen from "@/app/auth/login";
import RegisterScreen from "@/app/auth/register";
import TerminsScreen from "@/app/termin/termins";
import ProfileScreen from "@/app/registered/profile";
import PatientTypeScreen from "@/app/termin/patientType";
import PregnantScreen from "@/app/termin/pregnant";
import UnpregnantScreen from "@/app/termin/unpregnant";
import TerminScreen from "@/app/termin/termin";
import SymptomsSelectionScreen from "@/app/termin/symptomsSelection";
import Message from "./../components/Message";
import { RootStackParamList } from "@/lib/navigationTypes";
import {useFonts} from "expo-font";
import { useClerk } from '@clerk/clerk-expo';
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const clerkFrontendApi = 'your-clerk-frontend-api';
const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      console.error("SecureStore save item error: ", err);
      return;
    }
  },
};

const publishableKey = "pk_test_cGVyZmVjdC1oZXJtaXQtMTcuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!publishableKey) {
  throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey} frontendApi={clerkFrontendApi}>
        <ClerkLoaded>
          <NavigationIndependentTree>
          <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack.Navigator initialRouteName="skip1">
              <Stack.Screen name="skip1" component={Skip1Screen} options={{ headerShown: false }} />
              <Stack.Screen name="skip2" component={Skip2Screen} options={{ headerShown: false }} />
              <Stack.Screen name="skip3" component={Skip3Screen} options={{ headerShown: false }} />
              <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
              <Stack.Screen name="tabNavigation" component={TabNavigator} options={{ headerShown: false }} />
              <Stack.Screen name="patientType" component={PatientTypeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="pregnant" component={PregnantScreen} options={{ headerShown: false }} />
              <Stack.Screen name="unpregnant" component={UnpregnantScreen} options={{ headerShown: false }} />
              <Stack.Screen name="termin" component={TerminScreen} options={{ headerShown: false }} />
              <Stack.Screen name="symptoms" component={SymptomsSelectionScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
          </NavigationIndependentTree>
          <Message
              visible={isLogoutModalVisible}
              onClose={() => setLogoutModalVisible(false)}
              label={message}
          />
        </ClerkLoaded>
      </ClerkProvider>
  );
}
function TabNavigator({ navigation }: { navigation: NavigationProp<any> }) {
  const colorScheme = useColorScheme();
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const { signOut } = useClerk(); // Get the signOut function from useClerk

  const handleLogout = async () => {
    try {
      await signOut(); // Use signOut from Clerk
      console.log("User successfully logged out");
    } catch (error) {
      console.error("Error logging out: ", error);
    } finally {
      setLogoutModalVisible(false);
      navigation.navigate("login"); // Redirect to the login screen
    }
  };

  return (
      <>
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "profile") {
                  iconName = focused ? "person" : "person-outline";
                } else if (route.name === "termins") {
                  iconName = focused ? "calendar" : "calendar-outline";
                } else if (route.name === "logout") {
                  iconName = focused ? "log-out" : "log-out-outline";
                }
                return (
                    <Ionicons
                        name={iconName as string}
                        size={size}
                        color={color}
                        style={{ alignSelf: "center" }}
                    />
                );
              },
              tabBarActiveTintColor: colorScheme === "dark" ? "#ffdae0" : "#590d22",
              tabBarStyle: {
                backgroundColor: colorScheme === "dark" ? "#272727" : "#ffdae0",
                height: 70,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                alignItems: "center",
                justifyContent: "center",
              },
              tabBarLabelStyle: { fontSize: 12 },
              headerShown: false,
            })}
        >
          <Tab.Screen name="termins" component={TerminsScreen} />
          <Tab.Screen name="profile" component={ProfileScreen} />
          <Tab.Screen
              name="logout"
              component={() => null}
              listeners={{
                tabPress: (e) => {
                  e.preventDefault();
                  setLogoutModalVisible(true);
                },
              }}
          />
        </Tab.Navigator>
        <Message
            visible={isLogoutModalVisible}
            onClose={() => handleLogout()}
            label={translations.termin.logOut}
        />
      </>
  );
}
