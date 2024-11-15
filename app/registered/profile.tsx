import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from "@/components/auth/InputField";
import translations from "@/translations.json"

export default function Profile () {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.surname}>Surname</Text>
                <View style={styles.avatar} />
            </View>
            <InputField label={translations.auth.email} placeholder="example@gmail.com" /> //TODO: MAKE IT TO THE END
            <View style={styles.infoContainer}>
                <View style={styles.infoBox}>
                    <Text style={styles.label}>Mail:</Text>
                    <Text>example@gmail.com</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.label}>Phone:</Text>
                    <Text>+1 111 111 111</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text style={styles.label}>Country:</Text>
                    <Text>City, Country</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    header: {
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    surname: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    avatar: {
        width: 96,
        height: 96,
        backgroundColor: '#d1d5db',
        borderRadius: 48,
        marginTop: 16,
    },
    infoContainer: {
        width: '80%',
        marginTop: 32,
    },
    infoBox: {
        backgroundColor: '#e5e7eb',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 12,
    },
    label: {
        fontWeight: 'bold',
    },
});
