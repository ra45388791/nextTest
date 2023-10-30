import react, { createContext, useReducer, useState } from 'react'



type state = number;
type dispatch = (action: { type: string }) => void;

export let countContext = createContext<{ state: state, dispatch: dispatch } | undefined>(undefined);

