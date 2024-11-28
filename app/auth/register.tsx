import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "@/lib/navigationTypes";
import Logo from "@/components/auth/Logo";
import InputField from "@/components/auth/InputField";
import translations from './../../translations.json';
import SubmitButton from "@/components/auth/SubmitButton";
import SocialButtonsContainer from "@/components/auth/SocialButtonsContainer";
import AuthTitle from "@/components/auth/AuthTitle";
import Or from "@/components/auth/Or";
import AuthLayout from "@/layouts/_authLayout";
import { useRouter } from "expo-router";
import { useSignUp } from '@clerk/clerk-expo';

export default function RegisterScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const { isLoaded, signUp, setActive } = useSignUp();
    const router = useRouter();

    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [pendingVerification, setPendingVerification] = React.useState(false);
    const [code, setCode] = React.useState('');
    const [errorMessages, setErrorMessages] = React.useState<string[]>([]);

    const onSignUpPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                emailAddress,
                password,
            });

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
            setPendingVerification(true);
            setErrorMessages([]); // Clear errors if successful
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
            if (err.errors) {
                const messages = err.errors.map((error: any) => error.message);
                setErrorMessages(messages);
            } else {
                setErrorMessages(["An unexpected error occurred. Please try again."]);
            }
        }
    };

    const onPressVerify = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId });
                navigation.navigate('tabNavigation');
            } else {
                console.error(JSON.stringify(completeSignUp, null, 2));
                setErrorMessages(["Verification failed. Please check the code and try again."]);
            }
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
            setErrorMessages(["An error occurred during verification. Please try again."]);
        }
    };


    return (
        <AuthLayout>
            <Logo />
            {!pendingVerification ? (
                <>
            <AuthTitle text={translations.auth.registerTitle} />
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
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    {errorMessages.map((msg, index) => (
                        <Text key={index} style={styles.errorText}>{msg}</Text>
                    ))}

                    <SubmitButton title={translations.auth.signUp} onPress={onSignUpPress} />
                    <Or text={translations.auth.orRegister} />

                    <View style={{ marginBottom: 24 }}>
                         {/*<SocialButtonsContainer />*/}
                    </View>
                </>
            ) : (
                <>
                    <InputField
                        label={translations.auth.verifyEnter}
                        value={code}
                        placeholder="000000"
                        onChangeText={setCode}
                    />

                    {errorMessages.map((msg, index) => (
                        <Text key={index} style={styles.errorText}>{msg}</Text>
                    ))}
<SubmitButton title={translations.auth.verify} onPress={onPressVerify} />
                </>
            )}
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginVertical: 5,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});
