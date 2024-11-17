import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";

export default function TerminsScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
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
        backgroundColor: '#FFEADD', // Light cream background
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#FF6666', // Vibrant red for main header
    },
    subHeader: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color: '#FCAEAE', // Soft pink for subheaders
        marginBottom: 15,
    },
    appointmentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#FF8989', // Medium pink border
    },
    dateText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FF6666', // Vibrant red for text
    },
    timeText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#FF6666',
    },
    noAppointmentsText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#FF8989', // Medium pink for no appointments text
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#FF6666', // Vibrant red for the button
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: '#FFEADD', // Light cream for button text
        fontSize: 16,
        fontWeight: '600',
    },
});
