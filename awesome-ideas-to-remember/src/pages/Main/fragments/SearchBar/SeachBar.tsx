import React from 'react';

import DefaultInput from '../../../../components/common/DefaultInput/DefaultInput';

import { SearchBarContainer } from '../../styles';

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <DefaultInput
                placeholder="Pesquisar"
                searchType
            />
            <p>
                <input type="checkbox" data-testid="input-test" />
                <span>Buscar somente em tags</span>
            </p>
        </SearchBarContainer>
    );
}

export default SearchBar;
