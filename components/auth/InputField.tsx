import React from 'react';
import { TextInput, View, Text, useColorScheme } from 'react-native';
import { useThemeColor } from "@/components/Themed";

export default function InputField({label, placeholder, value, onChangeText, secureTextEntry = false, ...rest}: any) {
    const primaryColor = useThemeColor({}, 'primary');
    const secondaryColor = useThemeColor({}, 'secondary');
    const theme = useColorScheme();

    return (
        <View style={{ marginVertical: 7 }}>
            <Text style={{ fontSize: 16, color: primaryColor, marginBottom: 4, marginLeft: 6 }}>
                {label}
            </Text>

            <View
                style={{
                    shadowColor: "#978386",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 8,
                    elevation: 5,
                    borderRadius: 30,
                    overflow: 'hidden',
                    backgroundColor: secondaryColor,
                }}
            >
                <TextInput
                    style={{
                        padding: 10,
                        borderRadius: 30,
                        fontSize: 16,
                        color: theme === 'dark' ? 'white' : '#2b000d',
                    }}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={theme === 'dark' ? "#978386" : "black"}
                    {...rest}
                />
            </View>
        </View>
    );
}
