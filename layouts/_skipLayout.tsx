import {ScrollView, View} from "react-native";
import {ReactNode} from "react";

export default function _skipLayout({ children }: { children: ReactNode }) {
    return(
        <View style={{flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'}}><ScrollView contentContainerStyle={{flexGrow: 1,
            justifyContent: 'center'}}>{children}</ScrollView></View>
    );
}