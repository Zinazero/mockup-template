import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import { BookeoInterface } from './App.tsx';
import env from './config/env.ts';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BookeoInterface serverBase={env.SERVER_BASE} />
    </StrictMode>,
  );
}
