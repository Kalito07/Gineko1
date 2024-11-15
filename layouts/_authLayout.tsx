import {ScrollView, View} from "react-native";
import {ReactNode} from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return(
        <View style={{
            backgroundColor: 'white', padding:20}}>
            <ScrollView contentContainerStyle={{flexGrow: 1,
                justifyContent: 'center'}}>
            {children}
                </ScrollView>
        </View>
    );
}