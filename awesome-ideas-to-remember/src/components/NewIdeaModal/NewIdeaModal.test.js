import { render, screen } from '@testing-library/react';
import NewIdeaModal from './NewIdeaModal';

describe("when rendered verify child components", () => {
    test("should verify x-button", () => {
        render(<NewIdeaModal isOpen={true} onRequestClose={() => null} />);
        const buttonX = screen.getByTestId('new-idea-x-button-test');
        buttonX.focus();

        expect(buttonX).toHaveFocus();
        expect(buttonX).toBeInTheDocument();
    });
});
