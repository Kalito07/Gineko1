import { ScrollView, View } from "react-native";
import React, { ReactNode } from "react";

export default function _skipLayout({ children }: { children: ReactNode }) {
    return (
        <View style={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff6f9'}}>
            <ScrollView contentContainerStyle={{flexGrow: 1,
                justifyContent: 'center'}}>
                {children}
            </ScrollView>
        </View>
    );
}