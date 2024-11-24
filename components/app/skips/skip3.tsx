import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "@/lib/navigationTypes";
import { SkipImage } from "@/components/skips/SkipImage";
import { SkipText } from "@/components/skips/SkipText";
import translations from './../../translations.json';
import { SkipButton } from "@/components/skips/SkipButton";
import _skipLayout from "@/layouts/_skipLayout";
import SkipView from "@/components/skips/SkipView";

export default function Skip3Screen ({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
    return (
        <_skipLayout>
            <SkipImage source={require('@/assets/images/skip3.png')} alt="Skip 3" testID="skip-image"/>
            <SkipView>
            <SkipText text={translations.skips.skip3Text} />
            <SkipButton navigation={navigation} targetScreen="login" />
                </SkipView>
        </_skipLayout>
    );
};