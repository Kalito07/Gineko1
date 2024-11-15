import React from 'react';
import { TextInput, View, Text } from 'react-native';

export default function InputField({
                                       label,
                                       placeholder,
                                       value,
                                       onChangeText,
                                       secureTextEntry = false,
                                       ...rest
                                   }: any) {
    return (
        <View style={{marginVertical: 16}}>
            <Text style={{fontSize: 16,
                color: '#333',
                marginBottom: 4}}>{label}</Text>
            <TextInput
                style={{padding: 10,
                    borderWidth: 1,
                    borderColor: '#ffb3c1',
                    borderRadius: 8,
                    fontSize: 16}}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                {...rest}
            />
        </View>
    );
}