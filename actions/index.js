import { createAction } from "redux-actions";
import * as Actions from "../constants/actions";

export const addOrders = createAction(Actions.ADD_ORDERS);
export const addTransactions = createAction(Actions.ADD_TRANSACTIONS);
export const addAssets = createAction(Actions.ADD_ASSETS);
export const addProcessing = createAction(Actions.ADD_PROCESSING);
export const removeProcessing = createAction(Actions.REMOVE_PROCESSING);
export const setBaseToken = createAction(Actions.SET_BASE_TOKEN);
export const setError = createAction(Actions.SET_ERROR);
export const setNetwork = createAction(Actions.SET_NETWORK);
export const setProducts = createAction(Actions.SET_PRODUCTS);
export const setQuoteToken = createAction(Actions.SET_QUOTE_TOKEN);
export const setWallet = createAction(Actions.SET_WALLET);
export const setTokens = createAction(Actions.SET_TOKENS);
export const setTransactionHash = createAction(Actions.SET_TRANSACTION_HASH);
