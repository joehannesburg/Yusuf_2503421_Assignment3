import React, { useRef, useEffect, useState, useCallback } from 'react';
import './net-art.css';

// References: The basis and inspiration behind this code were taken from the following sources
// - https://youtu.be/FLESHMJ-bI0?si=v5uC_z2-FjaqWkm8
// - https://github.com/satansdeer/drawing-react-canvas/tree/master
// - https://youtu.be/6arkndScw7A?si=1EfXC93JYrWQylOe
// - https://github.com/felerticia/canvas-react
// - https://github.com/felerticia/drawing


// image imports
import planeImage from '../../assets/airplane.png'; 
import backgroundImage1 from '../../assets/art-back1.png'; 
import backgroundImage2 from '../../assets/art-back2.png';
import backgroundImage3 from '../../assets/art-back3.png';
import backgroundImage4 from '../../assets/art-back4.png';

const NetArt = () => {
  // references and states
  const canvasRef = useRef(null);
  const planeRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [positions, setPositions] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(50); 
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [strokeColor] = useState('rgba(0, 0, 0, 0.5)');

  // Set canvas dimensions and draw initial background image. The context aspect allows for smooth lines for the drawing
  const setCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      const context = canvas.getContext('2d');
      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.lineWidth = 2;
      context.strokeStyle = strokeColor;
      const backgroundImage = new Image();
      backgroundImage.src = backgroundImages[backgroundImageIndex]; //refers to background image array which allows for backgrounds to be changed
      backgroundImage.onload = () => {
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [backgroundImageIndex, strokeColor]);


  // sets the canvas dimensions initially and when window is resized
  useEffect(() => {
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    return () => window.removeEventListener('resize', setCanvasDimensions);
  }, [setCanvasDimensions]);

  // Get offset based on (mouse or touch)
  const getOffset = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (event.touches ? event.touches[0].clientX : event.clientX) - rect.left;
    const y = (event.touches ? event.touches[0].clientY : event.clientY) - rect.top;
    return { offsetX: x, offsetY: y };
  };


  //Drawing Functions


  // Start drawing on canvas
  const startDrawing = (event) => {
    const { offsetX, offsetY } = getOffset(event);
    setIsDrawing(true);
    setPositions((prevPositions) => [...prevPositions, [{ x: offsetX, y: offsetY }]]);
    hidePlane();
  };

  // Continue drawing as cursor moves
  const draw = (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = getOffset(event);
    const newPositions = positions[positions.length - 1].concat({ x: offsetX, y: offsetY });
    setPositions((prevPositions) => [...prevPositions.slice(0, -1), newPositions]);

    const context = canvasRef.current.getContext('2d');
    context.strokeStyle = strokeColor;
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(positions[positions.length - 1][positions[positions.length - 1].length - 1].x, positions[positions.length - 1][positions[positions.length - 1].length - 1].y);
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  // Stop drawing on canvas
  const stopDrawing = () => {
    setIsDrawing(false);
  };


  // Plane Image Functions



  // Hide the plane image when drawing
  const hidePlane = () => {
    const plane = planeRef.current;
    if (plane) {
      plane.style.display = 'none';
    }
  };

  // Show the plane image for animation
  const showPlane = () => {
    const plane = planeRef.current;
    if (plane) {
      plane.style.display = 'block';
    }
  };

  // Move the plane image to given coordinates
  const movePlane = (x, y, directionX, directionY) => {
    const plane = planeRef.current;
    const canvas = canvasRef.current;
    if (plane && canvas) {
      // Position the plane
      plane.style.left = `${x + canvas.offsetLeft}px`;
      plane.style.top = `${y + canvas.offsetTop}px`;
  
      // Calculate rotation angle based on line direction (Still glitchy, can't seem to get it right)
      const angle = Math.atan2(directionY, directionX);
      const angleDegrees = angle * (180 / Math.PI); 
  
      // Apply rotation to the plane image
      plane.style.transform = `rotate(${angleDegrees}deg)`;
    }
  };


  //Animation Functions



  // Animate drawing on canvas
  const animateDrawing = useCallback(() => {
    if (!isAnimating || positions.length === 0) return;
    const context = canvasRef.current.getContext('2d');
    context.strokeStyle = 'rgba(0, 0, 0, 0.9)';
    context.lineWidth = 5;
  
    let i = 0; // index which represents the current stroke
    let j = 0; // index which represents current point within current stroke
  
    const animate = () => {
      if (i >= positions.length) {
        setIsAnimating(false);
        hidePlane();
        return;
      }
  
      const currentStroke = positions[i]; // gets the current stroke
      if (j >= currentStroke.length - 1) { // if all the points in stroke are completed, move to next stroke
        i++;
        j = 0;
        requestAnimationFrame(animate);
        return;
      }
  
      const start = currentStroke[j];
      const end = currentStroke[j + 1];
  
      // Calculate direction vector
      const directionX = end.x - start.x;
      const directionY = end.y - start.y;
  
      context.beginPath();
      context.moveTo(start.x, start.y);
      context.lineTo(end.x, end.y);
      context.stroke();
  
      movePlane(end.x, end.y, directionX, directionY);
      j++;
      setTimeout(animate, animationSpeed);
    };
  
    showPlane();
    animate();
  }, [isAnimating, positions, animationSpeed, strokeColor, movePlane]);

  useEffect(() => {
    if (isAnimating) {
      animateDrawing();
    }
  }, [isAnimating, animateDrawing]);

  // Start animation
  const startAnimation = () => {
    setIsAnimating(true);
  };



  // Button functions



  // Undo last drawing action
  const undo = () => {
    setPositions((prevPositions) => {
      if (prevPositions.length === 0) return prevPositions;
      const updatedPositions = prevPositions.slice(0, -1);
      redrawCanvas(updatedPositions);
      return updatedPositions;
    });
  };

  // Clear all drawings on canvas
  const clearCanvas = () => {
    setPositions([]);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const backgroundImage = new Image();
    backgroundImage.src = backgroundImages[backgroundImageIndex];
    backgroundImage.onload = () => {
      context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };
  };

  // Redraw canvas with given positions
  const redrawCanvas = useCallback((positions) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const backgroundImage = new Image();
    backgroundImage.src = backgroundImages[backgroundImageIndex];
    backgroundImage.onload = () => {
      context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      context.strokeStyle = strokeColor;
      positions.forEach((stroke) => {
        context.beginPath();
        stroke.forEach((point, index) => {
          if (index === 0) {
            context.moveTo(point.x, point.y);
          } else {
            context.lineTo(point.x, point.y);
          }
        });
        context.stroke();
      });
    };
  }, [backgroundImageIndex, strokeColor]);

  // Array of background images
  const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
  ];

  // Change background image on canvas
  const changeBackgroundImage = () => {
    setBackgroundImageIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % backgroundImages.length;
      setPositions([]);
      redrawCanvas([]);
      return nextIndex;
    });
  };

  return (
    <main className="canvas-container">
      <canvas
        ref={canvasRef}
        //for desktop
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        //for mobile
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        onTouchCancel={stopDrawing}
      />
      <img ref={planeRef} src={planeImage} alt="plane" className="plane" />
      <section className="controls">
        <button className='web-art-button' onClick={startAnimation}>Start Animation</button>
        <button className='web-art-button' onClick={undo}>Undo</button>
        <button className='web-art-button' onClick={clearCanvas}>Clear</button>
        <button className='web-art-button' onClick={changeBackgroundImage}>Change Background</button>
      </section>
    </main>
  );
};

export default NetArt;
