import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Switch, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import InputField from "@/components/auth/InputField";
import translations from "@/translations.json";
import Title from "@/components/Title";
import AuthLayout from "@/layouts/_authLayout";
import { Appearance, useColorScheme } from 'react-native';

export default function ProfileScreen() {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [email] = useState('user@example.com');
    const [name, setName] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);  // State to manage the theme

    // Get current theme
    const colorScheme = useColorScheme(); // This will give 'light' or 'dark'

    // Set initial theme based on system theme
    useEffect(() => {
        if (colorScheme === 'dark') {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, [colorScheme]);

    const handleSelectImage = () => {
        ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.assets && response.assets.length > 0 && response.assets[0].uri) {
                setProfileImage(response.assets[0].uri);
            } else {
                console.warn('No image selected or invalid response.');
            }
        });
    };

    const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

    // Defining styles based on the current theme
    const themeStyles = isDarkMode ? darkStyles : lightStyles;

    return (
        <AuthLayout>
            <View style={themeStyles.container}>
                <Title label={translations.termin.profile} />

                {/* Image picker button */}
                <TouchableOpacity onPress={handleSelectImage} style={themeStyles.imageContainer}>
                    {profileImage ? (
                        <Image source={{ uri: profileImage }} style={themeStyles.image} />
                    ) : (
                        <Image
                            source={require('@/assets/images/skip2.png')}
                            style={themeStyles.image}
                        />
                    )}
                </TouchableOpacity>

                {/* Inputs */}
                <InputField
                    label={translations.auth.name}
                    value={name}
                    placeholder={translations.auth.namePlaceHolder}
                    onChangeText={(text: string) => setName(text)}
                    style={themeStyles.inputField}
                />

                <InputField
                    label={translations.auth.email}
                    value={email}
                    editable={false}
                    style={themeStyles.inputField}
                />

                <InputField
                    label={translations.termin.phone}
                    placeholder="+1 111 111 111"
                    style={themeStyles.inputField}
                />

                {/* Dark/Light Mode Switch */}
                <View style={styles.switchContainer}>
                    <Text style={themeStyles.switchLabel}>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</Text>
                    <Switch
                        value={isDarkMode}
                        onValueChange={toggleSwitch}
                        thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                    />
                </View>
            </View>
        </AuthLayout>
    );
}

const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imageContainer: {
        marginVertical: 30,
        width: 130,
        height: 130,
        borderRadius: 65,
        borderColor: "#590d22",
        borderWidth: 2,
        backgroundColor: '#d1d5db',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    inputField: {
        marginTop: 10,
    },
    switchLabel: {
        color: '#000',
    },
});

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
    },
    imageContainer: {
        marginVertical: 30,
        width: 130,
        height: 130,
        borderRadius: 65,
        borderColor: "#590d22",
        borderWidth: 2,
        backgroundColor: '#d1d5db',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    inputField: {
        marginTop: 10,
    },
    switchLabel: {
        color: '#fff',
    },
});

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
});
