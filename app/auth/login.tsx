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

export default function LoginScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            console.log('User logged in');
            navigation.navigate('termins');
        } else {
            console.log('Please enter valid credentials');
        }
    };

    return (
        <AuthLayout>
            <Logo />
            <AuthTitle text={translations.auth.loginTitle} />

            {/* Social Buttons and Without Account Section */}


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
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                type={password}
            />

            <SubmitButton title={translations.auth.logIn} onPress={handleLogin} />

            <Or text={translations.auth.orLogin} />
            <View style={{marginBottom: 130,
                flex: 1,
                justifyContent: 'center'}}>
                <SocialButtonsContainer />
                <View style={{flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 11}}>
                    <Text style={{color: '#978386'}}>
                        {translations.auth.withoutAccount}{' '}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('register')}>
                        <Text style={{color: '#c9184a'}}>{translations.auth.signUp}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AuthLayout>
    );
}