import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";

export default function ViewAppointments({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [appointments, setAppointments] = useState([
        new Date('2024-09-15T10:00:00'),
        new Date('2024-09-16T14:30:00'),
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Запазени часове</Text>

            {appointments.length > 0 ? (
                <View>
                    <Text style={styles.subHeader}>Вашите запазени часове:</Text>
                    <FlatList
                        data={appointments}
                        keyExtractor={(item) => item.toISOString()}
                        renderItem={({ item }) => (
                            <View style={styles.appointmentRow}>
                                <Text style={styles.dateText}>
                                    {item.toLocaleDateString('bg-BG')}
                                </Text>
                                <Text style={styles.timeText}>
                                    {item.toLocaleTimeString('bg-BG', { hour: '2-digit', minute: '2-digit' })}
                                </Text>
                            </View>
                        )}
                    />
                </View>
            ) : (
                <View>
                    <Text style={styles.noAppointmentsText}>Нямате запазени часове</Text>
                </View>
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('patientType')}
            >
                <Text style={styles.buttonText}>Запази нов час</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    appointmentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    dateText: {
        fontSize: 16,
    },
    timeText: {
        fontSize: 16,
    },
    noAppointmentsText: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 20,
        color: '#555',
    },
    button: {
        backgroundColor: '#3182CE',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500',
    },
});
