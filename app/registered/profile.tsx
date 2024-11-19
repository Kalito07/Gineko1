import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import InputField from "@/components/auth/InputField";
import translations from "@/translations.json"
import Title from "@/components/Title";

export default function ProfileScreen () {
    return (
        <View style={{flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            backgroundColor: '#fff6f9'}}>
            <Title label={translations.termin.profile}/>
            <Image style={{height:60, width:60}}/>
            <InputField label={translations.auth.name} />
            <InputField label={translations.auth.email}/>
            <InputField label={translations.termin.phone} placeholder="+1 111 111 111"/>
        </View>
    );
};

const styles = StyleSheet.create({

    avatar: {
        width: 96,
        height: 96,
        backgroundColor: '#d1d5db',
        borderRadius: 48,
        marginTop: 16,
    },
    infoContainer: {
        width: '80%',
        marginTop: 32,
    },
    infoBox: {
        backgroundColor: '#e5e7eb',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 12,
    },
    label: {
        fontWeight: 'bold',
    },
});
