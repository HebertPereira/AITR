import React from 'react';
import { FiX } from 'react-icons/fi';
import { TiPencil } from 'react-icons/ti';

import DefaultButton from '../../../../components/common/DefaultButton/DefaultButton';
import { ListOfIdeasProps, useIdeas } from '../../../../providers/Auth';

import { CardBoxButton, CardContainer } from '../../styles';

interface CardProps {
    idea: ListOfIdeasProps;
    handleOpenDeleteIdeaModal: () => void;
    handleOpenUpdateIdeaModal: () => void;
}

const Card = ({
    idea,
    handleOpenDeleteIdeaModal,
    handleOpenUpdateIdeaModal
}: CardProps) => {
    const { setCurrentIdea } = useIdeas();
    return (
        <CardContainer>
            <div>
                <h2>{idea.title}</h2>
                <CardBoxButton>
                    <DefaultButton
                        text="editar"
                        icon={<TiPencil />}
                        onClick={() => {
                            handleOpenUpdateIdeaModal();
                            setCurrentIdea(idea);
                        }}
                    />
                    <DefaultButton
                        text="remover"
                        icon={<FiX />}
                        onClick={() => {
                            handleOpenDeleteIdeaModal();
                            setCurrentIdea(idea);
                        }}
                    />
                </CardBoxButton>
            </div>
            <p>{idea.description}</p>
            <span data-testid="items-test">{idea.tags.map((item) => `#${item}, `)}</span>
        </CardContainer>
    );
}

export default Card;
