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

    const formatTags = (tagString: string) => {
        const tag = tagString.split(',');
        return tag.map((item) => `#${item}, `)
    }

    return (
        <CardContainer data-testid="card-test">
            <div>
                <h2>{idea.title}</h2>
                <CardBoxButton>
                    <DefaultButton
                        text="editar"
                        icon={<TiPencil />}
                        tabIndex={1}
                        aria-label="Clique para editar ideia."
                        onClick={() => {
                            handleOpenUpdateIdeaModal();
                            setCurrentIdea(idea);
                        }}
                    />
                    <DefaultButton
                        text="remover"
                        icon={<FiX />}
                        tabIndex={2}
                        aria-label="Clique para remover ideia."
                        onClick={() => {
                            handleOpenDeleteIdeaModal();
                            setCurrentIdea(idea);
                        }}
                    />
                </CardBoxButton>
            </div>
            <p>{idea.description}</p>
            <span data-testid="tags-test">{formatTags(idea.tags)}</span>
        </CardContainer>
    );
}

export default Card;
