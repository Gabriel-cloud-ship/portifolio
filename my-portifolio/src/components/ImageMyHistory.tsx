import "../styles/ImageMyHistory.css";

interface IImageMyHistoryProps {
    classCustom: string;
    src: string;
}

function ImageMyHistory({ classCustom, src }: IImageMyHistoryProps) {
    return (
        <div className={`img-history ${classCustom}`}>
            <img alt={classCustom} src={src} />
        </div>
    );
}

export default ImageMyHistory;