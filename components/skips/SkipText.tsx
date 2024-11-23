import { View, Text } from "react-native";
import { useThemeColor } from "@/components/Themed";

export function SkipText({ text }: { text: string }) {
    const textColor = useThemeColor({}, "primary");

    return (
        <View style={{paddingHorizontal: 20, paddingVertical: 15,}}>
            <Text style={{fontSize: 32, fontWeight: "bold", color: textColor, textAlign: "left"}}>
                {text}
            </Text>
        </View>
    );
}
