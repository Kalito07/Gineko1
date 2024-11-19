import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import InputField from "@/components/auth/InputField";
import translations from "@/translations.json";
import Title from "@/components/Title";
import TerminLayout from "@/layouts/_terminLayout";

export default function ProfileScreen() {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [email] = useState('user@example.com');
    const [name, setName] = useState('');

    const handleSelectImage = () => {
        ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.assets && response.assets.length > 0) {
                setProfileImage(response.assets[0].uri);
            }
        });
    };

    return (
        <TerminLayout>
            <Title label={translations.termin.profile} />
            <TouchableOpacity onPress={handleSelectImage} style={styles.avatarContainer}>
                {profileImage ? (
                    <Image source={{ uri: profileImage }} style={styles.avatar} />
                ) : (
                    <Image
                        source={require('@/assets/images/skip2.png')}
                        //source={require('@/assets/images/default-avatar.png')}
                        style={styles.avatar}
                    />
                )}
            </TouchableOpacity>

            {/* Input Fields */}
            <InputField
                label={translations.auth.name}
                value={name}
                placeholder={translations.auth.namePlaceHolder}
                onChangeText={(text) => setName(text)}
            />
            <InputField
                label={translations.auth.email}
                value={email}
                editable={false} // Email is non-editable
            />
            <InputField
                label={translations.termin.phone}
                placeholder="+1 111 111 111"
            />
        </TerminLayout>
    );
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginVertical: 30,
        marginHorizontal: "auto",
        width: 96,
        height: 96,
        borderRadius: 48,
        backgroundColor: '#d1d5db',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
