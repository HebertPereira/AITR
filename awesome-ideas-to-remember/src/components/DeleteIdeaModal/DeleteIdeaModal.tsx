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
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
                data-testid="delete-idea-x-button-test"
            >
                <FiX />
            </button>
            <DeleteIdeaModalContainer onSubmit={handleCreateDeleteTransaction}>
                <h2>
                    <FiX color="#6805a6" aria-label="Icone de exclusão." />
                    Apagar Ideia
                </h2>
                <span>
                    Você tem certeza que quer apagar a ideia
                    <strong>{currentIdea?.title}</strong>?
                </span>
                <div>
                    <DefaultButton
                        text="Não"
                        tabIndex={1}
                        aria-label="Clique para cancelar exclusão da ideia."
                        onClick={() => onRequestClose()}
                    />
                    <DefaultButton
                        text="Sim, apagar"
                        tabIndex={2}
                        aria-label="Clique para efetuar exclusão da ideia."
                        type="submit"
                    />
                </div>
            </DeleteIdeaModalContainer>
        </Modal>
    );
}

export default DeleteIdeaModal;
