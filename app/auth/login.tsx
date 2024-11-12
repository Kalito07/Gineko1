import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './../../lib/navigationTypes';

const LoginScreen = ({ navigation }: { navigation: NavigationProp<RootStackParamList> }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password) {
            console.log('Логнат е потребителят');
            // navigation.navigate('TerminsScreen'); // Пренасочване към TermsScreen
        } else {
            console.log('Моля, въведете валидни данни');
        }
    };

    // Примерна логика за навигация към регистрация
    const handleRegisterNavigation = () => {

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
            <Button title="Нямате акаунт? Регистрирайте се" onPress={()=>navigation.navigate('register')} />
        </View>
    );
};

export default LoginScreen;
