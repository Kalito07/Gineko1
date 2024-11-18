import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import ProfilePhoto from "@/components/ProfilePhoto";
import SubmitButton from "@/components/auth/SubmitButton";
import translations from "./../../translations.json";
import TerminLayout from "@/layouts/_terminLayout";
import Title from "@/components/Title";

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
            <Title label={translations.termin.terminsTitle}/>

            {appointments.length > 0 ? (
                <FlatList
                    data={appointments}
                    keyExtractor={(item) => item.toISOString()}
                    renderItem={({ item }) => (
                        <View style={{flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 12,
                            paddingHorizontal: 16,
                            backgroundColor: '#ffe0e5',
                            borderRadius: 24,
                            marginBottom: 16, shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.3,
                            shadowRadius: 6,
                            elevation: 5, shadowColor:'#978386'}}>
                            <View>
                                <Text style={{ fontSize: 16,
                                    fontWeight: '500',
                                    color: '#978386'}}>
                                    {item.toLocaleDateString('bg-BG')}
                                </Text>
                                <Text style={{fontSize: 16,
                                    fontWeight: '500',
                                    color: '#978386'}}>
                                    {item.toLocaleTimeString('bg-BG', { hour: '2-digit', minute: '2-digit' })}
                                </Text>
                            </View>
                            <SubmitButton
                                onPress={() => removeAppointment(item)}
                                title={translations.termin.delete}
                                style={{marginLeft: 10}}
                            />
                        </View>
                    )}
                />
            ) : (
                <Text style={{textAlign: 'center',
                    fontSize: 16,
                    color: '#978386',
                    marginVertical: 20}}>
                    {translations.termin.noTermins}
                </Text>
            )}
<SubmitButton onPress={() => navigation.navigate('patientType')} title={translations.termin.terminSubmin} />
            </TerminLayout>
    );
}