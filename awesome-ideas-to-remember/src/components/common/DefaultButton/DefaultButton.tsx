import React, { ReactNode } from 'react';

import { DefaultButtonContainer } from './styles';

interface DefaultButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    click?: () => void;
    icon?: ReactNode;
}
const DefaultButton = ({
    text,
    type,
    click,
    icon,
}: DefaultButtonProps) => {
    return (
        <DefaultButtonContainer
            type={type ? type : "button"}
            onClick={click}
            data-testid="button-test"
        >
            {icon}
            <span>{text}</span>
        </DefaultButtonContainer>
    );
}

export default DefaultButton;
