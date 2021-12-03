import React from 'react';
import { FiX } from 'react-icons/fi';

import DefaultButton from '../../../components/common/DefaultButton/DefaultButton';

import { CardContainer } from '../styles';

const Card = () => {
    return (
        <CardContainer>
            <div>
                <h2>Criar um app de lista de geladeira</h2>
                <DefaultButton text="remover" icon={<FiX />} />
            </div>
            <p>Criar um app para listar os itens que tenho na minha geladeira para que nãi estrague as coisas</p>
            <span>#economia, #react-native, #open-source, #nodejs</span>
        </CardContainer>
    );
}

export default Card;
