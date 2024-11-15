import React, { useState } from 'react';
import { View } from 'react-native';
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

export default function RegisterScreen ({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        // if (email && password && password === confirmPassword) {
        //     console.log('New user registered');
        //     navigation.navigate('register');
        // } else {
        //     console.log('Please fill in all fields correctly');
        // }
        navigation.navigate('termins');
    };

    return (
        <AuthLayout>
            <Logo />
            <AuthTitle test={translations.auth.registerTitle}/>
            <View style={{marginBottom:16}}>
                <InputField label={translations.auth.email} placeholder={translations.auth.email} value={email} onChangeText={setEmail} />
                <InputField label={translations.auth.password} placeholder={translations.auth.password} value={password} onChangeText={setPassword} secureTextEntry />
                <InputField label={translations.auth.confirmPassword} placeholder={translations.auth.confirmPassword} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
            </View>
            <SubmitButton title={translations.auth.signUp} onPress={handleRegister} />
            <Or text={translations.auth.orRegister}/>
            <SocialButtonsContainer />
        </AuthLayout>
    );
};