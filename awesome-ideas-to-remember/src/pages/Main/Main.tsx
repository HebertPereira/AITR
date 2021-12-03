import React from 'react';

import Card from './fragments/Card';
import SearchBar from './fragments/SeachBar';

import {
    MainContainer,
    MainContent
} from './styles';

function Main() {
    return (
        <MainContainer>
            <MainContent>
                <SearchBar />
                <Card />
            </MainContent>
        </MainContainer>
    );
}

export default Main;
