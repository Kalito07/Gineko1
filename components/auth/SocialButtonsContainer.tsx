// import React from "react";
// import { View, StyleSheet, Alert } from "react-native";
// import SocialButton from "@/components/auth/SocialButton";
// import { useSignIn } from "@clerk/clerk-expo";
// import { AuthenticateWithRedirectCallback, GoogleOneTap } from "@clerk/clerk-react";
//
 export default function SocialButtonsContainer() {
//
//         const handleSignIn = async (provider: string) => {
//                 try {
//                         // Call the AuthenticateWithRedirectCallback for the provider (Google, Facebook, GitHub)
//                         const signInResponse = await AuthenticateWithRedirectCallback({
//                                 strategy: provider // Pass provider strategy (e.g., oauth_google, oauth_facebook)
//                         });
//
//                         // Check if further first-factor verification is needed
//                         if (signInResponse.firstFactorVerification) {
//                                 // If the first factor verification is pending, prepare the first factor
//                                 const firstFactorResponse = await signInResponse.prepareFirstFactor({
//                                         strategy: provider, // Use appropriate strategy here
//                                 });
//
//                                 // If additional verification is required, attempt it
//                                 if (firstFactorResponse.firstFactorVerification) {
//                                         const finalResponse = await signInResponse.attemptFirstFactor({
//                                                 strategy: provider, // Again, pass the same strategy
//                                                 // You can also pass other required parameters here like `code`, `signature`, etc., depending on the strategy
//                                         });
//
//                                         if (finalResponse.firstFactorVerification) {
//                                                 Alert.alert("Success", `Signed in with ${provider}.`);
//                                         } else {
//                                                 Alert.alert("Error", `Failed to complete verification with ${provider}.`);
//                                         }
//                                 }
//                         }
//
//                 } catch (error) {
//                         // Catch any errors and alert the user
//                         Alert.alert("Error", `Failed to sign in with ${provider}: ${error.message}`);
//                 }
//         };
//
//         return (
//             <View style={styles.container}>
//                     <GoogleOneTap />
//                     {/* Uncomment and use this for Google sign-in */}
//                     {/* <SocialButton */}
//                     {/*     source={require("@/assets/images/google.png")} */}
//                     {/*     onPress={() => handleSignIn("oauth_google")} // Trigger Google sign-in */}
//                     {/* /> */}
//                     <SocialButton
//                         source={require("@/assets/images/facebook.png")}
//                         onPress={() => handleSignIn("oauth_facebook")} // Trigger Facebook sign-in
//                     />
//                     <SocialButton
//                         source={require("@/assets/images/github.png")}
//                         onPress={() => handleSignIn("oauth_github")} // Trigger GitHub sign-in
//                     />
//             </View>
//         );
// }
//
// const styles = StyleSheet.create({
//         container: {
//                 flexDirection: "row",
//                 justifyContent: "center",
//                 gap: 15,
//                 marginBottom: 30,
//         },
};
