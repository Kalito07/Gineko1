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
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                {...rest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        fontSize: 16,
    },
});
