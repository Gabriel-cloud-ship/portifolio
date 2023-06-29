import "../styles/MyHistory.css";
import ImageMyHistory from "./ImageMyHistory";

import logoUnicamp from "../assets/imgs/logo-unicamp-black.png";
import logoIFSP from "../assets/imgs/logo-ifsp.png";
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
                    <ImageMyHistory classCustom="unicamp" src={logoUnicamp} />
                    <ImageMyHistory classCustom="ifsp" src={logoIFSP} />
                    <ImageMyHistory classCustom="picture" src={myPhoto} />
                </div>
            </div>
        </article>
    );
}

export default MyHistory;