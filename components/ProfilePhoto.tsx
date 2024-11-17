import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function ProfilePhoto({ onClick }: { onClick: () => void }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onClick}>
            <Image
                // source={{ uri: 'https://via.placeholder.com/40' }} // Replace with user's image URL
                style={styles.image}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 1,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FF6666',
    },
});
