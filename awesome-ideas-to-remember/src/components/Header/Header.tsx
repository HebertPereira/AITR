import React from 'react';

import DefaultButton from '../common/DefaultButton/DefaultButton';

import { HeaderContainer } from "./styles";

interface HeaderProps {
    onOpenNewIdeaModal: () => void;
}

const Header = ({
    onOpenNewIdeaModal
}: HeaderProps) => {
    return (
        <HeaderContainer>
            <div>
                <h1>AITR</h1>
                <h2>Awesome ideas to remember</h2>
            </div>
            <DefaultButton
                text="Nova Ideia"
                click={() => onOpenNewIdeaModal()}
            />
        </HeaderContainer>
    );
}

export default Header;
