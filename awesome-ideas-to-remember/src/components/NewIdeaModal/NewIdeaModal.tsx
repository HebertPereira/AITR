import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { IdeaContextProps, useIdeas } from '../../providers/Auth';
import DefaultButton from '../common/DefaultButton/DefaultButton';
import DefaultInput from '../common/DefaultInput/DefaultInput';
import DefaultTextField from '../common/DefaultTextField/DefaultTextField';
import { NewIdeaModalContainer, NewIdeaModalInputBox } from './styles';

interface NewIdeaModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewIdeaModal({
  isOpen,
  onRequestClose
}: NewIdeaModalProps): JSX.Element {
  const { createIdea }: IdeaContextProps = useIdeas();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleCreateNewIdea = async (event: FormEvent) => {
    event.preventDefault();
    if (title !== '' && description !== '' && tags !== '') {
      await createIdea({
        title,
        description,
        tags
      });

      setTitle('');
      setDescription('');
      setTags('');
      return onRequestClose();
    }
    return toast.warn('Todos os campos precisam estar preenchidos!');
  };

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
        aria-label="Clique para fechar o pop-up de criação de ideia."
        tabIndex={0}
        data-testid="new-idea-x-button-test"
      >
        <FiX />
      </button>
      <NewIdeaModalContainer onSubmit={handleCreateNewIdea}>
        <h2>
          <TiPlus color="#6805a6" aria-label="Icone de adição." />
          Nova Ideia
        </h2>
        <NewIdeaModalInputBox>
          <span>Título da ideia</span>
          <DefaultInput
            placeholder="Digite o Titulo da ideia"
            tabIndex={0}
            aria-label="Digite o titulo da ideia aqui."
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </NewIdeaModalInputBox>
        <NewIdeaModalInputBox isDescription>
          <span>Descrição da ideia</span>
          <DefaultTextField
            placeholder="Digite a Descrição"
            value={description}
            aria-label="Digite o descrição da ideia aqui."
            tabIndex={0}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
          />
        </NewIdeaModalInputBox>
        <NewIdeaModalInputBox>
          <span>
            Tags da ideia <strong>Ex.: Nasa,SpaceX,Virgin Galactic</strong>
          </span>
          <DefaultInput
            placeholder="Digite as Tags da ideia"
            value={tags}
            aria-label="Digite as tags da ideia aqui."
            tabIndex={0}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTags(e.target.value)
            }
          />
        </NewIdeaModalInputBox>
        <DefaultButton
          text="Adicionar"
          type="submit"
          aria-label="Clique para finalizar adição da ideia."
          tabIndex={0}
          icon={<TiPlus />}
        />
      </NewIdeaModalContainer>
    </Modal>
  );
}

export default NewIdeaModal;
