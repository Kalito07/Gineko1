import React from "react";
import { View, StyleSheet, Alert, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SocialButton from "@/components/auth/SocialButton";
import { useSignIn } from "@clerk/clerk-react";

export default function SocialButtonsContainer() {
 const { signIn } = useSignIn();
 const navigation = useNavigation();

 const handleSignIn = async (provider: "oauth_google" | "oauth_facebook" | "oauth_github", action: "signIn" | "signUp") => {
  try {
   const method = action === "signIn" ? signIn : signUp; // Adjust for sign-in or sign-up.
   if (!method) {
    Alert.alert("Грешка", `Функцията за ${action === "signIn" ? "вход" : "регистрация"} не е налична.`);
    return;
   }

   const response = await method.create({
    strategy: provider,
    redirectUrl: "https://perfect-hermit-17.clerk.accounts.dev/v1/oauth_callback",
   });

   const redirectUrl = response.firstFactorVerification?.externalVerificationRedirectURL;
   if (redirectUrl) {
    const decodedUrl = decodeURIComponent(redirectUrl);
    Linking.openURL(decodedUrl);
   } else {
    Alert.alert("Грешка", "Не беше намерен адрес за пренасочване към провайдъра.");
   }
  } catch (error: unknown) {
   const errorMessage = error instanceof Error ? error.message : "Неизвестна грешка";
   Alert.alert("Грешка", `Възникна проблем: ${errorMessage}`);
   console.log(`Възникна проблем: ${errorMessage}`);
  }
 };


 return (
     <View style={styles.container}>
      <SocialButton
          source={require("@/assets/images/google.png")}
          onPress={() => handleSignIn("oauth_google","signUp")}
      />
      <SocialButton
          source={require("@/assets/images/facebook.png")}
          onPress={() => handleSignIn("oauth_facebook","signUp")}
      />
      <SocialButton
          source={require("@/assets/images/github.png")}
          onPress={() => handleSignIn("oauth_github","signUp")}
      />
     </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flexDirection: "row",
  justifyContent: "center",
  gap: 15,
  marginBottom: 30,
 },
});
