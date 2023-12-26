import React from 'react';
import { AppIU } from './AppIU';
import './App.css';
import { IssuesManagerProvider } from '../IssuestManagerContext';

function App() {

  return (
    <IssuesManagerProvider>
      <AppIU/>
    </IssuesManagerProvider>
  );
}

export default App;
