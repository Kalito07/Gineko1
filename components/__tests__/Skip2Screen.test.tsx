import React from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import { NavigationProp } from '@react-navigation/native';
import translations from './../../translations.json';
import { RootStackParamList } from "@/lib/navigationTypes";
import Skip2Screen from "@/app/skips/skip2";

const mockNavigation = {
    navigate: jest.fn(),
} as unknown as NavigationProp<RootStackParamList>;

describe('Skip2Screen', () => {
    let getByTestId: RenderAPI['getByTestId'];
    let getByText: RenderAPI['getByText'];

    beforeEach(() => {
        const rendered = render(<Skip2Screen navigation={mockNavigation} />);
        getByTestId = rendered.getByTestId;
        getByText = rendered.getByText;
    });

    it('image correct', () => {
        const image = getByTestId('skip-image');
        expect(image).toBeTruthy();
    });

    it('correct skip text', () => {
        const skipText = getByText(translations.skips.skip2Text);
        expect(skipText).toBeTruthy();
    });

    it('navigates to the next screen', () => {
        const skipButton = getByTestId('skip-button');
        fireEvent.press(skipButton);

        expect(mockNavigation.navigate).toHaveBeenCalledWith('skip3');
        expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    });
});
