import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from "@/lib/navigationTypes"; // Импортиране на навигацията

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Функция за обработка на регистрацията
    const handleRegister = () => {
        if (email && password) {
            console.log('Регистриран е нов потребител');
            // След успешната регистрация, навигиране към LoginScreen
            navigation.navigate('Login');
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
