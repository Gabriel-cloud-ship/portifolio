import "../styles/MyHistory.css";
import ImageMyHistory from "./ImageMyHistory";

import enterprise from "../assets/icons/material-symbols_home-work-outline.svg";
import science from "../assets/icons/fluent-mdl2_test-step.svg";
import stack from "../assets/icons/bi_stack.svg";
import myPhoto from "../assets/imgs/57291352.jpg";

function MyHistory() {
    return (
        <article className="my-history">
            <div className="my-history-container">
                <div className="about-me">
                    <h1>My History</h1>
                    <p>Text</p>
                </div>
                <div className="picture-me">
                    <ImageMyHistory classCustom="enterprise" src={enterprise} />
                    <ImageMyHistory classCustom="science" src={science} />
                    <ImageMyHistory classCustom="stack" src={stack} />
                    <ImageMyHistory classCustom="picture" src={myPhoto} />
                </div>
            </div>
        </article>
    );
}

export default MyHistory;