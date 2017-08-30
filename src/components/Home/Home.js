import React from 'react';

import Header from './Header/Header';
import ImageSpread from './ImageSpread/ImageSpread';
import Portraits from './Portraits/Portraits';

//functional component (not class component)
const Home = () => {
    return (
        <div>
            <Header />
            <Portraits />
            <ImageSpread />
        </div>
    )
}

export default Home;