import React, {useState, useEffect} from 'react';

export const useLocalState = <T extends any> (defaultVal: any, key: string): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState(() => {
        const persistedValue = localStorage.getItem(key);
        return persistedValue ? JSON.parse(persistedValue) : defaultVal;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
};