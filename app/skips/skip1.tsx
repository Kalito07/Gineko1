import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from "@/lib/navigationTypes";
import { SkipImage } from "@/components/skips/SkipImage";
import { SkipText } from "@/components/skips/SkipText";
import translations from './../../translations.json';
import { SkipButton } from "@/components/skips/SkipButton";
import SkipLayout from "@/layouts/SkipLayout";

const Skip1Screen = ({ navigation }: { navigation: NavigationProp<RootStackParamList> }) => {
    return (
        <SkipLayout>
            <SkipImage source={require('@/assets/images/skip1.jpg')} alt="Illustration of a woman with headphones working on a laptop"/>
            <SkipText text={translations.skips.skip1Text} />
            <SkipButton navigation={navigation} targetScreen="skip2" />
        </SkipLayout>
    );
};

export default Skip1Screen;