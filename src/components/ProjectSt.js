import './ProjectSt.css';
import Format from './Format';

function ProjectSt() {
    return (
        <Format
            leftContent={
                <div className="st-left">
                    <img src="/images/StreamlitProject.png" alt="Project Input Example" />
                </div>
            }
            rightContent={
                <div className="st-right">
                    <h1>MagicPrompt Streamlit</h1>
                    <p>
                        A streamlit app for the textual generation of stablediffusion
                        <br />
                        prompts. Uses LangChain framework, Huggingface API and StreamLit. 
                    </p>
                    <a href="https://st-magicprompt-stablediffusion-1exnyen2k2h.streamlit.app/">
                        Visit The App
                    </a>
                </div>
            }
        />


        //<div className="ProjectSt-container">
        //    <div className="st-left">
        //        <img src="/images/StreamlitProject.png" alt="Project Input Example" />
        //    </div>
        //    <div className="st-right">
        //        <h1>MagicPrompt Streamlit</h1>
        //        <p>A streamlit app for the textual generation of stablediffusion<br/>
        //            prompts using MagicPrompt based on GPT2.</p>
        //        <a href="https://st-magicprompt-stablediffusion-1exnyen2k2h.streamlit.app/">Visit The App</a>
        //    </div>
        //</div>
    );
};

export default ProjectSt;