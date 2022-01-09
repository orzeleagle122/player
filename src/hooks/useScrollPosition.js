import React, {useEffect, useState} from 'react';

const useScrollPosition = () => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleChangeBackground);
        return () => window.removeEventListener('scroll', handleChangeBackground);
    }, [])

    const handleChangeBackground = () => {
        setPosition(window.scrollY);
    }


    return position;
};

export default useScrollPosition;