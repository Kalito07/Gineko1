import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from "@/lib/navigationTypes"; // Импортиране на навигацията

const RegisterScreen = ({ navigation }: { navigation: NavigationProp<RootStackParamList> }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if (email && password) {
            console.log('Регистриран е нов потребител');
            navigation.navigate('register');
        } else {
            console.log('Моля, попълнете всички полета');
        }
    };

    return (
        <View>
            <Text>Регистрация</Text>
            <TextInput
                placeholder="Имейл"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Парола"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Регистрирай се" onPress={handleRegister} />
        </View>
    );
};

export default RegisterScreen;
