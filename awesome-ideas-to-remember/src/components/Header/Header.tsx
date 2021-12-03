import React from 'react';

import DefaultButton from '../common/DefaultButton/DefaultButton';

import { HeaderContainer } from "./styles";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <h1>AITR</h1>
                <h2>Awesome ideas to remember</h2>
            </div>
            <DefaultButton text="Nova Ideia" />
        </HeaderContainer>
    );
}

export default Header;
