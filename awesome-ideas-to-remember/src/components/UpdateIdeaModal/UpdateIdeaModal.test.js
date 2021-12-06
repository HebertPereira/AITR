import { render, screen } from '@testing-library/react';
import UpdateIdeaModal from './UpdateIdeaModal';

describe("when rendered verify child components", () => {
    test("should verify x-button", () => {
        render(<UpdateIdeaModal isOpen={true} onRequestClose={() => null} />);
        const buttonX = screen.getByTestId('update-idea-x-button-test');
        buttonX.focus();

        expect(buttonX).toHaveFocus();
        expect(buttonX).toBeInTheDocument();
    });
});
