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

export default function LoginScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('patient'); // Default type is patient

    const handleLogin = () => {
        if (email && password) {
            console.log('User logged in');
            console.log('User Type:', userType); // Log the selected user type
            // navigation.navigate('TerminsScreen'); // Uncomment to navigate to the TerminsScreen
        } else {
            console.log('Please enter valid credentials');
        }
    };

    return (
        <View>
            <Logo />
            <AuthTitle text={translations.auth.loginTitle} />

            <InputField
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <InputField
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            {/* Radio Buttons for User Type Selection */}//TODO: MAKE BETTER
            <Text style={styles.userTypeLabel}>Select User Type:</Text>
            <View style={styles.radioContainer}>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setUserType('patient')}
                >
                    <View style={[styles.radioCircle, userType === 'patient' && styles.radioSelected]} />
                    <Text style={styles.radioText}>Patient</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setUserType('doctor')}
                >
                    <View style={[styles.radioCircle, userType === 'doctor' && styles.radioSelected]} />
                    <Text style={styles.radioText}>Doctor</Text>
                </TouchableOpacity>
            </View>

            <SubmitButton title={translations.auth.logIn} onPress={handleLogin} />

            <Or text={translations.auth.orLogin} />

            <SocialButtonsContainer />

            <Text style={{ color: '#A0AEC0', textAlign: 'center' }}>
                {translations.auth.withoutAccount}
                <Text
                    style={{ color: '#3182CE' }}
                    onPress={() => navigation.navigate('register')}
                >
                    {translations.auth.signUp}
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    userTypeLabel: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    radioContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioSelected: {
        backgroundColor: '#3182CE',
    },
    radioText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
});
