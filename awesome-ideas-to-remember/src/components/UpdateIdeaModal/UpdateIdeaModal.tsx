import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { TiPencil } from 'react-icons/ti';
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

interface UpdateIdeaModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

function UpdateIdeaModal({ isOpen, onRequestClose }: UpdateIdeaModalProps) {
    const { updateIdea, currentIdea }: IdeaContextProps = useIdeas();

    const [title, setTitle] = useState(currentIdea.title);
    const [description, setDescription] = useState(currentIdea.description);
    const [tags, setTags] = useState(`${currentIdea.tags}`);

    const handleCreateNewIdea = async (event: FormEvent) => {
        event.preventDefault();
        if (title !== "" && description !== "" && tags !== "") {
            await updateIdea({
                title,
                description,
                tags: tags.split(',')
            });

            setTitle('');
            setDescription('');
            setTags('');
            onRequestClose();
        }
        else return toast.warn('Todos os campos precisam estar preenchidos!')
    }

    useEffect(() => {
        setTitle(currentIdea.title);
        setDescription(currentIdea.description);
        setTags(`${currentIdea.tags}`);
    }, [currentIdea])

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
            {currentIdea ?
                <NewIdeaModalContainer onSubmit={handleCreateNewIdea}>
                    <h2>
                        <TiPencil color="#6805a6" />
                        {currentIdea?.title.length > 40 ?
                            `${currentIdea?.title.substring(0, 40)}...`
                            : currentIdea?.title
                        }
                    </h2>
                    <NewIdeaModalInputBox>
                        <span>Título da ideia</span>
                        <DefaultInput
                            placeholder="Digite o Titulo da ideia"
                            value={title}
                            defaultValue={title}
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
                            defaultValue={tags}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
                        />
                    </NewIdeaModalInputBox>
                    <DefaultButton
                        text="Adicionar"
                        type="submit"
                        icon={<TiPencil />}
                    />
                </NewIdeaModalContainer>
                : null
            }
        </Modal>
    );
}

export default UpdateIdeaModal;
