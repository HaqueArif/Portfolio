import { useState } from 'react';
import ProgressBar from 'react-customizable-progressbar'

const useProgressBar = (initialProgress) => {
  const [progress, setProgress] = useState(initialProgress);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return { progress, updateProgress };
};

// Usage:
const ProgressBarComponent = () => {
  const { progress, updateProgress } = useProgressBar(0);

  return (
    <ProgressBar
      radius={40}
      progress={progress}
      // cut={120}
      rotate={-90}
      strokeWidth={16}
      strokeColor="#5d9cec"
      strokeLinecap="square"
      trackStrokeWidth={16}
      trackStrokeColor="#e6e6e6"
      trackStrokeLinecap="square"
      pointerRadius={0}
      initialAnimation={true}
      transition="1.5s ease 0.5s"
      trackTransition="0s ease"
    >
      <div className="indicator-volume">
        <div className="percentage">{progress}%</div>
      </div>
    </ProgressBar>
  );
};
