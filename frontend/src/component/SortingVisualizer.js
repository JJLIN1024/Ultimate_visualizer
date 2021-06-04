import React,  { useState, useEffect } from 'react';
import {getMergeSortAnimations} from './SortingAlgorithms/MergeSortVisualizer.js';
import {getBubbleSortAnimations} from './SortingAlgorithms/BubbleSortVisualizer.js';
import {getHeapSortAnimations} from './SortingAlgorithms/HeapSortVisualizer.js';
import {getQuickSortAnimations} from './SortingAlgorithms/QuickSortVisualizer.js';
import {getSelectionSortAnimations} from './SortingAlgorithms/SelectionSortVisualizer.js';
import {getInsertionSortAnimations} from './SortingAlgorithms/InsertionSortVisualizer.js';
import {getShellSortAnimations} from './SortingAlgorithms/ShellSortVisualizer.js';
import {getGnomeSortAnimations} from './SortingAlgorithms/GnomeSortVisualizer.js';
import {getGccSortAnimations} from './SortingAlgorithms/GccSortVisualizer.js';
import {getCocktailShakerSortAnimations} from './SortingAlgorithms/CocktailShakerSortVisualizer.js';
import {getTimSortAnimations} from './SortingAlgorithms/TimSortVisualizer.js';
import {getBogoSortAnimations} from './SortingAlgorithms/BogoSortVisualizer.js';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import './css/SortingVisualizer.css';

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const SortingVisualizer = () => {
  const [Data, setData] = useState([]);
  const [animationSpeed, setAnimationSpeed] = useState(10);
  const [arrayBars, setArrayBars] = useState(100);
  const [arrayBarsWidth, setArrayBarsWidth] = useState(4);
  
  const handleBarsChange = (event, newValue) => {
    setArrayBars(newValue);
  };

  const handleAnimationSpeedChange = (event, newValue) => {
    setAnimationSpeed(newValue);
  };

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
    for (let i = 0; i < arrayBars; i++) {
      array.push(randomIntFromInterval(5, 650));
    }
    setData(array);
  };

  const resetBarsWidth = () => {
    const ContainerWidth = document.getElementById('array-container').parentNode.offsetWidth;
    const arrayBarWidth = (ContainerWidth - arrayBars) * 0.57 / arrayBars; 
    setArrayBarsWidth(arrayBarWidth);
  };

  useEffect(() => {
    resetArray();
    resetBarsWidth();
  }, [arrayBars]);

  const mergeSort = () => {
    const animations = getMergeSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const quickSort = () => {
    const animations = getQuickSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        console.log(arrayBars);
        console.log(barOneIdx, barTwoIdx);
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const heapSort = () => {
    const animations = getHeapSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const selectionSort = () => {
    const animations = getSelectionSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const insertionSort = () => {
    const animations = getInsertionSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const shellSort = () => {
    const animations = getShellSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const bogoSort = () => {
    const animations = getBogoSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const timSort = () => {
    const animations = getTimSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const cocktailShakerSort = () => {
    const animations = getCocktailShakerSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const gccSort = () => {
    const animations = getGccSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  const gnomeSort = () => {
    const animations = getGnomeSortAnimations(Data);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = (animations[i][2] === 'color-change-start' || animations[i][2] === 'color-change-revert');
      if (isColorChange) {
        const barOneIdx = animations[i][0];
        const barTwoIdx = animations[i][1];
        const barOneStyle = arrayBars.item(barOneIdx).style;
        const barTwoStyle = arrayBars.item(barTwoIdx).style;
        const color = (animations[i][2] === 'color-change-start') ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const newHeight = animations[i][1];
          const barOneStyle = arrayBars.item(barOneIdx).style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }
  };

  return (
    <Container maxWidth='lg' style={{ height: '100vh'}} className="sort-Container">
      <div className="wrapper">
        <div className="control">
          <div className="upperControl">
            <Typography gutterBottom> Bars </Typography>
            <Slider value={arrayBars}
                      onChange={handleBarsChange}
                      aria-labelledby="discrete-slider"
                      min={10}
                      max={170}
                      marks
                      valueLabelDisplay="auto"
                      track='inverted'
            />
            <Typography gutterBottom> Speed </Typography>
            <Slider value={animationSpeed}
                      onChange={handleAnimationSpeedChange}
                      aria-labelledby="discrete-slider"
                      min={0.1}
                      max={100}
                      marks
                      valueLabelDisplay="auto"
                      // track="inverted"
                      scale={(x) => 100 - x + 0.1}
            />
          </div>
          <ButtonGroup color="primary" aria-label="outlined primary button group" orientation="vertical">
                  <Button color="secondary" variant="contained"onClick={resetArray}>Generate New Array</Button>
                  <Button onClick={mergeSort}>Merge Sort</Button>
                  <Button onClick={quickSort}>Quick Sort</Button>
                  <Button onClick={heapSort}>Heap Sort</Button>
                  <Button onClick={bubbleSort}>Bubble Sort</Button>
                  <Button onClick={selectionSort}>Selection Sort</Button>
                  <Button onClick={insertionSort}>Insertion Sort</Button>
                  <Button onClick={shellSort}>Shell Sort</Button>
                  <Button onClick={bubbleSort}>Radix Sort</Button>
                  <Button onClick={bubbleSort}>Radix Sort</Button>
                  <Button onClick={bogoSort}>Bogo Sort</Button>
                  <Button onClick={timSort}>Tim Sort</Button>
                  <Button onClick={cocktailShakerSort}>Cocktail Shaker Sort</Button>
                  <Button onClick={gccSort}>std::sort(gcc)</Button>
                  <Button onClick={gnomeSort}>Gnome sort</Button>
          </ButtonGroup>
        </div>
        <div id="array-container" className="array-container">
            {Data.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                  width: `${arrayBarsWidth}px`,
                }}></div>
            ))}
          </div>
        </div>
    </Container>
  )
}

export default SortingVisualizer
