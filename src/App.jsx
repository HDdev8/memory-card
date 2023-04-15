import {useState} from "react";
import "./App.css";
import Card from "./components/Card";
import IMAGES from "../images";

const App = () => {
  const [imageSet, setImageSet] = useState(IMAGES);
  const [clickHistory, setClickHistory] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [scoreHistory, setScoreHistory] = useState([0]);

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  const updateIds = (arr) => {
    const shuffledArray = shuffleArray([...arr]);
    for (let i = 0; i < shuffledArray.length; i++) {
      shuffledArray[i].id = i;
    }
    return shuffledArray;
  };

  const handleClick = (e) => {
    setClickHistory(clickHistory.concat(e.target.alt));
    const alreadyClicked = clickHistory.find((c) => c === e.target.alt);

    if (!alreadyClicked) {
      setCurrentScore(currentScore + 1);
    } else if (alreadyClicked) {
      setScoreHistory(scoreHistory.concat(currentScore));
      setCurrentScore(0);
      setClickHistory([]);
    }

    const updatedArray = updateIds(imageSet);
    setImageSet(updatedArray);
  };

  const sortedHistory = [...scoreHistory].sort((a, b) => a - b);
  const highScore = sortedHistory[sortedHistory.length - 1];

  return (
    <>
      <div className="heading">
        <h1>Action Hero Memory Game</h1>
        <div id="directions">
          Click on each card only once until you get to 12!
        </div>
        <h3 id="current">Current Score: {currentScore}</h3>
        <h3 id="high">High Score: {highScore}</h3>
      </div>
      <div className="grid gap-2 grid-cols-4 grid-rows-3">
        {" "}
        {imageSet.map((image) => (
          <Card key={image.id} image={image} handleClick={handleClick} />
        ))}
      </div>
    </>
  );
};

export default App;
