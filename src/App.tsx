import React from 'react';
import {Provider} from 'react-redux';
import RootNavigator from './RootNavigator';
import {store} from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
