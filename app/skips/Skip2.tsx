import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/lib/navigationTypes';
import { useNavigation } from '@react-navigation/native';

type Skip2ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Skip2'>;

export default function Skip2Screen() {
    const navigation = useNavigation<Skip2ScreenNavigationProp>();

    return (
        <View>
            <Text>Втори екран</Text>
            <Button
                title="Към Третия Екран"
                onPress={() => navigation.navigate('Skip3')}
            />
        </View>
    );
}
