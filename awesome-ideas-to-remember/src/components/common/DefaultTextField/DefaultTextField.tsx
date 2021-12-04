import React, { useState } from 'react';

import { DefaultTextFieldContainer } from "./styles";

interface DefaultTextFieldProps {
    placeholder: string;
}

const DefaultTextField = ({
    placeholder
}: DefaultTextFieldProps) => {
    const [isFocused, setIsFused] = useState(false);
    return (
        <DefaultTextFieldContainer
            isFocused={isFocused}
            onFocus={() => setIsFused(true)}
            onBlur={() => setIsFused(false)}
            data-testid="default-textField-test"
            placeholder={placeholder}
        />
    );
}

export default DefaultTextField;