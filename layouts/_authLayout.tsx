import { View } from 'react-native';
import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <View style={{flex: 1,
            backgroundColor: '#fff6f9',
            padding: 20}}>
                {children}
        </View>
    );
}