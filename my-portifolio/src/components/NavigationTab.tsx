import "../styles/NavigationTab.css";

import myPhoto from "../assets/imgs/57291352.jpg";
import resumeIcon from "../assets/icons/material-symbols_work-update.svg";
import linkedinIcon from "../assets/icons/mdi_linkedin.svg";
import githubIcon from "../assets/icons/mdi_github.svg";

function NavigationTab() {
    return (
        <nav>
           <section className="navigation-bar">
                <article>
                    <div className="image-me">
                        <img alt="my-profile" src={myPhoto} />
                    </div>
                    <div className="topics">
                        <a>Home</a>
                        <a>Projects</a>
                        <a>Contact Me</a>
                    </div>
                </article>
                <aside className="my-info">
                    <h1>Gabriel Gomes</h1>
                    <div className="icons">
                        <a>
                            <img alt="resume" src={resumeIcon} />
                        </a>
                        <a>
                            <img alt="linkedin" src={linkedinIcon} />
                        </a>
                        <a>
                            <img alt="github" src={githubIcon} />
                        </a>
                    </div>
                </aside>
            </section> 
        </nav>
    );
}

export default NavigationTab;