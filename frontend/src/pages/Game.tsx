import { useEffect, useState } from "react";
import { ChessBoard } from "../components/ChessBoard"
import { useSocket } from "../hooks/useSocket"
import { Chess } from "chess.js";

export const INIT_GAME = 'init_game';
export const MOVE = 'move';
export const GAME_OVER = 'game_over'

function Game() {
    const socket = useSocket();
    const [chess, setChess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board());
    useEffect(() => {
        if (!socket) {
            return;
        }
        socket.onmessage = (event: MessageEvent) => {
            const message = JSON.parse(event.data);
            console.log(message);
            switch (message.type) {
                case INIT_GAME:
                    setChess(new Chess())
                    setBoard(chess.board())
                    console.log("game initialized");
                    break;
                case MOVE:
                    const move = message.payload;
                    chess.move(move);
                    setBoard(chess.board());
                    break;
                case GAME_OVER:
                    console.log("game over");
                    break;
            }
        };
    }, [socket])
    if (!socket) return <div>connecting...</div>
    return (
        <div className="max-w-screen-lg h-screen mx-auto flex gap-6 justify-center items-center text-white">
            <div className="flex max-w-screen-md flex-5 items-center justify-center">
                <ChessBoard board={board} />
            </div>
            <div className="buttons flex flex-1 flex-col w-full ">
                <button className="w-full p-4  flex items-center justify-center h-12 bg-blue-600 text-white rounded-md hover:bg-blue-500" onClick={() => {
                    socket.send(JSON.stringify({
                        type: INIT_GAME
                    }))
                }}>Play</button>
            </div>
        </div>

    )
}

export default Game
