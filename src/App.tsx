import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/configureStore';
import ReduxTest from './ReduxTest';

function App() {
    return (
        <Provider store={store}>
            <ReduxTest />
        </Provider>
    );
}

export default App;
