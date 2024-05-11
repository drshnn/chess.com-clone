import { useNavigate } from "react-router-dom"

function Landing() {
    const navigate = useNavigate();
    return (
        <div className="h-full max-w-[48rem] flex justify-between items-center m-auto">
            <img src={"/chess_board.png"} className="max-w-96 rounded-md" alt="chess board image" />
            <div className="flex flex-col items-center p-8 gap-10">
                <h1 className="text-3xl text-white">Play Chess Online</h1>
                <button className="w-full h-12 bg-blue-600 text-white rounded-md hover:bg-blue-500" onClick={() => { navigate('/game') }}>Play Online</button>
            </div>
        </div>
    )
}

export default Landing
