import React from "react"; 
import {
  IconDatabase,
  IconCloudUpload,
  IconWaveSine,
  IconFileText,
  IconCode,
} from "@tabler/icons-react";

const AiAgentBoxSlider = () => {
  return (
    <div>
      <section className="hero-slider ai-agent-box-slider">
        <div className="hero-container">
          <div className="ticker-wrap p-0 ">
            {/* <p className="text-center hero-slider-header">The trust choice of thousands</p> */}
        <div className="ticker">
              <div className="ticker-content ">
                <div>
                  <IconDatabase style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconCloudUpload style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconWaveSine style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconFileText style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconCode style={{ color: 'rgb(127 127 127)' }}/>
                </div>
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="ticker-content">
                <div>
                  <IconDatabase style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconCloudUpload style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconWaveSine style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconFileText style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconCode style={{ color: 'rgb(127 127 127)' }}/>
                </div>
              </div>
            </div>
            <div className="swipper mt-3">
              <div className="ticker-content ">
                <div>
                  <IconDatabase style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconCloudUpload style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconWaveSine style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconFileText style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconCode style={{ color: 'rgb(127 127 127)' }}/>
                </div>
              </div>
              {/* Duplicate for seamless scroll */}
              <div className="ticker-content">
                <div>
                  <IconDatabase style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconCloudUpload style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconWaveSine style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconFileText style={{ color: 'rgb(127 127 127)' }}/>
                </div>
                <div>
                  <IconCode style={{ color: 'rgb(127 127 127)' }}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAgentBoxSlider;
