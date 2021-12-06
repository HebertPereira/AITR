import { render, screen } from '@testing-library/react';
import Card from "./Card";

describe("when rendered verify Card component", () => {
    test("should verify component receive our props", () => {
        render(<Card idea={{ title: 'Travel to the moon', description: 'this idea is awesome, but i dont`t have idea to how do it.', tags: "Moon,Nasa,Travel" }} />);

        expect(screen.getByText('Travel to the moon')).toBeInTheDocument();
        expect(screen.getByText('this idea is awesome, but i dont`t have idea to how do it.')).toBeInTheDocument();
        expect(screen.queryByTestId("tags-test").textContent).toBe("#Moon, #Nasa, #Travel, ");
    });
});
