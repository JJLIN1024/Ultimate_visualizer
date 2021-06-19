import React, { useState, useEffect } from "react";
import { getMergeSortAnimations } from "./SortingAlgorithms/MergeSortVisualizer.js";
import { getBubbleSortAnimations } from "./SortingAlgorithms/BubbleSortVisualizer.js";
import { getHeapSortAnimations } from "./SortingAlgorithms/HeapSortVisualizer.js";
import { getQuickSortAnimations } from "./SortingAlgorithms/QuickSortVisualizer.js";
import { getSelectionSortAnimations } from "./SortingAlgorithms/SelectionSortVisualizer.js";
import { getInsertionSortAnimations } from "./SortingAlgorithms/InsertionSortVisualizer.js";
import { getShellSortAnimations } from "./SortingAlgorithms/ShellSortVisualizer.js";
import { getGnomeSortAnimations } from "./SortingAlgorithms/GnomeSortVisualizer.js";
import { getCocktailShakerSortAnimations } from "./SortingAlgorithms/CocktailShakerSortVisualizer.js";
import { getBogoSortAnimations } from "./SortingAlgorithms/BogoSortVisualizer.js";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import "./css/SortingVisualizer.css";

// This is the main color of the array bars.
const PRIMARY_COLOR = "black";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";
const barMinHeight = 5;
const barMaxHeight = 600;

const SortingVisualizer = () => {
    const [Data, setData] = useState([]);
    const [animationSpeed, setAnimationSpeed] = useState(10);
    const [arrayBars, setArrayBars] = useState(100);
    const [arrayBarsWidth, setArrayBarsWidth] = useState(4);
    const [inAnimation, setInAnimation] = useState(false);

    const handleBarsChange = (event, newValue) => {
        setArrayBars(newValue);
    };

    const handleAnimationSpeedChange = (event, newValue) => {
        setAnimationSpeed(newValue);
    };

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const arraysAreEqual = (arrayOne, arrayTwo) => {
        if (arrayOne.length !== arrayTwo.length) return false;
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] !== arrayTwo[i]) {
                return false;
            }
        }
        return true;
    };

    const resetArray = () => {
        const array = [];
        for (let i = 0; i < arrayBars; i++) {
            array.push(randomIntFromInterval(barMinHeight, barMaxHeight));
        }
        setData(array);
    };

    const resetBarsWidth = () => {
        const ContainerWidth = document.getElementById("array-container").parentNode.offsetWidth;
        const arrayBarWidth = ((ContainerWidth - arrayBars) * 0.57) / arrayBars;
        setArrayBarsWidth(arrayBarWidth);
    };

    useEffect(() => {
        resetArray();
        resetBarsWidth();
    }, [arrayBars]);


   

    const mergeSort = () => {
        const animations = getMergeSortAnimations(Data);


        for (let i = 0; i < animations.length; i++) {
            
            const arrayBars = document.getElementsByClassName("array-bar");

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
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange =
                animations[i][2] === "color-change-start" || animations[i][2] === "color-change-revert";
            if (isColorChange) {
                const barOneIdx = animations[i][0];
                const barTwoIdx = animations[i][1];
                console.log(arrayBars);
                console.log(barOneIdx, barTwoIdx);
                const barOneStyle = arrayBars.item(barOneIdx).style;
                const barTwoStyle = arrayBars.item(barTwoIdx).style;
                const color = animations[i][2] === "color-change-start" ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const barOneIdx = animations[i][0];
                    const newHeight = animations[i][1];
                    const barOneStyle = arrayBars.item(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }    
                }, i * animationSpeed);
            }
        }
    };

    const heapSort = () => {
        const animations = getHeapSortAnimations(Data);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange =
                animations[i][2] === "color-change-start" || animations[i][2] === "color-change-revert";
            if (isColorChange) {
                const barOneIdx = animations[i][0];
                const barTwoIdx = animations[i][1];
                const barOneStyle = arrayBars.item(barOneIdx).style;
                const barTwoStyle = arrayBars.item(barTwoIdx).style;
                const color = animations[i][2] === "color-change-start" ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const barOneIdx = animations[i][0];
                    const newHeight = animations[i][1];
                    const barOneStyle = arrayBars.item(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            }
        }
    };

    const bubbleSort = () => {
        const animations = getBubbleSortAnimations(Data);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange =
                animations[i][2] === "color-change-start" || animations[i][2] === "color-change-revert";
            if (isColorChange) {
                const barOneIdx = animations[i][0];
                const barTwoIdx = animations[i][1];
                const barOneStyle = arrayBars.item(barOneIdx).style;
                const barTwoStyle = arrayBars.item(barTwoIdx).style;
                const color = animations[i][2] === "color-change-start" ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const barOneIdx = animations[i][0];
                    const newHeight = animations[i][1];
                    const barOneStyle = arrayBars.item(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            }
        }
    };

    const selectionSort = () => {
        const animations = getSelectionSortAnimations(Data);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange =
                animations[i][2] === "color-change-start" || animations[i][2] === "color-change-revert";
            if (isColorChange) {
                const barOneIdx = animations[i][0];
                const barTwoIdx = animations[i][1];
                const barOneStyle = arrayBars.item(barOneIdx).style;
                const barTwoStyle = arrayBars.item(barTwoIdx).style;
                const color = animations[i][2] === "color-change-start" ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const barOneIdx = animations[i][0];
                    const newHeight = animations[i][1];
                    const barOneStyle = arrayBars.item(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            }
        }
    };

    const insertionSort = () => {
        const animations = getInsertionSortAnimations(Data);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange =
                animations[i][2] === "color-change-start" || animations[i][2] === "color-change-revert";
            if (isColorChange) {
                const barOneIdx = animations[i][0];
                const barTwoIdx = animations[i][1];
                const barOneStyle = arrayBars.item(barOneIdx).style;
                const barTwoStyle = arrayBars.item(barTwoIdx).style;
                const color = animations[i][2] === "color-change-start" ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationSpeed);
                if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
            } else {
                setTimeout(() => {
                    const barOneIdx = animations[i][0];
                    const newHeight = animations[i][1];
                    const barOneStyle = arrayBars.item(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * animationSpeed);
                if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
            }
        }
    };

    const shellSort = () => {
        const animations = getShellSortAnimations(Data);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange =
                animations[i][2] === "color-change-start" || animations[i][2] === "color-change-revert";
            if (isColorChange) {
                const barOneIdx = animations[i][0];
                const barTwoIdx = animations[i][1];
                const barOneStyle = arrayBars.item(barOneIdx).style;
                const barTwoStyle = arrayBars.item(barTwoIdx).style;
                const color = animations[i][2] === "color-change-start" ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const barOneIdx = animations[i][0];
                    const newHeight = animations[i][1];
                    const barOneStyle = arrayBars.item(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            }
        }
    };

    const bogoSort = () => {
        const animations = getBogoSortAnimations(Data);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange =
                animations[i][2] === "color-change-start" || animations[i][2] === "color-change-revert";
            if (isColorChange) {
                const barOneIdx = animations[i][0];
                const barTwoIdx = animations[i][1];
                const barOneStyle = arrayBars.item(barOneIdx).style;
                const barTwoStyle = arrayBars.item(barTwoIdx).style;
                const color = animations[i][2] === "color-change-start" ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const barOneIdx = animations[i][0];
                    const newHeight = animations[i][1];
                    const barOneStyle = arrayBars.item(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        alert("Bogo sort is a random sort which probably not gonna to finish ... ");
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            }
        }

        
    };

    const cocktailShakerSort = () => {
        const animations = getCocktailShakerSortAnimations(Data);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange =
                animations[i][2] === "color-change-start" || animations[i][2] === "color-change-revert";
            if (isColorChange) {
                const barOneIdx = animations[i][0];
                const barTwoIdx = animations[i][1];
                const barOneStyle = arrayBars.item(barOneIdx).style;
                const barTwoStyle = arrayBars.item(barTwoIdx).style;
                const color = animations[i][2] === "color-change-start" ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const barOneIdx = animations[i][0];
                    const newHeight = animations[i][1];
                    const barOneStyle = arrayBars.item(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            }
        }
    };


    const gnomeSort = () => {
        const animations = getGnomeSortAnimations(Data);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange =
                animations[i][2] === "color-change-start" || animations[i][2] === "color-change-revert";
            if (isColorChange) {
                const barOneIdx = animations[i][0];
                const barTwoIdx = animations[i][1];
                const barOneStyle = arrayBars.item(barOneIdx).style;
                const barTwoStyle = arrayBars.item(barTwoIdx).style;
                const color = animations[i][2] === "color-change-start" ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        alert("Bogo sort is a random sort which probably not gonna to finish ... ");
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            } else {
                setTimeout(() => {
                    const barOneIdx = animations[i][0];
                    const newHeight = animations[i][1];
                    const barOneStyle = arrayBars.item(barOneIdx).style;
                    barOneStyle.height = `${newHeight}px`;
                    if(i !== animations.length - 1) {
                        setInAnimation(true);
                    } else {
                        alert("Bogo sort is a random sort which probably not gonna to finish ... ");
                        setInAnimation(false)
                    }
                }, i * animationSpeed);
            }
        }
    };

    const handleArrayHeight = (value) => {
        const windowHeight = window.innerHeight;
        const ratio = (value - barMinHeight) / (barMaxHeight - barMinHeight)
        return windowHeight * ratio * 0.95;
    }

    return (
        <Container maxWidth="lg" style={{ height: "100vh" }} className="sort-Container">
            <div className="wrapper">
                <div className="control">
                    <div className="upperControl">
                        <Typography gutterBottom> Bars </Typography>
                        <Slider
                            value={arrayBars}
                            onChange={handleBarsChange}
                            aria-labelledby="discrete-slider"
                            min={10}
                            max={170}
                            marks
                            valueLabelDisplay="auto"
                            track="inverted"
                            disabled={inAnimation}
                        />
                        <Typography gutterBottom> Speed </Typography>
                        <Slider
                            value={animationSpeed}
                            onChange={handleAnimationSpeedChange}
                            aria-labelledby="discrete-slider"
                            min={0.1}
                            max={100}
                            marks
                            valueLabelDisplay="auto"
                            // track="inverted"
                            scale={(x) => 100 - x + 0.1}
                            disabled={inAnimation}
                        />
                    </div>
                    <ButtonGroup color="primary" aria-label="outlined primary button group" orientation="vertical">
                        <Button disabled={inAnimation} color="secondary" variant="contained" onClick={resetArray}>
                            Generate New Array
                        </Button>
                        <Button onClick={mergeSort} disabled={inAnimation}>Merge Sort</Button>
                        <Button onClick={quickSort} disabled={inAnimation}>Quick Sort</Button>
                        <Button onClick={heapSort} disabled={inAnimation}>Heap Sort</Button>
                        <Button onClick={bubbleSort} disabled={inAnimation}>Bubble Sort</Button>
                        <Button onClick={selectionSort} disabled={inAnimation}>Selection Sort</Button>
                        <Button onClick={insertionSort} disabled={inAnimation}>Insertion Sort</Button>
                        <Button onClick={shellSort} disabled={inAnimation}>Shell Sort</Button>
                        <Button onClick={bogoSort} disabled={inAnimation}>Bogo Sort</Button>
                        <Button onClick={cocktailShakerSort} disabled={inAnimation}>Cocktail Shaker Sort</Button>
                        <Button onClick={gnomeSort} disabled={inAnimation}>Gnome sort</Button>
                    </ButtonGroup>
                </div>
                <div id="array-container" className="array-container">
                    {Data.map((value, idx) => (
                        <div
                            className="array-bar"
                            key={idx}
                            style={{
                                backgroundColor: PRIMARY_COLOR,
                                height: handleArrayHeight(value),
                                width: `${arrayBarsWidth}px`,
                            }}></div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default SortingVisualizer;
