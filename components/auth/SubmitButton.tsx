import { Text, TouchableOpacity} from "react-native";
import React from "react";

export default function SubmitButton ({ onPress, title }:any)
{ return(
    <TouchableOpacity style={{backgroundColor: '#c9184a',
        paddingVertical: 12,
        borderRadius: 30,
        alignItems: 'center', marginTop:24, shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,shadowColor:'#978386', paddingHorizontal:10}} onPress={onPress} >
        <Text style={{            color: 'white',
            fontSize: 16,
            fontWeight: '500'}}>{title}</Text>
    </TouchableOpacity>
);
}