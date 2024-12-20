import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "@/lib/navigationTypes";
import axiosInstance from "@/lib/axiosInstance";
import Logo from "@/components/auth/Logo";
import InputField from "@/components/auth/InputField";
import translations from './../../translations.json';
import SubmitButton from "@/components/auth/SubmitButton";
import SocialButtonsContainer from "@/components/auth/SocialButtonsContainer";
import AuthTitle from "@/components/auth/AuthTitle";
import Or from "@/components/auth/Or";
import AuthLayout from "@/layouts/_authLayout";
import Message from "@/components/Message";

export default function RegisterScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword) {
            setErrorMessage('Please fill in all fields.');
            setIsModalVisible(true);
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            setPassword('');
            setConfirmPassword('');
            setIsModalVisible(true);
            return;
        }

        try {
            const response = await axiosInstance.post('/register', { email, password });

            if (response.status === 201) {
                navigation.navigate('tabNavigation');
            }
        } catch (error: any) {
            setErrorMessage(error.response?.data?.message || 'Registration failed.');
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
            <AuthTitle text={translations.auth.registerTitle} />
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
            <SubmitButton title={translations.auth.signUp} onPress={handleRegister} />
            <Or text={translations.auth.orRegister} />
            <View style={{ marginBottom: 24 }}>
                <SocialButtonsContainer />
            </View>
            <Message visible={isModalVisible} onClose={closeModal} label={errorMessage} />
        </AuthLayout>
    );
}
