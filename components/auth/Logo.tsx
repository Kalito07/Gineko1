import { Image, useColorScheme, View } from "react-native";
import React from "react";

export default function Logo() {
    const theme = useColorScheme();
    const src =
        theme === "dark"
            ? require("../../assets/images/logoDark.png")
            : require("../../assets/images/logo.png");

    return (
        <View style={{ marginHorizontal: "auto", marginVertical: -14 }}>
            <Image
                source={src}
                style={{ height: 150, width: 220 }}
            />
        </View>
    );
}
