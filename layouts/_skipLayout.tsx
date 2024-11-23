import { ScrollView, View } from "react-native";
import React, { ReactNode } from "react";
import { useThemeColor } from "@/components/Themed";

export default function _skipLayout({ children }: { children: ReactNode }) {
    const backgroundColor = useThemeColor({}, "background");

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor }}>
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: "center",}}>
                {children}
            </ScrollView>
        </View>
    );
}
