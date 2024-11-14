import {StyleSheet, Text} from "react-native";
import React from "react";

export default function Or({text}:any){
    return (
        <Text style={styles.orText}>- {text} -</Text>
    );
}

const styles = StyleSheet.create({
    orText: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#fff0f3',
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 16,
        color: '#999',
    }
});