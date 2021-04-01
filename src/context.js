import React, { createContext, useReducer } from 'react';

const initialState = {
    selectedTitle: {},
    userList: [],
    seeComponent: false
}

const store = createContext(initialState);
const { Provider } = store;

const AppState = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SETSELECTED':
                return {
                    ...state,
                    selectedTitle: action.payload
                }
            case 'SETLIST':
                return {
                    ...state,
                    userList: action.payload
                }
            case 'SETSEE':
                return {
                    ...state,
                    seeComponent: action.payload
                }
            default:
                return state
        }
    }, initialState);

    const setItem = (typeCase, title, e) => {

        dispatch({
            type: typeCase,
            payload: title
        })
    }

    const setUserList = (obj, e) => {
        const exists = state.userList.find(title => title.title === obj.title)
        if (!exists) {
            setItem("SETLIST", [...state.userList, obj])
            e.target.innerHTML = "✔"
        } else {
            const ul = state.userList
            ul.splice(ul.indexOf(exists), 1)
            e.target.innerHTML = "➕"
            setItem("SETLIST", ul)
        }
    }

    const setTitle = (title) => {
        if (title !== "close") {
            setItem("SETSELECTED", title)   
            setItem("SETSEE", true)   
        } else {
            setItem("SETSEE", false)   
        }
    }

    return <Provider
        value={{
            state,
            setTitle,
            setUserList
        }}>
        {children} </Provider>;
};

export { store, AppState }