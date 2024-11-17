import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/lib/navigationTypes";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import translations from "./../../translations.json";

export function SkipButton({ navigation, targetScreen }: { navigation: NavigationProp<RootStackParamList>; targetScreen: any }) {
    return (
        <View style={styles.container}>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate(targetScreen)}>
                    <Text style={styles.skipText}>{translations.skips.skipButton}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => navigation.navigate(targetScreen)}>
                    <Text style={styles.nextButtonText}>→</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Take full screen height
        justifyContent: 'flex-end', // Align items at the bottom
        width: '100%',
        paddingHorizontal: 20,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20, // Add margin to give some space from the bottom
    },
    skipText: {
        color: 'black',
        fontSize: 16,
    },
    nextButton: {
        backgroundColor: 'black',
        borderRadius: 35,
        paddingTop: 8,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    nextButtonText: {
        color: '#FFF',
        fontSize: 20,
    }
});
