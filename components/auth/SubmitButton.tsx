import { Text, TouchableOpacity} from "react-native";
import React from "react";

export default function SubmitButton ({ onPress, title, text }:any)
{ return(
    <TouchableOpacity style={{backgroundColor: '#c9184a',
        paddingVertical: 12,
        borderRadius: 30,
        alignItems: 'center', marginTop:20, paddingHorizontal:10}} onPress={onPress}>
        <Text style={{            color: 'white',
            fontSize: 16,
            fontWeight: '500'}}>{title}</Text>
    </TouchableOpacity>
);
}