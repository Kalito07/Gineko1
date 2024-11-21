import { View, Text } from "react-native";

export function SkipText({ text }: { text: string }) {
    return (
        <View style={{paddingHorizontal: 20,
              paddingVertical: 15}}>
            <Text style={{fontSize: 32,
                fontWeight: 'bold',
                color: '#590d22',
                textAlign: 'left'}}>{text}</Text>
        </View>
    );
}