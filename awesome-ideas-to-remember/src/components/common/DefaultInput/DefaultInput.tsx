/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { ChangeEvent, useState } from 'react';

import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { DefaultInputContainer, DefaultInputContent } from './styles';

interface DefaultInputProps {
  type?: 'checkbox' | 'password';
  searchType?: boolean;
  placeholder: string;
  value: string | number;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string | number;
  tabIndex?: number;
}

const DefaultInput = ({
  type,
  searchType,
  placeholder,
  onChange,
  defaultValue,
  tabIndex
}: DefaultInputProps): JSX.Element => {
  const [isFocused, setIsFused] = useState(false);
  return (
    <DefaultInputContainer
      isCheckBox={type === 'checkbox'}
      isFocused={isFocused}
      onFocus={() => setIsFused(true)}
      onBlur={() => setIsFused(false)}
    >
      {searchType ? <SearchIcon title="Lupa - Buscar" /> : ''}
      <DefaultInputContent
        type={type || 'text'}
        data-testid="default-input-test"
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        defaultValue={defaultValue}
        tabIndex={tabIndex}
      />
    </DefaultInputContainer>
  );
};

export default DefaultInput;
