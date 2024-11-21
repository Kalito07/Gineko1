import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

export default function ProfilePhoto({ navigation }: any) {
    const handleProfilePhoto = () => {
        navigation.navigate('profile');
    };

    return (
        <View style={{flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            right: 0}}>
            <Text style={{fontSize: 16,
                fontWeight: 'bold',
                color: '#590d22',
                marginRight: 10}}>John Doe</Text>
            <TouchableOpacity style={{borderRadius: 30,
                marginLeft:4,
                overflow: 'hidden',
                borderColor: '#590d22',shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
                borderWidth: 2,
                shadowColor:'#978386'}} onPress={handleProfilePhoto}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/40' }}
                style={{width: 50,
                    height: 50}}
                />
            </TouchableOpacity>
        </View>
    );
}