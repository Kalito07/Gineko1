import React from 'react';
import { Modal, Text, View } from 'react-native';
import SubmitButton from '@/components/auth/SubmitButton';
import translations from "./../translations.json";

export default function Message({ visible, onClose }:any) {
    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={{flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                <View style={{width: '80%',
                    padding: 16,
                    backgroundColor: '#ffe0e5',
                    borderRadius: 24,
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    elevation: 5,
                    shadowColor: '#978386',
                    alignItems: 'center'}}>
                    <Text style={{fontSize: 24,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: 15,
                        color: '#590d22'}}>{translations.termin.errorMessage}</Text>
                    <SubmitButton onPress={onClose} title={translations.termin.ok} />
                </View>
            </View>
        </Modal>
    );
}