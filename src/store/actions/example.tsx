import { SET_EXAMPLE, SET_EXAMPLE_SELECTED_ID, SET_EXAMPLE_LOADING } from '../types/example';

import { Dispatch } from 'redux';

/**
 * Busca uma lista de entidades na API
 * @param {*} page Página a ser buscada, número de elementos por página é configurado no
 * backend, em `pagination.helper.ts`

 */
export const getExample = (page: number) => async (dispatch: Dispatch) => {
    dispatch({
        type: SET_EXAMPLE_LOADING,
        isLoading: false,
    });
};

/**
 * Envia a entidade para API para criação da mesma no banco de dados
 * @param {Object} documento Dados da entidade a ser criada
 */
export const createExample = (formValues: any) => async (dispatch: Dispatch) => {
    dispatch({
        type: SET_EXAMPLE_LOADING,
        isLoading: false,
    });
};

/**
 * Envia a entidade para alterar seus valores no banco de dados
 * @param {*} documento Entidade a ser alterada, com UUID

 */
export const updateExample = (example: any) => async (dispatch: Dispatch) => {
    dispatch({
        type: SET_EXAMPLE_LOADING,
        isLoading: false,
    });
};

/**
 * Busca as entidades que correspondem com o input informado, as colunas que serão
 * comparadas estão no método betterSearch de cada serviço
 * @param {*} input Input que será enviado para a busca

 */
export const searchExample = (input: any) => async (dispatch: Dispatch) => {
    dispatch({
        type: SET_EXAMPLE_LOADING,
        isLoading: false,
    });
};

/**
 * Envia o UUID da entidade para ser removida do banco de dados
 * @param {String} documentoSelectedId UUID da entidade a ser removida

 */
export const deleteExample = (exampleSelectedId: any) => async (dispatch: Dispatch) => {
    dispatch({
        type: SET_EXAMPLE_LOADING,
        isLoading: false,
    });
};

/**
 * Busca os detalhes da notícia informada, para mostrar nos modais
 * @param {String} exampleSelectedId UUID da notícia
 */
export const getExampleById = (exampleSelectedId: any) => async (dispatch: Dispatch) => {
    dispatch({
        type: SET_EXAMPLE_LOADING,
        isLoading: false,
    });
};

/**
 * Seta o UUID da entidade como o selecionado, para ser editado ou visualizado pelos modais
 * @param {String} exampleSelectedId UUID a ser selecionado
 */
export const setExampleSelectedId = (exampleSelectedId: any) => ({
    type: SET_EXAMPLE_SELECTED_ID,
    exampleSelectedId,
});

/**
 * Seta o estado de loading da entidade
 * @param {boolean} loading booleano a setar o estado de loading
 */
export const setExampleLoading = (loading: boolean) => ({
    type: SET_EXAMPLE_LOADING,
    isLoading: loading,
});
