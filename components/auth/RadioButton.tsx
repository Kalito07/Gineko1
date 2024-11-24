import React from 'react';
import {TouchableOpacity, Text, View, useColorScheme} from 'react-native';

export default function RadioButtonComponent({ selected, onPress, label }: any) {
    const theme = useColorScheme();
    const primary = theme === 'dark' ? 'white' : '#978386';

    return (
        <TouchableOpacity
            style={{flexDirection: 'row',
                alignItems: 'center', marginBottom:2}}
            onPress={onPress}
            accessible={true}
            accessibilityLabel={label}
            accessibilityRole="radio"
            accessibilityState={{ selected }}
        >
            <View style={[{ height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: primary,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 12}, selected && {backgroundColor: '#c9184a',
                borderColor: '#c9184a'}]} />
            <Text style={{fontSize: 16,
                color: primary}}>{label}</Text>
        </TouchableOpacity>
    );
}