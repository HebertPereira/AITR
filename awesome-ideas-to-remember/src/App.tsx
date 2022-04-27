import React, { useState } from 'react';
import Modal from 'react-modal';

import Header from './components/Header/Header';
import { IdeaProvider } from './providers/Auth';
import GlobalRoutes from './routes/golbalRoutes';
import GlobalStyles from './styles/globalStyles';

Modal.setAppElement('#root');

function App(): JSX.Element {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  function handleOpenNewIdeaModal() {
    setIsOpenCreateModal(true);
  }

  function handleCloseIdeaModal() {
    setIsOpenCreateModal(false);
  }

  return (
    <IdeaProvider>
      <GlobalStyles />
      <Header onOpenNewIdeaModal={() => handleOpenNewIdeaModal()} />
      <GlobalRoutes
        isOpenCreateModal={isOpenCreateModal}
        handleCloseIdeaModal={() => handleCloseIdeaModal()}
      />
    </IdeaProvider>
  );
}

export default App;
