import React, { useState } from 'react';
import images from '../assets/images';

export default function FAQItem({ data }) {
    const [active, setActive] = useState(false);

    const handleActive = () => {
        setActive(!active);
    };
    return (
        <div className={`faq-item ${active ? 'active' : ''}`}>
            <div className="faq-quest" onClick={handleActive}>
                <p>{data.question}</p>
                <img className={`faq-arrow`} src={images.arrowDown} alt="" />
            </div>
            <p className={`faq-answer`}>{data.answer}</p>
        </div>
    );
}
