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
    it('renders all components correctly', () => {
        const { getByText, getByPlaceholderText } = render(<LoginScreen navigation={mockNavigation} />);

        // Check if the title is displayed
        expect(getByText(translations.auth.loginTitle)).toBeTruthy();

        // Check if the email input field is rendered
        expect(getByPlaceholderText('example@example.com')).toBeTruthy();

        // Check if the password input field is rendered
        expect(getByPlaceholderText('********')).toBeTruthy();

        // Check if the login button is rendered
        expect(getByText(translations.auth.logIn)).toBeTruthy();

        // Check if the signup redirection is rendered
        expect(getByText(translations.auth.signUp)).toBeTruthy();
    });

    it('handles user input and login correctly', () => {
        const { getByPlaceholderText, getByText } = render(<LoginScreen navigation={mockNavigation} />);

        const emailInput = getByPlaceholderText('example@example.com');
        const passwordInput = getByPlaceholderText('********');
        const loginButton = getByText(translations.auth.logIn);

        // Simulate user typing email and password
        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'password123');

        // Simulate login button press
        fireEvent.press(loginButton);

        // Check if the navigation was triggered
        expect(mockNavigation.navigate).toHaveBeenCalledWith('termins');
    });

    it('shows error when login is attempted without credentials', () => {
        const { getByText } = render(<LoginScreen navigation={mockNavigation} />);
        const loginButton = getByText(translations.auth.logIn);

        // Simulate login button press without entering email or password
        fireEvent.press(loginButton);

    });

    it('navigates to the register screen when "Sign Up" is pressed', () => {
        const { getByText } = render(<LoginScreen navigation={mockNavigation} />);
        const signUpButton = getByText(translations.auth.signUp);

        // Simulate pressing the signup button
        fireEvent.press(signUpButton);

        // Check if the navigation was triggered
        expect(mockNavigation.navigate).toHaveBeenCalledWith('register');
    });
});
