import React from 'react';
import { View, Text, TouchableOpacity, Button, TextInput, StyleSheet } from 'react-native';
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
import { useRouter } from "expo-router";

export default function LoginScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();

    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [pendingVerification, setPendingVerification] = React.useState(false);
    const [code, setCode] = React.useState('');
    const [errorMessages, setErrorMessages] = React.useState<string[]>([]);

    const onSignInPress = React.useCallback(async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password,
            });

            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId });
                router.replace('/');
            } else if (signInAttempt.status === 'needs_first_factor') {
                setPendingVerification(true);
                setErrorMessages([]);
            } else {
                console.error(JSON.stringify(signInAttempt, null, 2));
                setErrorMessages(["Unexpected error occurred. Please try again."]);
            }
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
            if (err.errors) {
                const messages = err.errors.map((error: any) => error.message);
                setErrorMessages(messages);
            } else {
                setErrorMessages(["Invalid email or password."]);
            }
        }
    }, [isLoaded, emailAddress, password]);

    const onPressVerify = React.useCallback(async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const verificationAttempt = await signIn.attemptFirstFactor({
                code,
                strategy: 'email_code',
            });

            if (verificationAttempt.status === 'complete') {
                await setActive({ session: verificationAttempt.createdSessionId });
                router.replace('/');
            } else {
                console.error(JSON.stringify(verificationAttempt, null, 2));
                setErrorMessages(["Invalid verification code."]);
            }
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
            setErrorMessages(["Error during verification. Please try again."]);
        }
    }, [isLoaded, code]);

    return (
        <AuthLayout>
            {!pendingVerification && (
                <>
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
                    <View
                        style={{
                            marginBottom: 100,
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <SocialButtonsContainer />
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: -10,
                            }}
                        >
                            <Text style={{ color: '#978386' }}>
                                {translations.auth.withoutAccount}{' '}
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('register')}>
                                <Text style={{ color: '#c9184a' }}>{translations.auth.signUp}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            )}
            {pendingVerification && (
                <>
                    <TextInput
                        value={code}
                        placeholder="Code..."
                        onChangeText={setCode}
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
                    />
                    {errorMessages.map((msg, index) => (
                        <Text key={index} style={styles.errorText}>{msg}</Text>
                    ))}
                    <Button title="Verify Email" onPress={onPressVerify} />
                </>
            )}
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
