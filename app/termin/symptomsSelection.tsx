import React, { useState } from 'react';
import {View, Text, useColorScheme} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/lib/navigationTypes';
import SubmitButton from '@/components/auth/SubmitButton';
import translations from './../../translations.json';
import AuthLayout from "@/layouts/_authLayout";
import Message from '@/components/Message';

type Symptoms = {
    [key: string]: any;
};

export default function SymptomsSelectionScreen({ navigation, route }: { navigation: NavigationProp<RootStackParamList>; route: RouteProp<RootStackParamList, 'symptoms'>; }) {
    const theme = useColorScheme();
    const textColor = theme === 'dark' ? 'white' : '#978386';
    const backgroundColor = theme === 'dark' ? '#272727' : '#ffe0e5';

    const [pregnant, setPregnant] = useState<boolean>(route.params?.isPregnant ?? true);
    const symptomsList = pregnant ? translations.pregnant : translations.unpregnant;

    const initialSymptoms = Object.keys(symptomsList).reduce((acc, key) => {
        if (key !== "unpregnantTermin" && key !== "pregnantTermin" && key !== "profilactica" && key !== "typeTermin") {
            acc[key] = false;
        }
        return acc;
    }, {} as Symptoms);

    const [symptoms, setSymptoms] = useState<Symptoms>(initialSymptoms);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSymptomChange = (symptom: keyof Symptoms) => {
        setSymptoms((prevSymptoms) => ({
            ...prevSymptoms,
            [symptom]: !prevSymptoms[symptom],
        }));
    };

    const saveSymptoms = () => {
        const selectedSymptoms = Object.values(symptoms).some(value => value === true);

        if (!selectedSymptoms) {
            setModalMessage(translations.termin.errorMessage);
            setModalVisible(true);
        } else {
            navigation.navigate('termin');
        }
    };

    return (
        <AuthLayout>
            <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, color: '#590d22' }}>
                {translations.termin.symptoms}
            </Text>
            <View style={{
                paddingTop: 12,
                paddingBottom: 9,
                paddingHorizontal: 16,
                backgroundColor: backgroundColor,
                borderRadius: 24,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 5,
                shadowColor: '#978386'
            }}>
                {Object.keys(symptomsList).map((symptom) => {
                    return (
                        <View key={symptom} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 9 }}>
                            <Checkbox
                                status={symptoms[symptom] ? 'checked' : 'unchecked'}
                                onPress={() => handleSymptomChange(symptom as keyof Symptoms)}
                                color="#590d22"
                            />
                            <Text style={{ fontSize: 16, marginLeft: 2, color:textColor }}>{symptomsList[symptom]}</Text>
                        </View>
                    );
                })}
            </View>
            <SubmitButton onPress={saveSymptoms} title={translations.termin.save} />

            <Message
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                label={translations.termin.errorMessage}
            />
        </AuthLayout>
    );
}
