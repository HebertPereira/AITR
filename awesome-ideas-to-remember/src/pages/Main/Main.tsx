import React, { useState } from 'react';

import { useIdeas, IdeaContextProps } from '../../providers/Auth';

import Card from './fragments/Card/Card';
import SearchBar from './fragments/SearchBar/SeachBar';
import DeleteIdeaModal from '../../components/DeleteIdeaModal/DeleteIdeaModal';
import NewIdeaModal from '../../components/NewIdeaModal/NewIdeaModal';

import {
    MainContainer,
    MainContent,
    MainContentCarList
} from './styles';
import UpdateIdeaModal from '../../components/UpdateIdeaModal/UpdateIdeaModal';

interface MainProps {
    isOpenCreateModal: boolean,
    handleCloseIdeaModal: () => void;
}

function Main({
    isOpenCreateModal,
    handleCloseIdeaModal,
}: MainProps) {
    const { listOfIdeas }: IdeaContextProps = useIdeas();

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);

    function handleOpenDeleteIdeaModal() {
        setIsOpenDeleteModal(true);
    }
    function handleOpenUpdateIdeaModal() {
        setIsOpenUpdateModal(true);
    }

    function handleCloseAllIdeaModal() {
        handleCloseIdeaModal();
        setIsOpenDeleteModal(false);
        setIsOpenUpdateModal(false);
    }
    return (
        <MainContainer>
            <MainContent>
                <SearchBar />
                <MainContentCarList>
                    {listOfIdeas?.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                idea={item}
                                handleOpenDeleteIdeaModal={handleOpenDeleteIdeaModal}
                                handleOpenUpdateIdeaModal={handleOpenUpdateIdeaModal}
                            />
                        )
                    })}
                </MainContentCarList>
            </MainContent>
            <NewIdeaModal
                isOpen={isOpenCreateModal}
                onRequestClose={handleCloseAllIdeaModal}
            />
            <DeleteIdeaModal
                isOpen={isOpenDeleteModal}
                onRequestClose={handleCloseAllIdeaModal}
            />
            <UpdateIdeaModal
                isOpen={isOpenUpdateModal}
                onRequestClose={handleCloseAllIdeaModal}
            />
        </MainContainer>
    );
}

export default Main;
