import { render } from '@testing-library/react';
import DefaultButton from "./DefaultButton";

describe("when rendered verify the button click", () => {
    it("when button add a new task receive focus", () => {
        const { getByTestId, debug } = render(<DefaultButton />);
        const button = getByTestId('button-test');
        button.focus()

        expect(button).toHaveFocus()
        debug()
    })
});
