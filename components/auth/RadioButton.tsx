import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

type RadioButtonProps = {
    selected: boolean;
    onPress: () => void;
    label: string;
};

export default function RadioButtonComponent({ selected, onPress, label }: RadioButtonProps) {
    return (
        <TouchableOpacity
            style={{flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 8}}
            onPress={onPress}
            accessible={true}
            accessibilityLabel={label}
            accessibilityRole="radio"
            accessibilityState={{ selected }}
        >
            <View style={[{height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: '#ccc',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10}, selected && {backgroundColor: '#3182CE',
                borderColor: '#3182CE'}]} />
            <Text style={{fontSize: 16,
                color: '#333'}}>{label}</Text>
        </TouchableOpacity>
    );
}