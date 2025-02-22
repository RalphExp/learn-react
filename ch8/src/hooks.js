import React from "react";
import { useState, useEffect, useCallback, useMemo } from "react";

function useFetch(uri) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!uri) return;
        fetch(uri)
            .then(data => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [uri]);

    return {
        loading,
        data,
        error
    }
}

function Fetch({uri, renderSuccess,
    loadingFallback = <p>loading...</p>,
    renderError = error => (
    <pre>{JSON.stringify(error, null, 2)}</pre>
)}) {
    const { loading, data, error } = useFetch(uri);
    if (loading) 
        return loadingFallback;
    if (error)
        return renderError(error);
    if (data)
        return renderSuccess({ data });
}

function useIterator(items = [], initialValue = 0) {
    const [i, setIndex] = useState(initialValue);
    const prev = useCallback(() => {
        if (i === 0)
            return setIndex(items.length - 1);
        setIndex(i - 1);
    }, [i]);

    const next = useCallback(() => {
        if (i === items.length - 1)
            return setIndex(0);
        setIndex(i + 1);
    }, [i]);
    
    const item = useMemo(() => items[i], [i]);
    return [item || items[0], prev, next];
};

export {
    useFetch, useIterator, Fetch
}