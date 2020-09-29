import React from 'react';
import withConnectors from './src/connectors';
import { Provider as PaperProvider } from 'react-native-paper'
import RoutesContainer from './src/RoutesContainer';


const App = () => {
  return (
      <PaperProvider>
        <RoutesContainer />
      </PaperProvider>
  )

}

export default withConnectors(App)
