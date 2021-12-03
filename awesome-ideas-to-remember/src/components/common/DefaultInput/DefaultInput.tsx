import React, { useState } from 'react';

import {
    DefaultInputContainer,
    DefaultInputContent
} from './styles';

import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

interface DefaultInputProps {
    type?: "checkbox" | "password";
    searchType?: boolean;
}

const DefaultInput = ({
    type,
    searchType
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

            />
        </DefaultInputContainer>
    );
}

export default DefaultInput;
