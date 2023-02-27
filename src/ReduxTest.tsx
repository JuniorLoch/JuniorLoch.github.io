//React
import { CssVarsProvider } from '@mui/joy';
import Button from '@mui/joy/Button';
import ColorSchemeToggle from './components/ColorSchemeToggle';
import { useAppDispatch, useAppSelector } from './config/hooks';
import { setExampleLoading } from './store/actions/example';
//Componentes

//Estilos - icones
import customTheme from './theme';
//Acoes

function ReduxTest() {
    const dispatch = useAppDispatch();
    const { isLoading } = useAppSelector((state) => state.Example);

    function toggleLoading(): void {
        dispatch(setExampleLoading(!isLoading));
    }

    return (
        <CssVarsProvider
            disableTransitionOnChange
            theme={customTheme}
        >
            <div>
                <ColorSchemeToggle />
                <div>Loading store state - {isLoading ? 'Carregando' : 'Nao carregando'}</div>
                <div>
                    <Button
                        variant="soft"
                        onClick={toggleLoading}
                    >
                        Toggle Loading
                    </Button>
                </div>
            </div>
        </CssVarsProvider>
    );
}
export default ReduxTest;
