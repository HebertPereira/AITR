import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../pages/Main/Main';

interface GlobalRoutesProps {
  isOpenCreateModal: boolean;
  handleCloseIdeaModal: () => void;
}

function GlobalRoutes({
  isOpenCreateModal,
  handleCloseIdeaModal
}: GlobalRoutesProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isOpenCreateModal={isOpenCreateModal}
              handleCloseIdeaModal={handleCloseIdeaModal}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default GlobalRoutes;
