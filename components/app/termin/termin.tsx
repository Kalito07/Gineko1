import React, {useEffect} from 'react';
import {Text, useColorScheme} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import { RootStackParamList } from '@/lib/navigationTypes';
import AuthLayout from "@/layouts/_authLayout";
import translations from './../../translations.json';
import {useThemeColor} from "@/components/Themed";

export default function TerminScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const theme = useColorScheme();
    const titleColor = useThemeColor({},'primary');
    const backgroundColor = theme === 'dark' ? '#272727' : '#ffe0e5';
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
                backgroundColor: backgroundColor,
                borderRadius: 24,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
                shadowColor: '#978386', color: titleColor}}>{translations.termin.appointmentSaved}</Text>
        </AuthLayout>
    );
}
