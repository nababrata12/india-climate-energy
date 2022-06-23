/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-quotes */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function OverView() {
  return (
    <div className="mt-24">
      {/* <script type='text/javascript' src='https://prod-apnortheast-a.online.tableau.com/javascripts/api/viz_v1.js'></script><div className='tableauPlaceholder' style={{ width: 1536, height: 627 }}><object class='tableauViz' width='1536' height='627' style='display:none;'><param name='host_url' value='https%3A%2F%2Fprod-apnortheast-a.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;indianenergyandclimatedashboardusingmessageix' /><param name='name' value='rajkhush&#47;ProductUtilization' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /></object></div> */}
      <iframe
        className='sm:w-screen lg:w-screen h-screen'
        src="https://public.tableau.com/views/energyindia-Final_1/PowerGenerationConsumption?:language=en-US&:display_count=n&:origin=viz_share_link"
        frameBorder="0"
      />
      {/* <div className='tableauPlaceholder' id='viz1655964122670' style={{ position: 'relative' }}><noscript><a href='#'><img alt='What are you going to save for future generation? Power? Can you infer why? ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;en&#47;energyindia-Final_1&#47;PowerGenerationConsumption&#47;1_rss.png' style={{ border: 'none' }} /></a></noscript><object className='tableauViz' style={{ display: 'none' }}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='energyindia-Final_1&#47;PowerGenerationConsumption' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;en&#47;energyindia-Final_1&#47;PowerGenerationConsumption&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>                <script type='text/javascript'>                    var divElement = document.getElementById('viz1655964122670');                    var vizElement = divElement.getElementsByTagName('object')[0];                    vizElement.style.width='1200px';vizElement.style.height='827px';                    var scriptElement = document.createElement('script');                    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script> */}
    </div>
  );
}

export default OverView;

// width: 1536px; height: 627px;
