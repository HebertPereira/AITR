import React, { useState } from 'react';

import {
    DefaultInputContainer,
    DefaultInputContent
} from './styles';

import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

interface DefaultInputProps {
    type?: "checkbox" | "password";
    searchType?: boolean;
    placeholder: string;
}

const DefaultInput = ({
    type,
    searchType,
    placeholder
}: DefaultInputProps) => {
    const [isFocused, setIsFused] = useState(false);
    return (
        <DefaultInputContainer
            isCheckBox={type === "checkbox"}
            isFocused={isFocused}
            onFocus={() => setIsFused(true)}
            onBlur={() => setIsFused(false)}
        >
            {searchType ? <SearchIcon title="Lupa - Buscar" /> : ""}
            <DefaultInputContent
                type={type ? type : "text"}
                data-testid="default-input-test"
                placeholder={placeholder}
            />
        </DefaultInputContainer>
    );
}

export default DefaultInput;
