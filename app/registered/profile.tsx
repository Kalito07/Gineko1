import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import InputField from "@/components/auth/InputField";
import translations from "@/translations.json";
import Title from "@/components/Title";
import AuthLayout from "@/layouts/_authLayout";

export default function ProfileScreen() {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [email] = useState('user@example.com');
    const [name, setName] = useState('');

    const handleSelectImage = () => {
        ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.assets && response.assets.length > 0 && response.assets[0].uri) {
                setProfileImage(response.assets[0].uri);
            } else {
                console.warn('No image selected or invalid response.');
            }
        });
    };


    return (
        <AuthLayout>
            <View style={{marginTop:-100}}>
            <Title label={translations.termin.profile} />
            </View>
            <TouchableOpacity onPress={handleSelectImage} style={{marginVertical: 30,
                marginHorizontal: "auto",
                width: 130,
                height: 130,
                borderRadius: 70,
                borderColor:"#590d22",
                borderWidth:2,
                backgroundColor: '#d1d5db',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'}}>
                {profileImage ? (
                    <Image source={{ uri: profileImage }} style={{width: '100%',
                        height: '100%',
                        resizeMode: 'cover'}} />
                ) : (
                    <Image
                        source={require('@/assets/images/skip2.png')}
                        //source={require('@/assets/images/default-avatar.png')}
                        style={{width: '100%',
                            height: '100%',
                            resizeMode: 'cover'}}
                    />
                )}
            </TouchableOpacity>

            <InputField
                label={translations.auth.name}
                value={name}
                placeholder={translations.auth.namePlaceHolder}
                onChangeText={(text: string) => setName(text)}
            />

            <InputField
                label={translations.auth.email}
                value={email}
                editable={false}
            />
            <InputField
                label={translations.termin.phone}
                placeholder="+1 111 111 111"
            />
        </AuthLayout>
    );
}