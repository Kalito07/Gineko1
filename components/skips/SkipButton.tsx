import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import translations from "./../../translations.json";

export function SkipButton({ navigation, targetScreen }: { navigation: NavigationProp<RootStackParamList>; targetScreen: any }) {
    return (
        <View style={styles.skipButtons}>
            <TouchableOpacity onPress={() => navigation.navigate(targetScreen)}>
                <Text style={styles.skipText}>{translations.skips.skipButton}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate(targetScreen)}>
                <Text style={styles.nextButtonText}>→</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    skipButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        width: '100%',
        paddingHorizontal: 16,
    },
    skipText: {
        color: '#000',
        fontSize: 16,
    },
    skipButton: {
        backgroundColor: '#000',
        borderRadius: 24,
        padding: 12,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
