import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      rtl
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#eee7e7"
      foregroundColor="#eaebeb">
      <circle cx="140" cy="125" r="120" />
      <rect x="2" y="263" rx="6" ry="6" width="280" height="19" />
      <rect x="0" y="296" rx="6" ry="6" width="280" height="84" />
      <rect x="188" y="391" rx="6" ry="6" width="92" height="40" />
      <rect x="-2" y="391" rx="6" ry="6" width="133" height="40" />
    </ContentLoader>
  );
}

export default LoadingBlock;
