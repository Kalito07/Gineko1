import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import ProfilePhoto from "@/components/ProfilePhoto";
import SubmitButton from "@/components/auth/SubmitButton";
import translations from "./../../translations.json";

export default function TerminsScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [appointments, setAppointments] = useState([
        new Date('2024-09-15T10:00:00'),
        new Date('2024-09-16T14:30:00'),
    ]);

    const handleProfilePhoto = () => {
        navigation.navigate('profile');
    }

    const removeAppointment = (appointmentToRemove: Date) => {
        setAppointments((prevAppointments) =>
            prevAppointments.filter(appointment => appointment.toISOString() !== appointmentToRemove.toISOString())
        );
    };

    return (
        <View style={{flex: 1,
            padding: 20,
            backgroundColor: '#fff6f9'}}>
            <ProfilePhoto onClick={() => handleProfilePhoto()} />
            <Text style={{fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 20,
                color: '#590d22'}}>Запазени часове</Text>

            {appointments.length > 0 ? (
                <View>

                    <FlatList
                        data={appointments}
                        keyExtractor={(item) => item.toISOString()}
                        renderItem={({ item }) => (
                            <View style={{flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 12,
                                borderBottomWidth: 1,
                                borderColor: '#FF8989',
                                alignItems: 'center'}}>
                                <Text style={{fontSize: 16,
                                    fontWeight: '500',
                                    color: '#FF6666'}}>
                                    {item.toLocaleDateString('bg-BG')}
                                </Text>
                                <Text style={{fontSize: 16,
                                    fontWeight: '500',
                                    color: '#FF6666'}}>
                                    {item.toLocaleTimeString('bg-BG', { hour: '2-digit', minute: '2-digit' })}
                                </Text>
                                <SubmitButton onPress={()=>removeAppointment(item)} title={translations.termin.delete}/>
                            </View>
                        )}
                    />
                </View>
            ) : (
                <View>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16,
                        color: '#FF8989',
                        marginVertical: 20
                    }}>{translations.termin.noTermins}</Text>
                </View>
            )}
<SubmitButton onPress={() => navigation.navigate('patientType')} title={translations.termin.terminSubmin} />
        </View>
    );
}