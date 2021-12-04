import { render, fireEvent } from '@testing-library/react';
import Header from "./Header";

describe("when rendered with a name prop", () => {
    it("should paste it into the greetings text", () => {
        const { getByText } = render(<Header />);
        expect(getByText('Awesome ideas to remember')).toBeInTheDocument();
        expect(getByText('AITR')).toBeInTheDocument();
    });

    it("click button for add a new idea", () => {
        const { getByText } = render(<Header />)
        fireEvent(
            getByText('Nova Ideia'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        )
    })
});
