import { Route, Routes } from 'react-router-dom';
import ReduxTest from '../ReduxTest';

function Router() {
    return (
        <Routes>
            <Route
                path="/"
                element={<ReduxTest />}
            />
        </Routes>
    );
}

export default Router;
