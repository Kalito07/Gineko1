import React, { useState } from 'react';
import { Text, View } from 'react-native';
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
import PatientType from "@/components/auth/PatientType";

export default function RegisterScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('patient');

    const handleRegister = () => {
        // if (email && password && confirmPassword && password === confirmPassword) {
        //     console.log('New user registered');
        //     console.log('User Type:', userType);
            navigation.navigate('tabNavigation');
        // } else {
        //     console.log('Please fill in all fields correctly or ensure passwords match');
        // }
    };

    return (
        <AuthLayout>
            <Logo />
            <AuthTitle text={translations.auth.registerTitle} />
            <View style={{ marginBottom: 16 }}>
                <InputField
                    label={translations.auth.email}
                    placeholder="example@example.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <InputField
                    label={translations.auth.password}
                    placeholder="********"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <InputField
                    label={translations.auth.confirmPassword}
                    placeholder="********"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
            </View>

            <PatientType userType={userType} setUserType={setUserType} />

            <SubmitButton title={translations.auth.signUp} onPress={handleRegister} />
            <Or text={translations.auth.orRegister} />
            <SocialButtonsContainer />
        </AuthLayout>
    );
}
