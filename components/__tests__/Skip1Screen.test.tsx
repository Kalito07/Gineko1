import React from 'react';
import { render, fireEvent, RenderAPI } from '@testing-library/react-native';
import { NavigationProp } from '@react-navigation/native';
import translations from './../../translations.json';
import { RootStackParamList } from "@/lib/navigationTypes";
import Skip1Screen from "@/app/skips/skip1";

const mockNavigation = {
    navigate: jest.fn(),
} as unknown as NavigationProp<RootStackParamList>;

describe('Skip1Screen', () => {
    let getByTestId: RenderAPI['getByTestId'];
    let getByText: RenderAPI['getByText'];

    beforeEach(() => {
        const rendered = render(<Skip1Screen navigation={mockNavigation} />);
        getByTestId = rendered.getByTestId;
        getByText = rendered.getByText;
    });

    it('image correct', () => {
        const image = getByTestId('skip-image');
        expect(image).toBeTruthy();
    });

    it('correct skip text', () => {
        const skipText = getByText(translations.skips.skip1Text);
        expect(skipText).toBeTruthy();
    });

    it('navigates to the next screen', () => {
        const skipButton = getByTestId('skip-button');
        fireEvent.press(skipButton);

        expect(mockNavigation.navigate).toHaveBeenCalledWith('skip2');
        expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
    });
});
