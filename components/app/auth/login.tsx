import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "@/lib/navigationTypes";
import axiosInstance from "@/lib/axiosInstance";
import Logo from "@/components/auth/Logo";
import InputField from "@/components/auth/InputField";
import translations from './../../translations.json';
import SubmitButton from "@/components/auth/SubmitButton";
import AuthTitle from "@/components/auth/AuthTitle";
import Message from "@/components/Message";
import AuthLayout from "@/layouts/_authLayout";

export default function LoginScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            setErrorMessage('Please fill in all fields.');
            setIsModalVisible(true);
            return;
        }

        try {
            const response = await axiosInstance.post('/login', { email, password });

            if (response.status === 200) {
                navigation.navigate('tabNavigation');
            }
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || 'Login failed.');
            setIsModalVisible(true);
        }
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setErrorMessage('');
    };

    return (
        <AuthLayout>
            <Logo />
            <AuthTitle text={translations.auth.loginTitle} />
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
            <SubmitButton title={translations.auth.loginTitle} onPress={handleLogin} />
            <Message visible={isModalVisible} onClose={closeModal} label={errorMessage} />
        </AuthLayout>
    );
}
