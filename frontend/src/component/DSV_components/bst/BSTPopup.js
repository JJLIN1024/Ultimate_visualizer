import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";

function BSTPopup(props) {
    return (
        <div className="popup">
            <div className="inner">
                <h1>Help</h1>
                <CancelIcon className="icon" onClick={props.toggle} width="35px" height="35px" />
                <div>
                    <ul className="help-list">
                        <li>
                            <button>Insert</button> Inserts a node
                        </li>
                        <li>
                            <button>Search</button> Searches and highlights the value
                        </li>
                        <li>
                            <button>Delete</button> Deletes the node
                        </li>
                        <li>
                            <button>Random</button> Inserts n random nodes
                        </li>
                        <li>
                            <button>Clear</button> Removes all nodes
                        </li>
                        <li>
                            <button>Traversal</button> Performs chosen traversal
                        </li>
                        <li>
                            <button>Balance</button> Balances the BST
                        </li>

                        <li>
                            <button>Check</button>Checks whether BST Tree is Balanced, Complete, Perfect or Full
                        </li>
                    </ul>
                    <a
                        href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="link-button">Learn About Binary Search Trees Trees</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default BSTPopup;
