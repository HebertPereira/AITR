import React, { ReactNode } from 'react';

import { DefaultButtonContainer } from './styles';

interface DefaultButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    icon?: ReactNode;
}
const DefaultButton = ({
    text,
    type,
    onClick,
    icon,
}: DefaultButtonProps) => {
    return (
        <DefaultButtonContainer
            type={type ? type : "button"}
            onClick={onClick}
            data-testid="button-test"
        >
            {icon}
            <span>{text}</span>
        </DefaultButtonContainer>
    );
}

export default DefaultButton;
