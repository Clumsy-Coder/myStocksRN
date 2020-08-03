import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from 'src/redux/store';
import HomeNavigator from 'src/routes/AppRoutes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
