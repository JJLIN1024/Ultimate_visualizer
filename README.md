# Ultimate visualizer

## Table of Contents

-   [Overview](#overview)
-   [Getting Started](#getting-started)
    -   [Run Node Server](#run-node-server)
    -   [Run Client Server](#run-client-server)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

1. Install [Node.js](https://nodejs.org/en/download/).
2. Install [npm](https://www.npmjs.com/get-npm).
3. Install depenencies for frontend and backend respectively.

   For frontend:
    ```bash
        cd frontend && npm install
    ```
    For backend:
    ```bash
        cd backend && npm install
    ```

### Run Node Server

1. Change into the repo directory: `cd Ultimate_visualizer`
2. Run the node server:
    ```bash
        npm run server
    ```

### Run Client Server

1. Change into the repo directory: `cd Ultimate_visualizer`
2. Run the node server:
    ```bash
        npm start
    ```

## Roadmap

### Frontend

-   [x] Layout -> React
    -   [x] NavBar
    -   [x] Sorting's Part
    -   [ ] Data structure's visualization
        -   [ ] Stack
        -   [ ] Queue
        -   [x] BST
        -   [x] Min Heap
        -   [x] Max Heap
        -   [x] AVL tree
        -   [x] Trie
        -   [x] Red black tree
    -   [x] Registration form
    -   [x] (optional) Email subscription
-   [ ] API call -> Axios
    -   [ ] Sorting's Part
    -   [ ] Data structure's visualization
    -   [ ] Registration form
    -   [ ] (optional) Email subscription

### Backend

-   [ ] Control

    -   [ ] Sorting algorithm implmentation
    -   [ ] Data structure's visualization implmentation
    -   [ ] BST
    -   [ ] Heap
    -   [ ] Stack
    -   [ ] Queue

    #### (DS down below are optional)

    -   [ ] Linked-List
    -   [ ] Leftist heap

-   [ ] Model
    -   [ ] User Registration
    -   [ ] (optional) Email subscription
-   [ ] Deploy
    -   [ ] Hoist our websitee to the moon! (Github, MS, firebase, Heroku ... )
