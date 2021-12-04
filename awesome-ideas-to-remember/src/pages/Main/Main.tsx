import React from 'react';

import { useIdeas, IdeaContextProps } from '../../providers/Auth';

import Card from './fragments/Card/Card';
import SearchBar from './fragments/SearchBar/SeachBar';

import {
    MainContainer,
    MainContent
} from './styles';

function Main() {
    const { ideas }: IdeaContextProps = useIdeas();


    return (
        <MainContainer>
            <MainContent>
                <SearchBar />
                {ideas?.map((item, index) => {
                    return <Card idea={item} key={index} />
                })}
            </MainContent>
        </MainContainer>
    );
}

export default Main;
