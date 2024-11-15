import { StyleSheet, View, Text } from "react-native";
import {hidden} from "colorette";

export function SkipText({ text }: { text: string }) {
    return (
        <View>
            <Text style={{fontSize:24, fontWeight:'bold', color:'#590d22', textAlign: 'left', marginTop:60, padding:10}}>{text}</Text>
        </View>
    );
}