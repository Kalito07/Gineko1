import {StyleSheet, View} from "react-native";
import {ReactNode} from "react";

export default function SkipLayout({ children }: { children: ReactNode }) {
    return(
        <View style={styles.container}>{children}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        paddingHorizontal: 16,
    }
});