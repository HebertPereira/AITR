import { render, fireEvent } from '@testing-library/react';
import SearchBar from "./SeachBar";

describe("when rendered verify input-check state", () => {
    it("should paste it into the greetings text", () => {
        const { getByText, getByTestId } = render(<SearchBar />);
        const input = getByTestId('input-test');
        expect(input.checked).toEqual(false);
        fireEvent(
            getByTestId('input-test'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(getByText('Buscar somente em tags')).toBeInTheDocument();
        expect(getByTestId('input-test')).toBeChecked();
    });
});
