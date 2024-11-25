import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationProp } from '@react-navigation/native';
import LoginScreen from './../../app/auth/login';
import translations from './../../translations.json';
import { RootStackParamList } from './../../lib/navigationTypes';

// Mock the navigation prop
const mockNavigation = {
    navigate: jest.fn(),
} as unknown as NavigationProp<RootStackParamList>;

describe('LoginScreen', () => {
    it('components correct', () => {
        const { getByText, getByPlaceholderText } = render(<LoginScreen navigation={mockNavigation} />);

        expect(getByText(translations.auth.loginTitle)).toBeTruthy();

        expect(getByPlaceholderText('example@example.com')).toBeTruthy();

        expect(getByPlaceholderText('********')).toBeTruthy();

        expect(getByText(translations.auth.logIn)).toBeTruthy();

        expect(getByText(translations.auth.signUp)).toBeTruthy();
    });

    it('user input and login correct', () => {
        const { getByPlaceholderText, getByText } = render(<LoginScreen navigation={mockNavigation} />);

        const emailInput = getByPlaceholderText('example@example.com');
        const passwordInput = getByPlaceholderText('********');
        const loginButton = getByText(translations.auth.logIn);

        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'password123');

        fireEvent.press(loginButton);

        expect(mockNavigation.navigate).toHaveBeenCalledWith('termins');
    });

    it('without credentials', () => {
        const { getByText } = render(<LoginScreen navigation={mockNavigation} />);
        const loginButton = getByText(translations.auth.logIn);

        fireEvent.press(loginButton);

    });

    it('navigates to the register screen', () => {
        const { getByText } = render(<LoginScreen navigation={mockNavigation} />);
        const signUpButton = getByText(translations.auth.signUp);

        fireEvent.press(signUpButton);

        expect(mockNavigation.navigate).toHaveBeenCalledWith('register');
    });
});
