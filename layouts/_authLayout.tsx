import { View } from 'react-native';

export default function AuthLayout({ children, style }: any) {
    return (
        <View style={[{
            flex: 1,
            backgroundColor: '#fff6f9',
            paddingHorizontal: 20,
            paddingVertical: 30
        }, style]}>
            {children}
        </View>
    );
}
