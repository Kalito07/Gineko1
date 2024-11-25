import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TerminsScreen from '@/app/termin/termins';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@/lib/navigationTypes';

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();
const mockGoBack = jest.fn();

const mockNavigation: NavigationProp<RootStackParamList> = {
    navigate: mockNavigate,
    dispatch: mockDispatch,
    goBack: mockGoBack,
} as unknown as NavigationProp<RootStackParamList>;

describe('TerminsScreen', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('components correct', () => {
        const { getByText } = render(
            <TerminsScreen navigation={mockNavigation} />
        );

        expect(getByText('Запазени часове')).toBeTruthy();
    });

    it('displays appointments', () => {
        const { getByText } = render(<TerminsScreen navigation={mockNavigation} />);

        expect(getByText('15.09.2024 г.')).toBeTruthy();
        expect(getByText('16.09.2024 г.')).toBeTruthy();
    });

    it('navigate to the "patientType"', async () => {
        const { getByText } = render(<TerminsScreen navigation={mockNavigation} />);
        fireEvent.press(getByText('Запазете час'));
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('patientType');
        });
    });
});
