import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { RootStackParamList } from './../../lib/navigationTypes'; // Импортиране на параметрите

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Използване на типизираната навигация
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Функция за обработка на логин
    const handleLogin = () => {
        // Примерна логика за логин
        if (email && password) {
            console.log('Логнат е потребителят');
            // Навигиране към следващия екран
            navigation.navigate('Profile'); // Тук може да бъде всякакъв следващ екран
        } else {
            console.log('Моля, въведете валидни данни');
        }
    };

    // Примерна логика за навигация към регистрация
    const handleRegisterNavigation = () => {
        navigation.navigate('Register');
    };

    return (
        <View>
            <Text>Влезте в акаунта си</Text>
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
            <Button title="Логин" onPress={handleLogin} />
            <Button title="Нямате акаунт? Регистрирайте се" onPress={handleRegisterNavigation} />
        </View>
    );
};

export default LoginScreen;
