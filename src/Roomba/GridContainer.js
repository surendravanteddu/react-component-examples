import {Grid} from "./Grid";
import {useState} from "react";

const isValidCell = (x, y, size) => {
    return (x < size && x > -1) && (y < size && y > -1)
}

const positions = ["down", "left", "top", "right"]

export const GridContainer = ({size = 10}) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [direction, setDirection] = useState(0);

    const onMove = () => {
        let currX = x;
        let currY = y;

        if (direction === 0) {
            currX++
        } else if (direction === 1) {
            currY--
        } else if (direction === 2) {
            currX--
        }else if (direction === 3) {
            currY++
        }

        if (isValidCell(currX, currY, size)) {
            setX(currX)
            setY(currY)
        } else {
            onDirection()
        }
    }

    const onDirection = () => {
       if (direction < 3) {
           setDirection(direction + 1)
       } else {
           setDirection(0)
       }
    }

    return (
        <div>
            <div style={{margin: '10px'}}>
            <button onClick={onDirection}>Direction</button>
            <button onClick={onMove}>Forward</button>
            </div>
            <Grid size={size} direction={positions[direction]} x={x} y={y}/>
        </div>
        )
}
