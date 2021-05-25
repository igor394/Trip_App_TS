import React, {FC} from 'react'
import Loader from "react-loader-spinner"

const DownloadModal: FC = () => {
    return (
        <div className="loader">
            <Loader
                type="Rings"
                color="#F1F1F2"
                height={300}
                width={300}
            />
        </div>
    );
};

export default DownloadModal;


