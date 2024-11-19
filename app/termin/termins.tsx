import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import ProfilePhoto from "@/components/ProfilePhoto";
import SubmitButton from "@/components/auth/SubmitButton";
import translations from "./../../translations.json";
import TerminLayout from "@/layouts/_terminLayout";
import Title from "@/components/Title";
import { AppointmentCard } from "@/components/AppointmentCard";
import { EmptyState } from "@/components/EmptyState";

export default function TerminsScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [appointments, setAppointments] = useState([
        new Date('2024-09-15T10:00:00'),
        new Date('2024-09-16T14:30:00'),
    ]);

    const removeAppointment = (appointmentToRemove: Date) => {
        setAppointments((prevAppointments) =>
            prevAppointments.filter(appointment => appointment.toISOString() !== appointmentToRemove.toISOString())
        );
    };

    return (
        <TerminLayout>
            <ProfilePhoto />
            <Title label={translations.termin.terminsTitle} />

            {appointments.length > 0 ? (
                <FlatList
                    data={appointments}
                    keyExtractor={(item) => item.toISOString()}
                    renderItem={({ item }) => (
                        <AppointmentCard appointment={item} onDelete={removeAppointment} />
                    )}
                />
            ) : (
                <EmptyState message={translations.termin.noTermins} />
            )}

            <SubmitButton
                onPress={() => navigation.navigate('patientType')}
                title={translations.termin.terminSubmin}
            />
        </TerminLayout>
    );
}
