import React, { ChangeEvent, useState } from 'react';

import { DefaultTextFieldContainer } from "./styles";

interface DefaultTextFieldProps {
    id?: string;
    value?: string;
    placeholder: string;
    onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void;
}

const DefaultTextField = ({
    placeholder,
    onChange,
    value
}: DefaultTextFieldProps) => {
    const [isFocused, setIsFused] = useState(false);
    return (
        <DefaultTextFieldContainer
            isFocused={isFocused}
            onFocus={() => setIsFused(true)}
            onBlur={() => setIsFused(false)}
            data-testid="default-textField-test"
            placeholder={placeholder}
            value={value}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
        />
    );
}

export default DefaultTextField;