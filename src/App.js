import "./App.scss";
import { useState, useEffect } from "react";
import CardContainer from './layout/CardContainer';
import LoadingPage from "./pages/LoadingPage";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [newvalueX, setNewvalueX] = useState(0);
  const [newvalueY, setNewvalueY] = useState(0);
  const [height, setHeigth] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const setFromEvent = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setPageX(e.pageX - window.innerWidth / 2);
      setPageY(e.pageY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", setFromEvent);
    setHeigth(23 / window.innerHeight);
    setWidth(23 / window.innerWidth);
    setNewvalueX(width * pageX * -1);
    setNewvalueY(height * pageY * -1);
  }, []);
  useEffect(() => {
    if (mousePosition) {
      setNewvalueX(width * pageX * -1);
      setNewvalueY(height * pageY * -1);
    }
  }, [mousePosition]);
  useEffect(() => {
    setHeigth(23 / window.innerHeight);
    setWidth(23 / window.innerWidth);
  }, [window.innerHeight, window.innerWidth]);
  useEffect(() => {
	setTimeout(() => {
		
	}, 2000);
  }, []);
  return (
    <>
      <div
        className="animated-background"
        style={{
          backgroundPosition: `calc(50% + ${newvalueX}px) calc(50% + ${newvalueY}px)`,
        }}
      ></div>
      <div className="container">
        <CardContainer />
      </div>
    </>
  );
};

export default App;
