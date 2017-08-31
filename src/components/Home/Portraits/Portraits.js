import React from 'react';
import './Portraits.css';

const portraitData = [
    {
        customerImage: 'https://i.pinimg.com/736x/2a/6d/43/2a6d4307a3f0ffeb07d21fb56b9efb91--couple-goals-life-goals.jpg',
        customerName: 'Jane & John Smith',
        customerService: 'Getting married'
    },
    {
        customerImage: 'http://gaia.adage.com/images/bin/image/x-large/tina_fey_liz_lemon.png',
        customerName: 'Liz Lemon',
        customerService: 'Saving for retirement'
    },
    {
        customerImage: 'http://www.theplaidzebra.com/wp-content/uploads/2015/06/7_shipping-container-house.jpg',
        customerName: 'Rusty Shackleford',
        customerService: 'Birth of a child'
    },
    {
        customerImage: 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11335531_1662082974021649_37198034_n.jpg',
        customerName: 'Burt Macklin',
        customerService: 'Continuing education'
    },
];

//functional component (not class component)
const Portraits = () => {
    const mapImageData = portraitData.map((item => {
        return (
            <div className="portrait-window">
                <img className="portrait-image" src={item.customerImage} alt={item.customerName} />
                <p className="portrait-name">{item.customerName}</p>
                <p className="portrait-desc">{item.customerService}</p>
            </div>
        )
    }))

    return (
        <div className="portraits restrict">
            {mapImageData}
        </div>
    )
}

export default Portraits;