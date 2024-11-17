import React, { useState } from 'react';
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
import {RadioButton} from "react-native-paper";
import RadioButtonComponent from "@/components/auth/RadioButton";

export default function LoginScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('patient');

    const handleLogin = () => {
        if (email && password) {
            console.log('User logged in');
            console.log('User Type:', userType);
            navigation.navigate('termins');
        } else {
            console.log('Please enter valid credentials');
        }
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
                placeholder="********ww"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <View style={{ marginVertical: 10 }}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: 10,
                    textAlign: 'left',
                }}>
                    {translations.auth.typeOfUser}
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <RadioButtonComponent
                        label={translations.auth.patient}
                        selected={userType === 'patient'}
                        onPress={() => setUserType('patient')}
                    />
                    <RadioButtonComponent
                        label={translations.auth.doctor}
                        selected={userType === 'doctor'}
                        onPress={() => setUserType('doctor')}
                    />
                </View>
            </View>



            <SubmitButton title={translations.auth.logIn} onPress={handleLogin} />

            <Or text={translations.auth.orLogin} />

            <SocialButtonsContainer />

            <Text style={{ color: '#A0AEC0', textAlign: 'center' }}>
                {translations.auth.withoutAccount}{' '}

            </Text>
            <TouchableOpacity>
                <Text style={{ color: '#3182CE' }} onPress={() => navigation.navigate('register')}>{translations.auth.signUp}</Text>
            </TouchableOpacity>
        </AuthLayout>
    );
}