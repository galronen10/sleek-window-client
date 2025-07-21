import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components';
import { store } from './store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
