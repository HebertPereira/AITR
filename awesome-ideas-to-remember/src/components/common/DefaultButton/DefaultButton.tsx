import React, { ReactNode } from 'react';

import { DefaultButtonContainer } from './styles';

interface DefaultButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    icon?: ReactNode;
}
const DefaultButton = ({
    text,
    type,
    icon
}: DefaultButtonProps) => {
    return (
        <DefaultButtonContainer
            type={type ? type : "button"}
        >
            {icon}
            <span>{text}</span>
        </DefaultButtonContainer>
    );
}

export default DefaultButton;
