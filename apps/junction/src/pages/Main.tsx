import '../assets/main.css';
import '../assets/home.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VisibilitySensor from 'react-visibility-sensor';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
import {
  HorizontalGridLines,
  LineSeries,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from 'react-vis';

export const Main = () => {
  const [percentage, setPercentage] = useState<number>(66);

  const handleTrig = () => {
    setPercentage(77);
  };
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '5rem',
          marginBottom: '2rem',
        }}
      >
        My spendings
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '12px',
              marginBottom: '1rem',
            }}
          >
            <h1
              style={{
                fontSize: '1.2rem',
                textAlign: 'center',
                marginBottom: '1rem',
                fontWeight: 'bold',
              }}
            >
              Monthly spending increase
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '12rem',
                  height: '12rem',
                }}
              >
                <VisibilitySensor>
                  {({ isVisible }: any) => {
                    if (isVisible) handleTrig();
                    return (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles({
                          strokeLinecap: 'butt',
                          textSize: '16px',
                          pathTransitionDuration: 1,
                          pathColor: '#387b7f ',
                          textColor: '#387b7f ',
                          trailColor: '#2b2e43',
                          backgroundColor: '##2f334a',
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '12px',
              height: '20.2rem',
            }}
          >
            <h1
              style={{
                fontSize: '1.2rem',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              October 2022
            </h1>
            <XYPlot width={300} height={300}>
              <HorizontalGridLines />
              <LineSeries
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 5 },
                  { x: 3, y: 15 },
                ]}
              />
              <XAxis />
              <YAxis />
            </XYPlot>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
