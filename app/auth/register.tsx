import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "@/lib/navigationTypes";
import Logo from "@/components/auth/Logo";
import InputField from "@/components/auth/InputField";
import translations from './../../translations.json';
import SubmitButton from "@/components/auth/SubmitButton";
import SocialButtonsContainer from "@/components/auth/SocialButtonsContainer";
import AuthTitle from "@/components/auth/AuthTitle";
import Or from "@/components/auth/Or";

export default function RegisterScreen ({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (email && password && password === confirmPassword) {
            console.log('New user registered');
            navigation.navigate('register');
        } else {
            console.log('Please fill in all fields correctly');
        }
    };

    return (
        <View style={styles.container}>
            <Logo />
            <AuthTitle test={translations.auth.registerTitle}/>
            <View style={styles.inputContainer}>
                <InputField placeholder={translations.auth.email} value={email} onChangeText={setEmail} />
                <InputField placeholder={translations.auth.password} value={password} onChangeText={setPassword} secureTextEntry />
                <InputField placeholder={translations.auth.confirmPassword} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
            </View>
            <SubmitButton title={translations.auth.signUp} onPress={handleRegister} />
            <Or text={translations.auth.orRegister}/>
            <SocialButtonsContainer />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#fff0f3',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
    },
    title: {

        marginBottom: 16,
        color: '#c9184a',
    },
    inputContainer: {
        marginBottom: 16,
    },
    orText: {
        textAlign: 'center',
        marginVertical: 16,
        color: '#999',
    }
});