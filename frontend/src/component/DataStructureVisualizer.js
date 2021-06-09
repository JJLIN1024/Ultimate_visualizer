import React, { useReducer, useEffect, useState } from "react";
import "./css/DS_Visualizer_css/DataStructureVisualizer.css";
import "./css/DS_Visualizer_css/BSTStyle.css";
import "./css/DS_Visualizer_css/popup.css";
import "./css/DS_Visualizer_css/mainMenuStyle.css";
import Menu from "./DSV_components/Menu";
import BSTree from "./DSV_components/bst/BSTree";
import MinH from "./DSV_components/minHeap/MinH";
import MaxH from "./DSV_components/maxHeap/MaxH";
import TrieMain from "./DSV_components/trie/TrieMain";
import AVLTree from "./DSV_components/avl/AVLTree";
import RedBTree from "./DSV_components/redBlack/RedBTree";
import usePopup from "../hooks/usePopup";
import MainPopup from "./DSV_components/MainPopup";

const initialState = {
    menu: true,
    bst: false,
    trie: false,
    minheap: false,
    maxheap: false,
    avl: false,
    redb: false,
};

const reducer = (state, action) => {
    switch (action) {
        case "menu":
            return { ...initialState, menu: true };
        case "bst":
            return { ...initialState, bst: true, menu: false };
        case "trie":
            return { ...initialState, trie: true, menu: false };
        case "minheap":
            return { ...initialState, minheap: true, menu: false };
        case "maxheap":
            return { ...initialState, maxheap: true, menu: false };
        case "avl":
            return { ...initialState, avl: true, menu: false };
        case "redb":
            return { ...initialState, redb: true, menu: false };
        default:
            return state;
    }
};

function DataStructureVisualizer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [popup, togglePopup] = usePopup();

    useEffect(() => {
        togglePopup();
    }, []);

    return (
        <div className="DataStructureVisualizer">
            {state.menu && <Menu selector={dispatch} togglePopup={togglePopup} />}
            {state.bst && <BSTree selector={dispatch} />}
            {state.trie && <TrieMain selector={dispatch} />}
            {state.minheap && <MinH selector={dispatch} />}
            {state.maxheap && <MaxH selector={dispatch} />}
            {state.avl && <AVLTree selector={dispatch} />}
            {state.redb && <RedBTree selector={dispatch} />}
            {popup ? <MainPopup toggle={togglePopup} /> : null}
        </div>
    );
}

export default DataStructureVisualizer;
