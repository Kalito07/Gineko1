import { View } from "react-native";
import React from "react";

export default function SkipView({ children }: { children: React.ReactNode }) {
    return <View style={{
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical:10,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,shadowColor:'#978386',
        width: '100%',
        height:290
    }}>{children}</View>;
}