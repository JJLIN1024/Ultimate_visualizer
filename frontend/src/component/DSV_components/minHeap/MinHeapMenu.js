import React, { useRef } from "react";

function MinHeapMenu(props) {
    const insertRef = useRef(null);
    const removeRef = useRef(null);
    const randomRef = useRef(null);

    const insert = () => {
        props.insert(insertRef.current.value);
    };

    const remove = () => {
        props.remove(removeRef.current.value);
    };

    const random = () => {
        props.random(randomRef.current.value);
    };

    const clear = () => {
        props.random(0);
    };

    return (
        <div className="menu">
            <ul id="mainMinH">
                <li>
                    <input
                        placeholder="Insert"
                        ref={insertRef}
                        type="number"
                        onKeyUp={(e) => {
                            if (e.keyCode === 13) insert();
                        }}
                    />

                    <button onClick={insert} className="insert">
                        Insert
                    </button>
                </li>
                <li>
                    <button onClick={props.extract}>Extract</button>
                </li>
                <li>
                    <input
                        placeholder="Delete"
                        ref={removeRef}
                        type="number"
                        onKeyUp={(e) => {
                            if (e.keyCode === 13) remove();
                        }}
                        className={props.delError}
                    />

                    <button onClick={remove} className="delete">
                        Delete
                    </button>
                </li>
                <li>
                    <input
                        placeholder="Node count"
                        type="number"
                        ref={randomRef}
                        onKeyUp={(e) => {
                            if (e.keyCode === 13) random();
                        }}
                    />
                    <button onClick={random}>Random</button>
                </li>
                <li>
                    <button onClick={clear}>Clear</button>
                </li>
            </ul>
        </div>
    );
}

export default MinHeapMenu;
