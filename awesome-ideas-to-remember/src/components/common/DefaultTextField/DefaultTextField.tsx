import React, { ChangeEvent, useState } from 'react';

import { DefaultTextFieldContainer } from "./styles";

interface DefaultTextFieldProps {
    id?: string;
    value?: string;
    placeholder: string;
    onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void;
    tabIndex?: number;
}

const DefaultTextField = ({
    placeholder,
    onChange,
    value,
    tabIndex
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
            tabIndex={tabIndex}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
        />
    );
}

export default DefaultTextField;
