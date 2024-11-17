import { View, Text } from "react-native";

export function SkipText({ text }: { text: string }) {
    return (
        <View style={{paddingHorizontal: 20,
             shadowOpacity: 0.5, paddingVertical: 10}}>
            <Text style={{fontSize: 24,
                fontWeight: 'bold',
                color: 'black',
                textAlign: 'left'}}>{text}</Text>
        </View>
    );
}