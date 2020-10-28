import React from 'react';

import Routes from './routes';
import {
  SheetContext,
  sheetData,
} from './context/SheetContext';
import GlobalStyle from './styles/global';

type AppProps = {
  sheets: sheetData[];
};

const App: React.FC<AppProps> = ({ sheets }: AppProps) => {
  console.log('sheets', sheets)
  return (
    <SheetContext.Provider value={sheets}>
        <Routes />
        <GlobalStyle />
    </SheetContext.Provider>
  );
};

export default App;