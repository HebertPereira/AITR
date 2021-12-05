import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import { FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

import { IdeaContextProps, useIdeas } from '../../providers/Auth';

import DefaultInput from '../common/DefaultInput/DefaultInput';
import DefaultButton from '../common/DefaultButton/DefaultButton';
import DefaultTextField from '../common/DefaultTextField/DefaultTextField';

import {
    NewIdeaModalContainer,
    NewIdeaModalInputBox,
} from './styles';

interface NewIdeaModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

function NewIdeaModal({ isOpen, onRequestClose }: NewIdeaModalProps) {
    const {
        createIdea
    }: IdeaContextProps = useIdeas();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const handleCreateNewIdea = async (event: FormEvent) => {
        event.preventDefault();
        if (title !== "" && description !== "" && tags !== "") {
            await createIdea({
                title,
                description,
                tags: tags.split(',')
            });

            setTitle('')
            setDescription('')
            setTags('')
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
            <NewIdeaModalContainer onSubmit={handleCreateNewIdea}>
                <h2>
                    <TiPlus color="#6805a6" />
                    Nova Ideia
                </h2>
                <NewIdeaModalInputBox>
                    <span>Título da ideia</span>
                    <DefaultInput
                        placeholder="Digite o Titulo da ideia"
                        value={title}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                    />
                </NewIdeaModalInputBox>
                <NewIdeaModalInputBox isDescription>
                    <span>Descrição da ideia</span>
                    <DefaultTextField
                        placeholder="Digite a Descrição"
                        value={description}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                    />
                </NewIdeaModalInputBox>
                <NewIdeaModalInputBox>
                    <span>Tags da ideia <strong>Ex.: Nasa,SpaceX,Virgin Galactic</strong></span>
                    <DefaultInput
                        placeholder="Digite as Tags da ideia"
                        value={tags}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
                    />
                </NewIdeaModalInputBox>
                <DefaultButton
                    text="Adicionar"
                    type="submit"
                    icon={<TiPlus />}
                />
            </NewIdeaModalContainer>
        </Modal>
    );
}

export default NewIdeaModal;
