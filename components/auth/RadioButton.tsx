import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export default function RadioButtonComponent({ selected, onPress, label }: any) {
    return (
        <TouchableOpacity
            style={{flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 3, marginLeft:4}}
            onPress={onPress}
            accessible={true}
            accessibilityLabel={label}
            accessibilityRole="radio"
            accessibilityState={{ selected }}
        >
            <View style={[{height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#978386',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 6}, selected && {backgroundColor: '#c9184a',
                borderColor: '#c9184a'}]} />
            <Text style={{fontSize: 16,
                color: '#978386'}}>{label}</Text>
        </TouchableOpacity>
    );
}