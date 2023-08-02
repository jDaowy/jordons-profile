import './ProjectSd.css';
import Slideshow from './Slideshow';
import Format from './Format';

function ProjectSd() {
    return (
        <div>
            {/* Use Format component and pass Slideshow and text content */}
            <Format
                leftContent={<Slideshow />}
                rightContent={
                    <div>
                        <h1>Stable Diffusion Image Generation</h1>
                        <p>
                            AI generated images using a LoRa model trained on 10 images
                            <br />
                            of myself. Training and generation run on a Google Compute Engine.
                        </p>
                    </div>
                }
            />
        </div>

        //<div className="ProjectSd-container">
        //    <div className="sd-left">
        //        <Slideshow />
        //    </div>
        //    <div className="sd-right">
        //        <h1>Stable Diffusion Image Generation</h1>
        //        <p>AI generated images using a LoRa model trained on 10 images <br />
        //            of myself.  Training and generation run on a Google Compute Engine.</p>
                
        //    </div>
        //</div>
    );
};

export default ProjectSd;