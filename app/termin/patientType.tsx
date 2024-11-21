import React, { useState } from 'react';
import { View, Alert, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import translations from "./../../translations.json";
import RadioButtonComponent from "@/components/auth/RadioButton";
import SubmitButton from "@/components/auth/SubmitButton";
import Title from "@/components/Title";
import AuthLayout from "@/layouts/_authLayout";
import Message from "@/components/Message";

export default function PatientTypeScreen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    const [pregnant, setPregnant] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState<boolean>(false);  // State for custom modal visibility

    const handleOptionChange = (value: string) => {
        setPregnant(value);
    };

    const continueAppointment = () => {
        if (!pregnant) {
            setModalVisible(true);
            return;
        }
        const route = pregnant === "true" ? "pregnant" : "unpregnant";
        navigation.navigate(route);
    };

    return (
        <AuthLayout style={{paddingVertical:120}}>
            <Title label={translations.termin["state?"]} />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical:10}}>
                <RadioButtonComponent
                    label={translations.termin.pregnant}
                    selected={pregnant === "true"}
                    onPress={() => handleOptionChange("true")}
                />
                <RadioButtonComponent
                    label={translations.termin.unpregnant}
                    selected={pregnant === "false"}
                    onPress={() => handleOptionChange("false")}
                />
            </View>

            <SubmitButton onPress={continueAppointment} title={translations.termin.save} />
<Message  visible={modalVisible} onClose={setModalVisible} message={translations.termin.errorMessage} />

        </AuthLayout>
    );
}