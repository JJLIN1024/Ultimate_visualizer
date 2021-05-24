import React,  { useState } from 'react';
// import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import './css/SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


const Sorting = () => {

  const [Data, setData] = useState([]);
  const randomIntFromInterval = (min,max) => {
    return Math.floor( Math.random()*  ( max - min + 1 ) + min );
  }
  const arraysAreEqual = (arrayOne, arrayTwo) => {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }

  const resetArray = () => {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    setData(array);
  };

  return (
    <div className="array-container">
        {Data.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <button onClick={resetArray}>Generate New Array</button>
        {/* <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.testSortingAlgorithms()}> */}
          {/* Test Sorting Algorithms (BROKEN) */}
        {/* </button> */}
    </div>
  )
}

export default Sorting
