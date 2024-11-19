import React from 'react';
import { View, Text } from 'react-native';
import SubmitButton from "@/components/auth/SubmitButton";
import translations from "./../translations.json";

export function AppointmentCard({ appointment, onDelete }: any) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 12,
            paddingHorizontal: 16,
            backgroundColor: '#ffe0e5',
            borderRadius: 24,
            marginBottom: 16,
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 5,
            shadowColor: '#978386',
        }}>
            <View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#978386',
                }}>
                    {appointment.toLocaleDateString('bg-BG')}
                </Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#978386',
                }}>
                    {appointment.toLocaleTimeString('bg-BG', { hour: '2-digit', minute: '2-digit' })}
                </Text>
            </View>
            <SubmitButton
                onPress={() => onDelete(appointment)}
                title={translations.termin.delete}
                style={{ marginLeft: 10 }}
            />
        </View>
    );
}