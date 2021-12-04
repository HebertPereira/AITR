import React from 'react';
import { FiX } from 'react-icons/fi';

import DefaultButton from '../../../../components/common/DefaultButton/DefaultButton';
import { IdeaProps } from '../../../../providers/Auth';

import { CardContainer } from '../../styles';

interface CardProps {
    idea: IdeaProps;
}

const Card = ({ idea }: CardProps) => {
    return (
        <CardContainer>
            <div>
                <h2>{idea.title}</h2>
                <DefaultButton
                    text="remover"
                    icon={<FiX />}
                />
            </div>
            <p>{idea.description}</p>
            <span data-testid="items-test">{idea.tags.map((item) => `#${item}, `)}</span>
        </CardContainer>
    );
}

export default Card;
