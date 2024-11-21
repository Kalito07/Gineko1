import React, { useEffect } from 'react';
import {Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import { RootStackParamList } from '@/lib/navigationTypes';
import AuthLayout from "@/layouts/_authLayout";
import translations from './../../translations.json';

export default function TerminScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('tabNavigation');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <AuthLayout>
            <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginVertical:310, paddingVertical:32,
                paddingHorizontal: 16,
                backgroundColor: '#ffe0e5',
                borderRadius: 24,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
                shadowColor: '#978386', color: '#590d22'}}>{translations.termin.appointmentSaved}</Text>
        </AuthLayout>
    );
}
