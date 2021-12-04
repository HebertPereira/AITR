import React, { FormEvent, useState } from 'react';
import { FiX } from 'react-icons/fi';
import Modal from 'react-modal';

import { IdeaContextProps, useIdeas } from '../../providers/Auth';

import DefaultInput from '../common/DefaultInput/DefaultInput';
import DefaultButton from '../common/DefaultButton/DefaultButton';
import DefaultTextField from '../common/DefaultTextField/DefaultTextField';

import {
    NewIdeaModalInputBox,
    NewTransactionModalContainer,
} from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

function NewIdeaModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    // const { createIdea }: IdeaContextProps = useIdeas();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    const handleCreateNewTransaction = async (event: FormEvent) => {
        event.preventDefault();
        // await createTransaction({
        //     title,
        //     amount,
        //     category,
        //     type
        // });

        // setTitle('')
        // setAmount(0)
        // setCategory('')
        // setType('deposit')
        // onRequestClose();
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <FiX />
            </button>
            <NewTransactionModalContainer onSubmit={handleCreateNewTransaction}>
                <NewIdeaModalInputBox>
                    <span>Título da ideia</span>
                    <DefaultInput
                        placeholder="Digite o Titulo da ideia"
                    />
                </NewIdeaModalInputBox>
                <NewIdeaModalInputBox isDescription>
                    <span>Descrição da ideia</span>
                    <DefaultTextField
                        placeholder="Digite a Descrição"
                    />
                </NewIdeaModalInputBox>
                <NewIdeaModalInputBox>
                    <span>Tags da ideia <strong>Obs.: Separadas por virgula.</strong></span>
                    <DefaultInput
                        placeholder="Digite as Tags da ideia"
                    />
                </NewIdeaModalInputBox>
                <DefaultButton text="Adicionar" />
            </NewTransactionModalContainer>
        </Modal>
    );
}

export default NewIdeaModal;
