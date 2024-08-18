import { useEffect, useRef } from "react"
import cl from './GameField.module.css'

export const GameField = ({}) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (!canvasRef.current) return undefined;

        (canvasRef.current as HTMLCanvasElement).width = window.innerWidth;
        (canvasRef.current as HTMLCanvasElement).height = window.innerHeight;

        const ctx = (canvasRef.current as HTMLCanvasElement).getContext('2d')

        if (!ctx) return undefined;

        ctx.fillRect(0,0,window.innerWidth,window.innerHeight)
    }, [])

    return (<>
        <canvas id="gameField" ref={canvasRef} className={cl.GameField}></canvas>
    </>)
}