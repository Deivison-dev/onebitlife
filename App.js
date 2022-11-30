import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Routes from './src/Routers';

export default function App() {
  return (      
    <>
      <StatusBar barStyle ={"auto"}/>
      <Routes />
    </>
  );
}
