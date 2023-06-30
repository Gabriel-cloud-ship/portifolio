import { ReactElement, useEffect, useState } from "react";

import LeftIcon from "../assets/icons/mingcute_left-line.svg";
import RightIcon from "../assets/icons/mingcute_right-line.svg";

import "../styles/Carrousel.css";

interface ICarrouselProps {
    items: ReactElement[];
}

function Carrousel({ items }: ICarrouselProps) {
    const [index, setIndex] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
      const id = setInterval(() => {
        setIndex((prevNumber) => (prevNumber + 1) % items.length);
      }, 8000);
  
      setIntervalId(id);
  
      return () => {
        clearInterval(id);
      };
    }, [items.length]);
  
    const handleIncrement = () => {
      setIndex((prevNumber) => (prevNumber + 1) % items.length);
      resetInterval();
    };
  
    const handleDecrement = () => {
      setIndex((prevNumber) => prevNumber - 1 >= 0 ? prevNumber - 1 : items.length - 1);
      resetInterval();
    };
  
    const resetInterval = () => {
      clearInterval(intervalId!);
      const newIntervalId = setInterval(() => {
        setIndex((prevNumber) => (prevNumber + 1) % items.length);
      }, 8000);
      setIntervalId(newIntervalId);
    };

    return (
        <main className="carrousel">
            <section className="content">
                {items[index]}
            </section>
            <div className="carrousel-actions">
                <button onClick={handleDecrement} title="Voltar">
                    <img alt="left" src={LeftIcon} />
                </button>
                <button onClick={handleIncrement} title="Avançar">
                    <img alt="right" src={RightIcon} />
                </button>
            </div>
        </main>
    );
}

export default Carrousel;