import { render } from '@testing-library/react';
import DefaultTextField from "./DefaultTextField";

describe("when rendered verify input", () => {
    test("when rendered verify input focus", () => {
        const { getByTestId } = render(<DefaultTextField />);
        const textArea = getByTestId('default-textField-test');
        textArea.focus()

        expect(textArea).toBeInTheDocument();
        expect(textArea).toHaveFocus();
    });
});
