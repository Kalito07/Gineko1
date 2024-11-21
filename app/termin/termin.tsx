import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import { RootStackParamList } from '@/lib/navigationTypes';
import { useRoute } from '@react-navigation/native';
import AuthLayout from "@/layouts/_authLayout";

export default function TerminScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const route = useRoute<RouteProp<RootStackParamList, 'termin'>>();
    const { visitType, symptoms, message } = route.params || {};

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('tabNavigation');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    if (!visitType || !symptoms || !message) {
        return (
            <View style={styles.container}>
            </View>
        );
    }

    return (
        <AuthLayout>
            <Text style={styles.header}>{message}</Text>
            <Text style={styles.details}>Visit Type: {visitType}</Text>
            <Text style={styles.details}>Symptoms: {JSON.stringify(symptoms)}</Text>
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFEADD',
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20,
        color: '#FF6666',
    },
    details: {
        fontSize: 18,
        marginBottom: 10,
        color: '#FF8989',
    },
});
