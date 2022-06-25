import React from 'react';

function OverView() {
  return (
    <div>
      <iframe
        // width="1200px"
        // height="500px"
        className="w-full h-screen md:w-auto"
        src="https://public.tableau.com/views/23_16560971914550/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default OverView;
