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
        <View style={{ marginVertical: 6 }}>
            <Text style={styles.label}>{label}</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
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

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: '#978386',
        marginBottom: 3,
        marginLeft: 6,
    },
    inputContainer: {
        shadowColor: '#978386',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 30,  // For rounded corners of the container
        overflow: 'hidden',  // Ensures that shadow does not spill outside the rounded corners
        backgroundColor: 'white',  // Make sure the container has a background
    },
    input: {
        padding: 10,
        borderRadius: 30, // Match border radius to make the corners round
        fontSize: 16,
    },
});
