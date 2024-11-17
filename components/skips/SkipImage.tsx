import { View, Image, ImageProps } from "react-native";

export function SkipImage(props: ImageProps) {
    return (
        <View style={{flex: 1,
            width: '100%',
            alignItems: 'center'}}>
        <Image {...props} style={{width: '100%',
            height: 500,
            resizeMode: 'cover'}} />
        </View>
    );
}