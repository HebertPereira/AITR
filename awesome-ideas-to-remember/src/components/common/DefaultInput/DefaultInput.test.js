import { render } from '@testing-library/react';
import DefaultInput from "./DefaultInput";

describe("when rendered verify input", () => {
    it("when rendered verify input focus", () => {
        const { getByTestId } = render(<DefaultInput />);
        const input = getByTestId('default-input-test');
        input.focus()

        expect(input).toBeInTheDocument();
        expect(input).toHaveFocus();
    });
});
