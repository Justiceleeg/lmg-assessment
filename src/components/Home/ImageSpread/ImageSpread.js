import React from 'react';
import { Link } from 'react-router-dom';

import './ImageSpread.css';

const imageData = [
    { image: 'https://si.wsj.net/public/resources/images/BN-OS972_WINDOW_GR_20160701120310.jpg',
      imageText: 'Retirement',
      imageDesc: 'Notepad',
      imageLink: '#'
    },
    { image: 'https://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/stocktickerboard_600x400.jpg',
    imageText: 'Investments',
    imageDesc: 'Stocks',
    imageLink: '#'
    },
    { image: 'http://media.graytvinc.com/images/taxes71.jpg',
    imageText: 'Taxes',
    imageDesc: 'Charts',
    imageLink: '#'
    }
]

//functional component (not class component)
const ImageSpread = () => {
    const mapImageData = imageData.map((item => {
        return (
            <Link to={item.imageLink}>
                <div className="img-element" style={{'background-image': `url(${item.image})`, 
                                                     'background-repeat': 'no-repeat', 
                                                     'background-position': 'center',
                                                     'background-size': 'cover'}}>
                    <div className="img-text">{item.imageText}</div>
                </div>
            </Link>
        )
    }))

    return (
        <div className="image-spread restrict">
            {mapImageData}
        </div>
    )
}

export default ImageSpread;