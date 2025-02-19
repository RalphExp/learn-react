import React, { useEffect, useMemo } from "react";

export default function WordCount({content = "Hello, world"}) {

    const words = useMemo(() => content.split(" "), [content]);
    
    // if useMemo is not used, useEffect will be invoked
    //  everytime the component is refresh
    
    // const words = content.split(" ")
    useEffect(() => {
        console.log("fresh render", words);
    }, [words]);

    return <p>{content}</p>;
}
