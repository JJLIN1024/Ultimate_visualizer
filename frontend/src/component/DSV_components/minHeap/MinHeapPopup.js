import React from "react";
import { Icon } from "@iconify/react";
import closeCircleF from "@iconify/icons-jam/close-circle-f";

function MinHeapPopup(props) {
    return (
        <div className="popup">
            <div className="inner">
                <h1>Help</h1>
                <Icon className="icon" onClick={props.toggle} width="35px" height="35px" icon={closeCircleF} />
                <div>
                    <ul className="help-list">
                        <li>
                            <button>Insert</button> Inserts a node
                        </li>
                        <li>
                            <button>Extract</button> Extracts the Minimum value
                        </li>
                        <li>
                            <button>Delete</button> Deletes the node specified
                        </li>
                        <li>
                            <button>Random</button> Inserts n random nodes
                        </li>
                        <li>
                            <button>Clear</button> Removes all nodes
                        </li>
                    </ul>
                    <a href="https://www.geeksforgeeks.org/binary-heap/" target="_blank" rel="noopener noreferrer">
                        <button className="link-button">Learn About Min Heap</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MinHeapPopup;
