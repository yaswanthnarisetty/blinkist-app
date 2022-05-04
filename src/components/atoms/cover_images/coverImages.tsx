import React from "react";

interface CoverImagesInterface{
    url:string;
    class:string;
}

export const CoverImages = (props:CoverImagesInterface) => {
    var classVal = "cover-image "+props.class;
    return (
        <div>
            <img className={classVal} src={props.url} alt="Book Cover" />
        </div>
    )
}

