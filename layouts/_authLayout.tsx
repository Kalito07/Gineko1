import { FlatList, View } from 'react-native';
import React from 'react';
import {useThemeColor} from "@/components/Themed";

export default function AuthLayout({ children, style }: any) {
    const content = Array.isArray(children) ? children : [children];
    const backgroundColor = useThemeColor({}, 'background');
    return (
        <View
            style={[
                {
                    flex: 1,
                    backgroundColor: backgroundColor,
                    paddingHorizontal: 20,
                    paddingVertical: 30,
                },
                style,
            ]}
        >
            <FlatList
                data={content}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => item}
                contentContainerStyle={{
                    flexGrow: 1,
                }}
            />
        </View>
    );
}
