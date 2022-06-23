//quick buttoms for navigation
import React from 'react';


const QuickButtons = () => {
    
    return (
        <div className="quick-buttons">
            <div className="quick-buttons__item">
                <div className="quick-buttons__item__icon">
                <i class="fa-duotone fa-fire"></i>
                </div>
                <div className="quick-buttons__item__text">
                    <p>Fuego</p>
                </div>
            </div>
            <div className="quick-buttons__item">
                <div className="quick-buttons__item__icon">
                <i class="fa-solid fa-droplet"></i>
                </div>
                <div className="quick-buttons__item__text">
                    <p>Agua</p>
                </div>
            </div>
            <div className="quick-buttons__item">
                <div className="quick-buttons__item__icon">
                <i class="fa-solid fa-mountain"></i>
                </div>
                <div className="quick-buttons__item__text">
                    <p>Tierra</p>
                </div>
            </div>
        </div>
    );
}


export default QuickButtons;

