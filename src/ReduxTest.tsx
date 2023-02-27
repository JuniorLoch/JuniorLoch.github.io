//React
import React from 'react';
import { useAppDispatch, useAppSelector } from './config/hooks';
import { setExampleLoading } from './store/actions/example';
//Componentes

//Estilos - icones

//Acoes

function ReduxTest() {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state) => state.Example);

    function toggleLoading(): void {
        dispatch(setExampleLoading(!isLoading));
    }

    return (
        <div>
            <div>Loading store state - {isLoading ? 'Carregando' : 'Nao carregando'}</div>
            <div>
                <button onClick={toggleLoading}>Toggle Loading</button>
            </div>
        </div>
    );
}
export default ReduxTest;
