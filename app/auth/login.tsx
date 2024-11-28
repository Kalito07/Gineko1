import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './../../lib/navigationTypes';
import Logo from "@/components/auth/Logo";
import InputField from "@/components/auth/InputField";
import translations from "@/translations.json";
import SocialButtonsContainer from "@/components/auth/SocialButtonsContainer";
import AuthTitle from "@/components/auth/AuthTitle";
import SubmitButton from "@/components/auth/SubmitButton";
import Or from "@/components/auth/Or";
import AuthLayout from "@/layouts/_authLayout";
import { useSignIn } from '@clerk/clerk-expo';
import { useAuth } from '@clerk/clerk-expo';

export default function LoginScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const { signIn, setActive, isLoaded } = useSignIn(); // Using signIn directly from useSignIn
    const { isSignedIn, signOut } = useAuth();

    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMessages, setErrorMessages] = React.useState<string[]>([]);

    useEffect(() => {
        const handleSignOut = async () => {
            if (isSignedIn) {
                await signOut();
            }
        };
        handleSignOut();
    }, [isSignedIn, signOut]);

    const onSignInPress = React.useCallback(async () => {
        if (!isLoaded) {
            return;
        }

        try {
            // Use signIn.create for email/password sign-in
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password,
            });

            if (signInAttempt.status === 'complete') {
                // If successful, navigate to the tab navigation
                await setActive({ session: signInAttempt.createdSessionId });
                navigation.navigate('tabNavigation');
            } else {
                setErrorMessages(["Unexpected error occurred. Please try again."]);
            }
        } catch (err: any) {
            console.error(err);
            if (err.errors) {
                const messages = err.errors.map((error: any) => error.message);
                setErrorMessages(messages);
            } else {
                setErrorMessages(["Invalid email or password."]);
            }
        }
    }, [isLoaded, emailAddress, password, setActive, navigation]);

    return (
        <AuthLayout>
            <Logo />
            <AuthTitle text={translations.auth.loginTitle} />
            <InputField
                label={translations.auth.email}
                placeholder="example@example.com"
                value={emailAddress}
                onChangeText={setEmailAddress}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <InputField
                label={translations.auth.password}
                placeholder="********"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {errorMessages.map((msg, index) => (
                <Text key={index} style={styles.errorText}>{msg}</Text>
            ))}
            <SubmitButton title={translations.auth.logIn} onPress={onSignInPress} />
            <Or text={translations.auth.orLogin} />
            <View style={{ marginBottom: 100, flex: 1, justifyContent: 'center' }}>
                <SocialButtonsContainer />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: -10 }}>
                    <Text style={{ color: '#978386' }}>{translations.auth.withoutAccount} </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('register')}>
                        <Text style={{ color: '#c9184a' }}>{translations.auth.signUp}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
    },
});
