import { Text, useColorScheme } from "react-native";
import React from "react";

export default function Or({ text }: any) {
    const theme = useColorScheme();
    const textColor = theme === 'dark' ? '#978386' : '#590d22';

    return (
        <Text
            style={{
                flex: 1,
                justifyContent: 'center',
                fontSize: 15,
                textAlign: 'center',
                marginVertical: 20,
                color: textColor,
            }}
        >
            -- {text} --
        </Text>
    );
}
