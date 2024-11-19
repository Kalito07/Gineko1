import React from 'react';
import { Text } from 'react-native';

export function EmptyState({ message }: any) {
    return (
        <Text style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#978386',
            marginVertical: 20,
        }}>
            {message}
        </Text>
    );
}