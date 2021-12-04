import { render } from '@testing-library/react';
import Card from "./Card";

describe("when rendered verify input-check state", () => {
    it("should paste it into the greetings text", () => {
        const { getByText, queryByTestId } = render(<Card idea={{ title: 'DO1DERA', description: 'LEARNING TEST', tags: ["test", "futebol", "lol"] }} />);

        expect(getByText('DO1DERA')).toBeInTheDocument();
        expect(getByText('LEARNING TEST')).toBeInTheDocument();
        expect(queryByTestId("items-test").textContent).toBe("#test, #futebol, #lol, ")
    });
});
