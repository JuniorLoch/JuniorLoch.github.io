import { Provider } from 'react-redux';
import { store } from './config/configureStore';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename="/">
                <Routes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
