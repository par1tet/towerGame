import { useEffect, useRef, useState } from "react"
import cl from './GameField.module.css'
import imga from './2024-03-23_16-53.png'

export const GameField = ({}) => {
    const canvasRef = useRef(null)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function move(e:KeyboardEvent): undefined {
        console.log(e.key)
        if(e.key === 'w') setY(prev => prev+10)
        if(e.key === 'a') setX(prev => prev+10)
        if(e.key === 's') setY(prev => prev-10)
        if(e.key === 'd') setX(prev => prev-10)
    }

    useEffect(() => {
        if (!canvasRef.current) return undefined;

        (canvasRef.current as HTMLCanvasElement).width = window.innerWidth;
        (canvasRef.current as HTMLCanvasElement).height = window.innerHeight;

        const ctx = (canvasRef.current as HTMLCanvasElement).getContext('2d')

        if (!ctx) return undefined;

        const image = new Image();

        image.onload = () => ctx.drawImage(image, x, y, window.innerWidth * 2, window.innerHeight * 2);
        image.src = imga;

        window.addEventListener('keydown', move)

        return () => {
            window.removeEventListener('keydown', move)
        }
    }, [x,y])

    return (<>
        <canvas id="gameField" ref={canvasRef} className={cl.GameField}></canvas>
    </>)
}