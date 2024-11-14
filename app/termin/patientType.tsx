import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";

export default function Appointment({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [pregnant, setPregnant] = useState<string | null>(null);

    const handleOptionChange = (value: string) => {
        setPregnant(value);
    };

    const continueAppointment = () => {
        const route = pregnant === "true" ? "pregnant" : "unpregnant";
        navigation.navigate(route);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Запазете час</Text>
            <Text style={styles.subHeader}>Какво е състоянието Ви?</Text>

            <View style={styles.radioGroup}>
                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => handleOptionChange("true")}
                >
                    <View style={[
                        styles.radioCircle,
                        pregnant === "true" && styles.radioSelected
                    ]} />
                    <Text style={styles.radioLabel}>Бременна</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => handleOptionChange("false")}
                >
                    <View style={[
                        styles.radioCircle,
                        pregnant === "false" && styles.radioSelected
                    ]} />
                    <Text style={styles.radioLabel}>Небременна</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={continueAppointment}>
                <Text style={styles.buttonText}>Продължи</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 16,
        color: '#333',
    },
    subHeader: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
        color: '#555',
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 24,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3182CE',
        marginRight: 8,
    },
    radioSelected: {
        backgroundColor: '#3182CE',
    },
    radioLabel: {
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#3182CE',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500',
    },
});
