import React from "react";
import { View, StyleSheet, Alert, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SocialButton from "@/components/auth/SocialButton";
import { useSignIn } from "@clerk/clerk-react";

export default function SocialButtonsContainer() {
 const { signIn } = useSignIn();
 const navigation = useNavigation();

 const handleSignIn = async (provider: "oauth_google" | "oauth_facebook" | "oauth_github") => {
  try {
   if (!signIn) {
    Alert.alert("Грешка", "Функцията за вход не е налична.");
    return;
   }

   const signInResponse = await signIn.create({
    strategy: provider,
    redirectUrl: "https://perfect-hermit-17.clerk.accounts.dev/v1/oauth_callback",
   });

   const redirectUrl = signInResponse.firstFactorVerification?.externalVerificationRedirectURL;

   if (redirectUrl) {
    const decodedUrl = decodeURIComponent(redirectUrl);
    Linking.openURL(decodedUrl);

    navigation.navigate('tabNavigation');
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
          onPress={() => handleSignIn("oauth_google")}
      />
      <SocialButton
          source={require("@/assets/images/facebook.png")}
          onPress={() => handleSignIn("oauth_facebook")}
      />
      <SocialButton
          source={require("@/assets/images/github.png")}
          onPress={() => handleSignIn("oauth_github")}
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
