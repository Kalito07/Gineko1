import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/lib/navigationTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfilePhoto({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const handleProfilePhoto = () => {
        navigation.navigate('profile');
    };

    const handleLogout = async () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Yes",
                    onPress: async () => {
                        await AsyncStorage.clear();
                        navigation.navigate('login');
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.username}>John Doe</Text> {/* Replace with dynamic username */}
            <TouchableOpacity style={styles.imageContainer} onPress={handleProfilePhoto}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/40' }} // Replace with the user's image URL
                    style={styles.profileImage}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        right: 20,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#590d22',
        marginRight: 10,
    },
    imageContainer: {
        borderRadius: 30,
        overflow: 'hidden',
        borderColor: '#590d22',
        borderWidth: 2,
    },
    profileImage: {
        width: 55,
        height: 55,
    },
    logoutButton: {
        marginLeft: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#590d22',
        borderRadius: 5,
    },
    logoutText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
