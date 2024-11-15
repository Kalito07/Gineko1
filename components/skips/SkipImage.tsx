import { View, Image, StyleSheet, ImageProps, Dimensions } from "react-native";

export function SkipImage(props: ImageProps) {
    return (
        <View style={styles.skipImageContainer}>
            <Image {...props} style={styles.skipImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    skipImageContainer: {
        flex: 1,
        width: '100%'

    },
    skipImage: {
        width: "100%",
        height: 500,
        resizeMode: 'cover',
    },
});
