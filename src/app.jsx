import { useState, useEffect } from "react";
import { Board, NewGame } from "./components";
import { styles } from "./components/style";

const App = () => {
  const [login, setLogin] = useState(false);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [alert, setAlert] = useState(false);
  const buttonActions = [
    { top: "50", text: "New game", img: "fa-right-left" },
    { top: "350", text: "Rol dice", img: "fa-dice-four" },
    { top: "420", text: "Hold", img: "fa-right-left" },
  ];

  useEffect(() => {
    const storedPlayer1 = localStorage.getItem("player1");
    const storedPlayer2 = localStorage.getItem("player2");

    if (storedPlayer1 && storedPlayer2) {
      setPlayer1(storedPlayer1);
      setPlayer2(storedPlayer2);
      setLogin(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (player1.trim() !== "" && player2.trim() !== "") {
      setLogin(true);
      localStorage.setItem("player1", player1);
      localStorage.setItem("player2", player2);
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      <div
        className={`main ${login ? "flex" : "hidden"} relative max-w-[1000px] w-full overflow-hidden h-[550px] ${
          styles.center
        } bg-white rounded-[10px]`}
      >
        {buttonActions.map(({ top, text, img }, index) => (
          <NewGame key={index} top={top} text={text} img={img} />
        ))}
        <Board playerName={player1} currentScore={12} playerScore={33} />
        <Board playerName={player2} currentScore={43} playerScore={53} />
      </div>
      <div className={`alert ${alert ? "flex" : "hidden"} w-fit bg-red-600 text-white py-2 px-4 text-[25px] absolute top-[100px]`}>
        Please enter players name !
      </div>
      <div className={`login ${login ? "hidden" : "flex"}  flex-col bg-black w-fit h-fit rounded-[10px] p-[20px]`}>
        <form onSubmit={(e) => handleLogin(e)}>
          <div className="inputs flex gap-[10px]">
            <label>
              <p className="text-[24px]">Player 1</p>
              <input
                type="text"
                onChange={(e) => setPlayer1(e.target.value)}
                className="w-[200px] h-[35px] rounded-[10px] mt-[8px] text-[#000] text-[20px] px-[10px]"
              />
            </label>
            <label>
              <p className="text-[24px]">Player 1</p>

              <input
                type="text"
                onChange={(e) => setPlayer2(e.target.value)}
                className="w-[200px] h-[35px] rounded-[10px] mt-[8px] text-[#000] text-[20px] px-[10px]"
              />
            </label>
          </div>
          <button className="w-full py-[10px] px-[30px] bg-white rounded-[10px] text-[#000] text-[20px] mt-[20px]">Start game</button>
        </form>
      </div>
    </>
  );
};

export default App;
