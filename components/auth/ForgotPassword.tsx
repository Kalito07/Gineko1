import {TouchableOpacity, Text} from "react-native";
import translations from "./../../translations.json"

export default function ForgotPassword(){
    return(
    <TouchableOpacity
        style={{alignItems: 'flex-end',
            marginVertical: 5,
            marginRight: 10}}
        //onPress={() => navigation.navigate('forgotPassword')}
    >
        <Text style={{ color: 'black',
            fontSize: 14,
            textDecorationLine: 'underline'}}>{translations.auth.forgotPassword}</Text>
    </TouchableOpacity>);
}
