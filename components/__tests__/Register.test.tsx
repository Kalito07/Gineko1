import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationProp } from '@react-navigation/native';
import translations from './../../translations.json';
import RegisterScreen from "@/app/auth/register";
import {RootStackParamList} from "@/lib/navigationTypes";

const mockNavigation = {
    navigate: jest.fn(),
} as unknown as NavigationProp<RootStackParamList>;

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => mockNavigation,
}));

describe('RegisterScreen', () => {
    it('renders correctly', () => {
        const { getByPlaceholderText, getByText } = render(
            <RegisterScreen navigation={mockNavigation} />
        );

        expect(getByPlaceholderText('example@example.com')).toBeTruthy();
        expect(getByText('Парола')).toBeTruthy();
        expect(getByText(translations.auth.signUp)).toBeTruthy();
        expect(getByText('-- или се регистрирайте с --')).toBeTruthy();
    });


    it('password mismatch error', async () => {
        const { getByPlaceholderText, getByText } = render(
            <RegisterScreen navigation={mockNavigation} />
        );

        fireEvent.changeText(getByPlaceholderText('example@example.com'), 'test@test.com');
        fireEvent.changeText(getByText('Парола'), 'password123');
        fireEvent.changeText(getByText('Потвърдете паролата'), 'password456');

        const submitButton = getByText(translations.auth.signUp);
        fireEvent.press(submitButton);

        await waitFor(() => {
            expect(getByText('Паролите не са еднакви!')).toBeTruthy();
        });
    });

    it('navigates on successful registration', async () => {
        const { getByPlaceholderText, getByText } = render(
            <RegisterScreen navigation={mockNavigation} />
        );

        fireEvent.changeText(getByPlaceholderText('example@example.com'), 'test@test.com');
        fireEvent.changeText(getByText('Парола'), 'password123');
        fireEvent.changeText(getByText('Потвърдете паролата'), 'password123');

        const submitButton = getByText(translations.auth.signUp);
        fireEvent.press(submitButton);

        await waitFor(() => {
            expect(mockNavigation.navigate).toHaveBeenCalledWith('tabNavigation');
        });
    });
});
