import { View } from "react-native";

export default function SkipView({ children }: { children: React.ReactNode }) {
    return (
        <View style={{ borderTopRightRadius: 50, borderTopLeftRadius:50, backgroundColor: '#fff0f3' }}>
            {children}
        </View>
    );
}
