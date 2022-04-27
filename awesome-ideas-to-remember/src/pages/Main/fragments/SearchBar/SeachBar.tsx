/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, useState } from 'react';

import DefaultInput from '../../../../components/common/DefaultInput/DefaultInput';
import { IdeaContextProps, useIdeas } from '../../../../providers/Auth';
import { SearchBarContainer } from '../../styles';

const SearchBar = (): JSX.Element => {
  const { searchIdea }: IdeaContextProps = useIdeas();
  const [search, setSearch] = useState('');
  const [isFilterTagsActive, setIsFilterTagsActive] = useState(false);

  const handleSearchChange = (value: string) => {
    searchIdea(value, isFilterTagsActive);
    setSearch(value);
  };

  const handleCheckBoxChange = () => {
    setIsFilterTagsActive(!isFilterTagsActive);
  };

  return (
    <SearchBarContainer data-testid="search-bar-test">
      <DefaultInput
        tabIndex={0}
        aria-label="Pesquisar por conteúdo."
        placeholder="Pesquisar"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleSearchChange(e.target.value)
        }
        searchType
      />
      <section>
        <input
          id="input-check"
          tabIndex={0}
          aria-label="Marcar caixa de seleção para buscar somente em tags."
          aria-checked={isFilterTagsActive}
          type="checkbox"
          data-testid="input-test"
          onChange={() => handleCheckBoxChange()}
        />
        <label htmlFor="input-check">Buscar somente em tags</label>
      </section>
    </SearchBarContainer>
  );
};

export default SearchBar;
