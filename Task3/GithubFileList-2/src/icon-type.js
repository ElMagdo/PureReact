import React from 'react';

function Icon({type}) {
    let icon = (type === "folder") ? "fa-folder" : "fa-file-text-o";

    return <span className="icon"><i className={`fa ${icon}`}/></span>;
}

export default Icon;