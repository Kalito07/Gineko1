import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

export default function InputField({
                                       label,
                                       placeholder,
                                       value,
                                       onChangeText,
                                       secureTextEntry = false,
                                       ...rest
                                   }: any) {
    return (
        <View style={{ marginVertical: 7 }}>
            <Text style={{fontSize: 16,
                color: '#978386',
                marginBottom: 4,
                marginLeft: 6}}>{label}</Text>

            <View style={{shadowColor: '#978386',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 8,
                elevation: 5,
                borderRadius: 30,
                overflow: 'hidden',
                backgroundColor: 'white'}}>
                <TextInput
                    style={{padding: 10,
                        borderRadius: 30,
                        fontSize: 16}}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    {...rest}
                />
            </View>
        </View>
    );
}