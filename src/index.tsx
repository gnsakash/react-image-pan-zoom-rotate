import * as React from 'react';
import PanViewer from './PanViewer';

// box-shadow: 0px 0px 5px 1px #0c0c0c;

type ReactPanZoomProps = {
  image: string;
  alt?: string;
  ref?: any;
};

const ReactPanZoom = ({ image, alt, ref }: ReactPanZoomProps) => {
  const [dx, setDx] = React.useState(0);
  const [dy, setDy] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);
  const [rotation, setRotation] = React.useState(0);
  const [innerHeight, setInnerHeight] = React.useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const [flip, setFlip] = React.useState(false);

  const resetAll = () => {
    setDx(0);
    setDy(0);
    setZoom(1);
    setRotation(0);
    setFlip(false);
  };
  const zoomIn = () => {
    setZoom(zoom + 0.2);
  };

  const zoomOut = () => {
    if (zoom >= 1) {
      setZoom(zoom - 0.2);
    }
  };

  const rotateLeft = () => {
    // console.log('wdith => (rotation === -1 || rotation === -3) ?', (rotation === -1 || rotation === -3) ? window.innerHeight+'px' : window.innerWidth+'px');
    // console.log('height => (rotation === 0 || rotation === -2) ?', (rotation === 0 || rotation === -2) ? window.innerWidth+'px' : window.innerHeight+'px');
    if (rotation === -3) {
      setRotation(0);
    } else {
      setRotation(rotation - 1);
    }
    if ((rotation - 1) === -1 || (rotation - 1) === -3) {
      console.log('wdith => ', window.innerHeight+'px');
      console.log('height => ', window.innerWidth+'px');
      setInnerWidth(window.innerHeight);
      setInnerHeight(window.innerWidth);
    } else {
      console.log('wdith => ', window.innerWidth+'px');
      console.log('height => ', window.innerHeight+'px');
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight);
    }
  };

  const flipImage = () => {
    setFlip(!flip);
  };

  const onPan = (dx: number, dy: number) => {
    setDx(dx);
    setDy(dy);
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          right: '10px',
          zIndex: 2,
          top: 10,
          userSelect: 'none',
          borderRadius: 2,
          background: '#fff',
          boxShadow: '0px 2px 6px rgba(53, 67, 93, 0.32)',
        }}
      >
        <div
          onClick={zoomIn}
          style={{
            textAlign: 'center',
            cursor: 'pointer',
            height: 40,
            width: 40,
            borderBottom: ' 1px solid #ccc',
          }}
        >
          <svg
            style={{
              height: '100%',
              width: '100%',
              padding: 10,
              boxSizing: 'border-box',
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20"
              stroke="#4C68C1"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M12 4L12 20"
              stroke="#4C68C1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div
          onClick={zoomOut}
          style={{
            textAlign: 'center',
            cursor: 'pointer',
            height: 40,
            width: 40,
            borderBottom: ' 1px solid #ccc',
          }}
        >
          <svg
            style={{
              height: '100%',
              width: '100%',
              padding: 10,
              boxSizing: 'border-box',
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12H20"
              stroke="#4C68C1"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div
          onClick={rotateLeft}
          style={{
            textAlign: 'center',
            cursor: 'pointer',
            height: 40,
            width: 40,
            borderBottom: ' 1px solid #ccc',
          }}
        >
          <svg
            style={{
              height: '100%',
              width: '100%',
              padding: 10,
              boxSizing: 'border-box',
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 15L9 20L4 15"
              stroke="#4C68C1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 4H13C10.7909 4 9 5.79086 9 8V20"
              stroke="#4C68C1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div
          onClick={flipImage}
          style={{
            textAlign: 'center',
            cursor: 'pointer',
            height: 40,
            width: 40,
            borderBottom: ' 1px solid #ccc',
          }}
        >
          <svg
            style={{
              height: '100%',
              width: '100%',
              padding: 10,
              boxSizing: 'border-box',
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#4C68C1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.178,18.799V1.763L0,18.799H9.178z M8.517,18.136h-7.41l7.41-13.752V18.136z"
            />
            <polygon
              stroke="#4C68C1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="11.385,1.763 11.385,18.799 20.562,18.799 "
            />
          </svg>
        </div>
        <div
          onClick={resetAll}
          style={{
            textAlign: 'center',
            cursor: 'pointer',
            height: 40,
            width: 40,
          }}
        >
          <svg
            style={{
              height: '100%',
              width: '100%',
              padding: 10,
              boxSizing: 'border-box',
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#4C68C1"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
      </div>
      <PanViewer
        style={{
          width: window.innerWidth+'px',
          height: window.innerHeight+'px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}
        zoom={zoom}
        setZoom={setZoom}
        pandx={dx}
        pandy={dy}
        onPan={onPan}
        rotation={rotation}
        key={dx}
      >
        <img
          width={innerWidth+'px'}
          height={innerHeight+'px'}
          style={{
            transform: `rotate(${rotation * 90}deg) scaleX(${flip ? -1 : 1})`,
          }}
          src={image}
          alt={alt}
          ref={ref}
        />
      </PanViewer>
    </div>
  );
};

export { PanViewer };
export default ReactPanZoom;
