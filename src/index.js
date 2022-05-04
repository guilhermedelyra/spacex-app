import {ColorModeScript} from '@chakra-ui/react';
import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './App';
import Details from './Details';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
const rootElement = document.getElementById('root');

render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
