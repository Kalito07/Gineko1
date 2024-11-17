import { View } from "react-native";
import {ReactNode} from "react";

export default function TerminLayout({ children }: { children: ReactNode }): any {
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            padding: 20,
            backgroundColor: '#FFEADD',
        }}>{children}</View>
    );
}