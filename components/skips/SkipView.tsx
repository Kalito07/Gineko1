import { View, Dimensions } from "react-native";
import React from "react";
import {useThemeColor} from "@/components/Themed";

export default function SkipView({ children }: { children: React.ReactNode }) {
    const backgroundColor = useThemeColor({},"secondary");
    return (
        <View style={{
                backgroundColor: backgroundColor, borderTopRightRadius: 50, borderTopLeftRadius: 50, padding: 10,
                shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 6, elevation: 5,
                shadowColor: "#978386", width: "100%", height: Dimensions.get("window").height * 0.35}}>
            {children}
        </View>
    );
}