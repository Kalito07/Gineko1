import {Image, TouchableOpacity, useColorScheme} from 'react-native';
import React from 'react';

export default function SocialButton({ source }: any) {
    const theme = useColorScheme();
    const backgroundColor = theme === 'dark' ? '#272727' : 'white';
    return (
        <TouchableOpacity
            style={{
                backgroundColor: backgroundColor,
                shadowColor: '#978386',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                padding: 10,
                borderRadius: 8,
                alignItems: 'center',
                elevation: 5,
            }}
        >
            <Image source={source} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
    );
}
