import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "@/lib/navigationTypes";
import { SkipImage } from "@/components/skips/SkipImage";
import { SkipText } from "@/components/skips/SkipText";
import translations from './../../translations.json';
import { SkipButton } from "@/components/skips/SkipButton";
import _skipLayout from "@/layouts/_skipLayout";
import SkipView from "@/components/skips/SkipView";

export default function Skip1Screen({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    return (
        <_skipLayout>
                <SkipImage
                    source={require('@/assets/images/skip1.jpg')}
                    alt="Illustration of a woman with headphones working on a laptop"
                />
                <SkipView>
                    <SkipText text={translations.skips.skip1Text} />
                    <SkipButton navigation={navigation} targetScreen="skip2" />
                </SkipView>
        </_skipLayout>
    );
}