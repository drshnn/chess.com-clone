import { Color, PieceSymbol, Square } from "chess.js";

export function ChessBoard({ board }: { board: ({ square: Square, type: PieceSymbol, color: Color } | null)[][] }) {
    return (
        <div className="text-black">
            {board.map((row, i) => {
                return <div className="flex items-center justify-center" key={i}>
                    {
                        row.map((square, j) => {

                            return <div className={`w-16 h-16 flex items-center justify-center ${(i + j) % 2 === 0 ? 'bg-blue-300' : 'bg-white'}`} key={j}>
                                {square ? square.type : ''}
                            </div>
                        })
                    }
                </div>

            }
            )}
        </div>
    )
}
