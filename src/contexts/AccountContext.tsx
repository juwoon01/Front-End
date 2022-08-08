import {createContext, useState, Dispatch } from 'react';

//export const UserContext = createContext({});
// createContext()로 비어 있는 context가 만들어진다.

export type Account = {
    username: string;
    email: string;
};

type AccountState = Account[];

const AccountStateContext = createContext<AccountState | undefined>(undefined);

type Action =
  | { type: 'CREATE'; username: string }
  | { type: 'REMOVE'; username: string };

type AccountDispatch = Dispatch<Action>;
const AccountDispatchContext = createContext<AccountDispatch | undefined>(undefined);