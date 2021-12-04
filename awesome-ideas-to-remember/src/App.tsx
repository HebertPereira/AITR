import React, { useState } from 'react';

import { IdeaProvider } from './providers/Auth';
import GlobalRoutes from './routes/golbalRoutes';
import GlobalStyles from './styles/globalStyles';

import Header from './components/Header/Header';
import NewIdeaModal from './components/NewIdeaModal/NewIdeaModal';

function App() {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  function handleOpenNewIdeaModal() {
    setIsOpenCreateModal(true);
  }

  function handleCloseNewIdeaModal() {
    setIsOpenCreateModal(false);
  }
  return (
    <IdeaProvider>
      <GlobalStyles />
      <Header onOpenNewIdeaModal={handleOpenNewIdeaModal} />
      <GlobalRoutes />
      <NewIdeaModal
        isOpen={isOpenCreateModal}
        onRequestClose={handleCloseNewIdeaModal}
      />
    </IdeaProvider>
  );
}

export default App;
