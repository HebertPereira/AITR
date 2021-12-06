import { render, fireEvent, screen } from '@testing-library/react';
import Header from "./Header";

describe("when rendered verify Header", () => {
    it("should verify texts in this component", () => {
        render(<Header onOpenNewIdeaModal={() => null} />);
        expect(screen.getByText('Awesome ideas to remember')).toBeInTheDocument();
        expect(screen.getByText('AITR')).toBeInTheDocument();
    });

    it("should verify click in button for add a new idea", () => {
        render(<Header onOpenNewIdeaModal={() => null} />)
        fireEvent(
            screen.getByText('Nova Ideia'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );
    })
});
