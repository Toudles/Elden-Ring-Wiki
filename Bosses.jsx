import React, { useState } from 'react';
import Margit from './assets/Margit.png';
import Godrick from './assets/Godrick.png';
import RedWolf from './assets/RedWolf.png';
import Rennala from './assets/Rennala.png';
import RoyalKnightLoretta from './assets/RoyalKnightLoretta.png';
import StarscourgeRadhan from './assets/StarscourgeRadhan.png';
import Rykard from './assets/Rykard.png';
import GodfreyGolden from './assets/GodfreyGolden.png';
import MorgottOmenKing from './assets/MorgottOmenKing.png';
import FireGiant from './assets/FireGiant.png';
import GodskinDuo from './assets/GodskinDuo.png';
import Maliketh from './assets/Maliketh.png';
import Astel from './assets/Astel.png';
import Godfrey from './assets/Godfrey.png';
import Radagon from './assets/Radagon.png';
import EldenBeast from './assets/EldenBeast.png';
import Loretta from './assets/Loretta.png';
import Malenia from './assets/Malenia.png';
/*DLC bosses now */
import DivineDancingBeast from './assets/DivineBeastDancingLion.png';
import Rellana from './assets/Rellana.png';
import Romina from './assets/Romina.png';
import Messmer from './assets/Messmer.png';
import PutrescentKnight from './assets/PutrescentKnight.png';
import Scadutree from './assets/Scadutree.png';
import Midra from './assets/Midra.png';
import Metyr from './assets/Metyr.png';
import Bayle from './assets/Bayle.png';
import CRadhan from './assets/ConsortRadhan.png';
import S from './assets/TierListS.png';
import A from './assets/TierListA.png';
import B from './assets/TierListB.png';
import C from './assets/TierListC.png';
import D from './assets/TierListD.png';
import F from './assets/TierListF.png';
import './index.css'; // Ensure CSS file is imported correctly

/* ADD NAME + DESCRIPTION */
const bossesData = [
    { tier: 'F', image: Margit, description: 'Good beginner fight'},
    { tier: 'F', image: Godrick, description: 'LAME'},
    { tier: 'F', image: RedWolf, description: 'Good beginner fight to magic'},
    { tier: 'D', image: Rennala, description: 'Somewhat boring boss fight but very important to respec your attributes later on in the game'},
    { tier: 'F', image: RoyalKnightLoretta, description: 'Boring boss fight'},
    { tier: 'C', image: StarscourgeRadhan, description: 'Radhan is a signature fight'},
    { tier: 'F', image: Rykard, description: 'Very boring'},
    { tier: 'D', image: GodfreyGolden, description: 'Meh'},
    { tier: 'C', image: MorgottOmenKing, description: 'Pretty fun boss fight although a bit spammy'},
    { tier: 'D', image: FireGiant, description: 'very boring fight'},
    { tier: 'F', image: GodskinDuo, description: 'VERY INSUFFERABLE'},
    { tier: 'S', image: Maliketh, description: 'Very enjoyable fight, Maliketh has a very cool design backed up by his lore as well. Very difficult fight but very enjoyable due to the visuals'},
    { tier: 'F', image: Astel, description: 'BORING FIGHT'},
    { tier: 'A', image: Godfrey, description: 'Godfrey has a very cool design and is a very enjoyable fight'},
    { tier: 'B', image: Radagon, description: 'Fight is alright'},
    { tier: 'B', image: EldenBeast, description: 'Scenery/Arena is very cool'},
    { tier: 'C', image: Loretta, description: 'We love magic horse spammer'},
    { tier: 'S', image: Malenia, description: 'Malenia is an S tier boss.'},
/* DLC */
    { tier: 'B', image: DivineDancingBeast, description: 'Controller of 3 elements, fun fight'},
    { tier: 'A', image: Rellana, description: 'Twin of queen Renalla, Rellana is a controller of both magic and fire making for a very cool fight'},
    { tier: 'B', image: Romina, description: 'Meh'},
    { tier: 'S', image: Messmer, description: 'Amazing boss fight'},
    { tier: 'C', image: PutrescentKnight, description: 'Lame'},
    { tier: 'D', image: Scadutree, description: 'Need to kill 3 times'},
    { tier: 'A', image: Midra, description: 'Very cool trailer boss'},
    { tier: 'C', image: Metyr, description: 'Hands'},
    { tier: 'A', image: Bayle, description: 'Dragon'},
    { tier: 'S', image: CRadhan, description: 'Consort Radhan is an S tier boss.' },
// Add more bosses here
];

function Bosses() {
const [popupData, setPopupData] = useState(null);

const handleImageClick = (boss) => {
setPopupData(boss);
};

const closePopup = () => {
setPopupData(null);
};

return (
<div>
    <div className="description-box">
    <p>To see more info about the reasoning behind these placemenets, click on the images of the boss you're curious about!</p>
    </div>
    <table className="tier-table">
    <tbody>
        <tr>
        <td>
            <img src={S} alt="S Tier" />
        </td>
        <td>
            {bossesData
            .filter(boss => boss.tier === 'S')
            .map((boss, index) => (
                <div key={index}>
                <img
                    src={boss.image}
                    alt={boss.description}
                    onClick={() => handleImageClick(boss)}
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
            {bossesData
            .filter(boss => boss.tier === 'A')
            .map((boss, index) => (
                <div key={index}>
                <img
                    src={boss.image}
                    alt={boss.description}
                    onClick={() => handleImageClick(boss)}
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
            {bossesData
            .filter(boss => boss.tier === 'B')
            .map((boss, index) => (
                <div key={index}>
                <img
                    src={boss.image}
                    alt={boss.description}
                    onClick={() => handleImageClick(boss)}
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
            {bossesData
            .filter(boss => boss.tier === 'C')
            .map((boss, index) => (
                <div key={index}>
                <img
                    src={boss.image}
                    alt={boss.description}
                    onClick={() => handleImageClick(boss)}
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
            {bossesData
            .filter(boss => boss.tier === 'D')
            .map((boss, index) => (
                <div key={index}>
                <img
                    src={boss.image}
                    alt={boss.description}
                    onClick={() => handleImageClick(boss)}
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
            {bossesData
            .filter(boss => boss.tier === 'F')
            .map((boss, index) => (
                <div key={index}>
                <img
                    src={boss.image}
                    alt={boss.description}
                    onClick={() => handleImageClick(boss)}
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

export default Bosses;
