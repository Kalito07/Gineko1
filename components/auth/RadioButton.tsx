import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';

export default function RadioButtonComponent({ selected, onPress, label }: any) {
    return (
        <TouchableOpacity
            style={{flexDirection: 'row',
                alignItems: 'center'}}
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
                borderColor: '#978386',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 12}, selected && {backgroundColor: '#c9184a',
                borderColor: '#c9184a'}]} />
            <Text style={{fontSize: 16,
                color: '#978386'}}>{label}</Text>
        </TouchableOpacity>
    );
}