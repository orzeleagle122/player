import React from 'react';
import {Container} from "./Loader.elements";

const Loader = () => {
    return (
        <Container>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </Container>
    );
};

export default Loader;