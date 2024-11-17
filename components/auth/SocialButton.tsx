import { Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function SocialButton({ source }: any) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'white',
                shadowColor: '#978386', // Dark shadow color for a more noticeable effect
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,  // Reduced opacity for a subtler effect
                shadowRadius: 6,  // Slightly softer shadow
                padding: 10,
                borderRadius: 8,
                alignItems: 'center',
                elevation: 5, // For Android shadow
            }}
        >
            <Image source={source} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
    );
}
