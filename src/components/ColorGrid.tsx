import { useState } from 'react';

const ColorGrid = () => {
  const [squares, setSquares] = useState(Array(9).fill('blue'));
  const [clickOrder, setClickOrder] = useState<number[]>([]);
  const [isResetting, setIsResetting] = useState(false);

  const handleSquareClick = (index: number) => {
    if (isResetting) return; 

    if (index === 8) {
      setIsResetting(true);
      const newSquares = [...squares];
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < clickOrder.length) {
          newSquares[clickOrder[currentIndex]] = 'blue';
          setSquares([...newSquares]);
          currentIndex++;
        } else {
          clearInterval(interval);
          setClickOrder([]);
          setIsResetting(false);
        }
      }, 300);
    } else {
      const newSquares = [...squares];
      newSquares[index] = 'red';
      setSquares(newSquares);
      setClickOrder([...clickOrder, index]);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-lg shadow-inner">
      {squares.map((color, index) => (
        <div
          key={index}
          onClick={() => handleSquareClick(index)}
          className={`w-16 h-16 rounded cursor-pointer transition-colors duration-300 ${
            color === 'blue' ? 'bg-blue-500' : 'bg-red-500'
          } ${isResetting ? 'cursor-not-allowed' : ''}`}
        />
      ))}
    </div>
  );
};

export default ColorGrid;