import { StyleSheet, View, Text } from "react-native";

export function SkipText({ text }: { text: string }) {
    return (
        <View style={styles.skipText}>
            <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    skipText: {
        marginTop: 16,
        alignItems: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
    },
});
