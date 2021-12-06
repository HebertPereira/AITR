import React, { ReactNode } from 'react';

import { DefaultButtonContainer } from './styles';

interface DefaultButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    icon?: ReactNode;
    tabIndex?: number;
}

const DefaultButton = ({
    text,
    type,
    onClick,
    icon,
    tabIndex
}: DefaultButtonProps) => {
    return (
        <DefaultButtonContainer
            type={type ? type : "button"}
            onClick={onClick}
            data-testid="button-test"
            tabIndex={tabIndex}
        >
            {icon}
            <span>{text}</span>
        </DefaultButtonContainer>
    );
}

export default DefaultButton;
