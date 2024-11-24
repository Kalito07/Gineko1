import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import SubmitButton from "@/components/auth/SubmitButton";
import translations from "./../translations.json";

export function AppointmentCard({ appointment, onDelete }: any) {
    const theme = useColorScheme();
    const textColor = theme === 'dark' ? 'white' : '#978386';
    const backgroundColor = theme === 'dark' ? '#272727' : '#ffe0e5';

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 12,
            paddingHorizontal: 16,
            backgroundColor: backgroundColor,
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
                    color: textColor,
                }}>
                    {appointment.toLocaleDateString('bg-BG')}
                </Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: textColor,
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
