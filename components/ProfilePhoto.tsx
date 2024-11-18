import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "@/lib/navigationTypes";

export default function ProfilePhoto({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const handleProfilePhoto = () => {
        navigation.navigate('profile');
    }
    return (
        <TouchableOpacity style={{position: 'absolute',
            top: 40,
            right: 20,
            zIndex: 1}} onPress={()=>handleProfilePhoto}>
            <Image
                // source={{ uri: 'https://via.placeholder.com/40' }} // Replace with user's image URL
                style={{width: 55,
                    height: 55,
                    borderRadius: 30,
                    borderColor: '#590d22',
                    borderWidth: 2}}
            />
        </TouchableOpacity>
    );
}