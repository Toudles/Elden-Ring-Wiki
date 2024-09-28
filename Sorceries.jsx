import React, { useState } from 'react';
import BoS from './assets/BladesofStone.png';
import CherishingFingers from './assets/CherishingFingers.png';
import FleetingMicrocosm from './assets/FleetingMicrocosm.png';
import GlintbladeTrio from './assets/GlintbladeTrio.png';
import GlintstoneNail from './assets/GlintstoneNail.png';
import GlintstoneNails from './assets/GlintstoneNails.png';
import GravitationalMissle from './assets/GravitationalMissle.png';
import ImpenetrableThorns from './assets/ImpenetrableThorns.png';
import MantleofThorns from './assets/MantleofThorns.png';
import MassofPutrescence from './assets/MassofPutrescence.png';
import MiriamsVanishing from './assets/MiriamsVanishing.png';
import RellanasTwinMoons from './assets/RellanasTwinMoons.png';
import RingsofSpectralLight from './assets/RingsofSpectralLight.png';
import VortexofPutrescence from './assets/VortexofPutrescence.png';
import S from './assets/TierListS.png';
import A from './assets/TierListA.png';
import B from './assets/TierListB.png';
import C from './assets/TierListC.png';
import D from './assets/TierListD.png';
import F from './assets/TierListF.png';

/* ADD NAME + DESCRIPTION LATER */
const sorceriesData = [
    { tier: 'B', image: BoS, description: 'Funny sorcery.'},
    { tier: 'C', image: CherishingFingers, description: 'FINGERS'},
    { tier: 'A', image: FleetingMicrocosm, description: 'Funny sorcery'},
    { tier: 'B', image: GlintbladeTrio, description: 'Glintblade always fun sorcery' },
    { tier: 'B', image: GlintstoneNail, description: 'Not bad but there is a better one'},
    { tier: 'B', image: GlintstoneNails, description: 'Better version of Glintstone Nail'},
    { tier: 'A', image: GravitationalMissle, description: 'Purple ball goes boom'},
    { tier: 'S', image: ImpenetrableThorns, description: 'Literally so op, right setup = one shot anything'},
    { tier: 'F', image: MantleofThorns, description: 'This one is terrible'},
    { tier: 'C', image: MassofPutrescence, description: 'Alright'},
    { tier: 'A', image: MiriamsVanishing, description: 'Fun'},
    { tier: 'D', image: RellanasTwinMoons, description: 'Ranni moon is better'},
    { tier: 'C', image: RingsofSpectralLight, description: 'This is decent'},
    { tier: 'B', image: VortexofPutrescence, description: 'Funny sorcery'},


// Add more Sorceries here
];

function Sorceries() {
const [popupData, setPopupData] = useState(null);

const handleImageClick = (sorceries) => {
setPopupData(sorceries);
};

const closePopup = () => {
setPopupData(null);
};

return (
<div>
    <div className="description-box">
    <p>To see more info about the reasoning behind these placemenets, click on the images of the sorceries you're curious about!</p>
    </div>
    <table className="tier-table">
    <tbody>
        <tr>
        <td>
            <img src={S} alt="S Tier" />
        </td>
        <td>
            {sorceriesData
            .filter(sorceries => sorceries.tier === 'S')
            .map((sorceries, index) => (
                <div key={index}>
                <img
                    src={sorceries.image}
                    alt={sorceries.description}
                    onClick={() => handleImageClick(sorceries)}
                />

                </div>
            ))}
        </td>
        </tr>
        <tr>
        <td>
            <img src={A} alt="A Tier" />
        </td>
        <td>
            {sorceriesData
            .filter(sorceries => sorceries.tier === 'A')
            .map((sorceries, index) => (
                <div key={index}>
                <img
                    src={sorceries.image}
                    alt={sorceries.description}
                    onClick={() => handleImageClick(sorceries)}
                />
                </div>
            ))}
        </td>
        </tr>
        <tr>
        <td>
            <img src={B} alt="B Tier" />
        </td>
        <td>
            {sorceriesData
            .filter(sorceries => sorceries.tier === 'B')
            .map((sorceries, index) => (
                <div key={index}>
                <img
                    src={sorceries.image}
                    alt={sorceries.description}
                    onClick={() => handleImageClick(sorceries)}
                />

                </div>
            ))}
        </td>
        </tr>
        <tr>
        <td>
            <img src={C} alt="C Tier" />
        </td>
        <td>
            {sorceriesData
            .filter(sorceries => sorceries.tier === 'C')
            .map((sorceries, index) => (
                <div key={index}>
                <img
                    src={sorceries.image}
                    alt={sorceries.description}
                    onClick={() => handleImageClick(sorceries)}
                />

                </div>
            ))}
        </td>
        </tr>
        <tr>
        <td>
            <img src={D} alt="D Tier" />
        </td>
        <td>
            {sorceriesData
            .filter(sorceries => sorceries.tier === 'D')
            .map((sorceries, index) => (
                <div key={index}>
                <img
                    src={sorceries.image}
                    alt={sorceries.description}
                    onClick={() => handleImageClick(sorceries)}
                />

                </div>
            ))}
        </td>
        </tr>
        <tr>
        <td>
            <img src={F} alt="F Tier" />
        </td>
        <td>
            {sorceriesData
            .filter(sorceries => sorceries.tier === 'F')
            .map((sorceries, index) => (
                <div key={index}>
                <img
                    src={sorceries.image}
                    alt={sorceries.description}
                    onClick={() => handleImageClick(sorceries)}
                />

                </div>
            ))}
        </td>
        </tr>
        {/* Add more tiers as needed */}
    </tbody>
    </table>

    {popupData && (
    <>
        <div className="popup-overlay" onClick={closePopup}></div>
        <div className="popup">
        <img src={popupData.image} alt={popupData.description} />
        <div className="popup-description">
            <p>{popupData.description}</p>
        </div>
        </div>
    </>
    )}
</div>
);
}

export default Sorceries;
