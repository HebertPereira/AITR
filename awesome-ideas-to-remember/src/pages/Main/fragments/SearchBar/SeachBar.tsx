import React, { ChangeEvent, useState } from 'react';

import DefaultInput from '../../../../components/common/DefaultInput/DefaultInput';

import { SearchBarContainer } from '../../styles';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    return (
        <SearchBarContainer>
            <DefaultInput
                placeholder="Pesquisar"
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
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
