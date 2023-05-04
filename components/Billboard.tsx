import useBillboard from "@/hooks/useBillboard";
import React from "react";

const Billboard = () => {

    const { data } = useBillboard();
    return (
        //56.25 means that it will use the 16:9 aspect ratio
        <div className="relative h-[56.25vw]">
            <video 
            autoPlay
            muted
            loop
            poster={data?.thumbnailUrl} 
            src={data?.videoUrl}>

            </video>
        </div>
    )
};

export default Billboard;