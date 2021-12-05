import React, { FormEvent, } from 'react';
import { FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

import { IdeaContextProps, useIdeas } from '../../providers/Auth';

import DefaultButton from '../common/DefaultButton/DefaultButton';

import {
    DeleteIdeaModalContainer,
} from './styles';

interface DeleteTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

function DeleteIdeaModal({ isOpen, onRequestClose }: DeleteTransactionModalProps) {
    const { currentIdea, deleteIdea }: IdeaContextProps = useIdeas();

    const handleCreateDeleteTransaction = async (event: FormEvent) => {
        event.preventDefault();
        if (currentIdea) {
            console.log(currentIdea);

            deleteIdea();
            onRequestClose();
        }
        else return toast.warn('Todos os campos precisam estar preenchidos!')
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
            <DeleteIdeaModalContainer onSubmit={handleCreateDeleteTransaction}>
                <h2>
                    <FiX color="#6805a6" />
                    Apagar Ideia
                </h2>
                <span>
                    Você tem certeza que quer apagar a ideia
                    <strong>{currentIdea.title}</strong>?
                </span>
                <div>
                    <DefaultButton
                        text="Não"
                        onClick={() => onRequestClose()}
                    />
                    <DefaultButton
                        text="Sim, apagar"
                        type="submit"
                    />
                </div>
            </DeleteIdeaModalContainer>
        </Modal>
    );
}

export default DeleteIdeaModal;
