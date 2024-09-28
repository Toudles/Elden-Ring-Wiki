import React, { useState } from 'react';
import Banner from './assets/Banner.png';
import CrimsonCrystal from './assets/CrimsonCrystal.png';
import Crimsonspill from './assets/Crimsonspill.png'; 
import Crimsonburst from './assets/Crimsonburst.png';
import Cerulean from './assets/Cerulean.png';
import Greenspill from './assets/Greenspill.png';
import Greenburst from './assets/Greenburst.png';
import Strengthknot from './assets/Strength-knot.png';
import Dexterityknot from './assets/Dexterity-knot.png';
import Intelligenceknot from './assets/Intelligence-knot.png';
import Faithknot from './assets/Faith-knot.png';
import Opaline from './assets/Opaline.png';
import Speckled from './assets/Speckled.png';
import Leaden from './assets/Leaden.png';
import MagicShroud from './assets/MagicShroud.png';
import FlameShroud from './assets/FlameShroud.png';
import LightningShroud from './assets/LightningShroud.png';
import HolyShroud from './assets/HolyShroud.png';
import Stonebarb from './assets/Stonebarb.png';
import Spiked from './assets/Spiked.png';
import Thorny from './assets/Thorny.png';
import Twiggy from './assets/Twiggy.png';
import Winged from './assets/Winged.png';
import Windy from './assets/Windy.png';
import Bubble from './assets/Bubble.png';
import Crimsonwhorl from './assets/Crimsonwhorl.png';
import Opalinebubble from './assets/Opalinebubble.png';
import Ceruleanhidden from './assets/Ceruleanhidden.png';
import Purifying from './assets/Purifying.png';
import Ruptured from './assets/Ruptured.png';

function Physick() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        {
            name: 'Crimson Crystal Tear',
            description: 'Restores 50% HP',
            detailedDescription: 'Found in front of the statue in "Third Church of Marika". Another one can be found on an altar guarded by enemies at the base of the Minor Erdtree in Capital Outskirts.',
            image: CrimsonCrystal
        },
        {
            name: 'Crimsonspill Crystal Tear',
            description: 'Boosts max HP',
            detailedDescription: 'Found in Altus Plateau dropped by "Wormface" enemy.',
            image: Crimsonspill
        },
        {
            name: 'Crimsonburst Crystal Tear',
            description: 'Heals HP over time',
            detailedDescription:'Dropped by defeating the Erdtree Avatar boss in the Weeping Peninsula Minor Erdtree',
            image: Crimsonburst
        },
        {
            name: 'Cerulean Crystal Tear',
            description: 'Restores 50% FP',
            detailedDescription:'One is dropped by the Erdtree Avatar in Liurnia of the Lakes and the second one is dropped by the Erdtree Avatar guarding the the Minor Erdtree in Mountaintops East.',
            image: Cerulean
        },
        {
            name: 'Greenspill Crystal Tear',
            description: 'Boosts max Stamina',
            detailedDescription:'Found on an altar next to the Minor Erdtree in Mistwood. You can also find the Spiked Cracked Tear.',
            image: Greenspill
        },
        {
            name: 'Greenburst Crystal Tear',
            description: 'Boosts Stamina recovery',
            detailedDescription:'Dropped by the Putrid Avatar found at the Minor Erdtree in Caelid, east of Smoldering Church.',
            image: Greenburst
        },
        {
            name: 'Strength-Knot Crystal Tear',
            description: 'Boosts Strength',
            detailedDescription:'Head northeast from Stormhill Shack to the cliffs. Look for a small, stone receptable on the ground.',
            image: Strengthknot
        },
        {
            name: 'Dexterity-Knot Crystal Tear',
            description: 'Boosts Dexterity',
            detailedDescription:'Can be found at the top of a small island at Liurnia of the Lakes. Southwest of Boilprawn Shack.',
            image: Dexterityknot
        },
        {
            name: 'Intelligence-Knot Crystal Tear',
            description: 'Boosts Intelligence',
            detailedDescription:'From Road to the Manor Site of Grace, get to the bottom of the cliff (directly East) and follow the cliffs wall North. Guarded by a few Lesser Fingercreepers and one Fingercreeper.',
            image: Intelligenceknot
        },
        {
            name: 'Faith-Knot Crystal Tear',
            description: 'Boosts Faith',
            detailedDescription:'North of the Demi-Human Forest Ruins. Directly east of the Church of Pilgrimage, just down the cliff. It is in a bowl under a tree and surrounded by poison flower enemies.',
            image: Faithknot
        },
        {
            name: 'Opaline Hardtear',
            description: 'Boosts damage negation',
            detailedDescription:'Dropped by Putrid Avatar next to the Minor Erdtree north of Fort Faroth in Caelid.',
            image: Opaline
        },
        {
            name: 'Speckled Hardtear',
            description: 'Boosts resistances and heals status',
            detailedDescription:'Defeat Wormface at Minor Erdtree (Altus Plateau).',
            image: Speckled
        },
        {
            name: 'Leaden Hardtear',
            description: 'Boosts Poise',
            detailedDescription:'Drops from Ulcerated Tree Spirit in Mt. Gelmir.',
            image: Leaden
        },
        {
            name: 'Magic-Shrouding Cracked Tear',
            description: 'Boosts Magic attacks',
            detailedDescription:'Dropped by Erdtree Avatar in Minor Erdtree (Liurnia Northeast) in Northeastern Liurnia of the Lakes, east of the Mausoleum Compound Site of Grace.',
            image: MagicShroud
        },
        {
            name: 'Flame-Shrouding Cracked Tear',
            description: 'Boosts Fire attacks',
            detailedDescription:'Dropped by the Putrid Avatar found at the Minor Erdtree in Caelid, east of Smoldering Church.',
            image: FlameShroud
        },
        {
            name: 'Lightning-Shrouding Cracked Tear',
            description: 'Boosts Lightning attacks',
            detailedDescription:'Dropped by Erdtree Avatar in Minor Erdtree (Liurnia Northeast) in Northeastern Liurnia of the Lakes.',
            image: LightningShroud
        },
        {
            name: 'Holy-Shrouding Cracked Tear',
            description: 'Boosts Holy attacks',
            detailedDescription: 'Dropped by Erdtree Avatar in Minor Erdtree (Liurnia Northeast) in Northeastern Liurnia of the Lakes.',
            image: HolyShroud
        },
        {
            name: 'Stonebarb Cracked Tear',
            description: 'Attacks breaks enemy stances more often',
            detailedDescription: 'Obtained by defeating the Putrid Avatar near the second Minor Erdtree in Caelid.',
            image: Stonebarb
        },
        {
            name: 'Spiked Cracked Tear',
            description: 'Enhances charged attacks',
            detailedDescription: 'Found on an altar next to the Minor Erdtree in Mistwood along with the Greenspill Crystal Tear.',
            image: Spiked
        },
        {
            name: 'Thorny Cracked Tear',
            description: 'Enhances consecutive attacks',
            detailedDescription: 'Dropped by the Putrid Avatar at the Minor Erdtree in the Consecrated Snowfield, east of Ordina, Liturgical Town.',
            image: Thorny
        },
        {
            name: 'Twiggy Cracked Tear',
            description: 'Prevents Rune loss on death',
            detailedDescription: 'Found on an altar guarded by enemies at the base of the Minor Erdtree in Capital Outskirts.',
            image: Twiggy
        },
        {
            name: 'Winged Crystal Tear',
            description: 'Reduces equipment load',
            detailedDescription: 'Found on an altar surrounded by Skeletal Snails just inside the Capital Outskirts to the east-northeast of the Hermit Merchants Shack.',
            image: Winged
        },
        {
            name: 'Windy Crystal Tear',
            description: 'Enhances dodge rolls',
            detailedDescription: 'The item can be found in Caelid in a pit southeast of the Nomadic Merchant. One of the birds watches over it, facing south.',
            image: Windy
        },
        {
            name: 'Crimson Bubbletear',
            description: 'Restores HP when near death',
            detailedDescription: 'Dropped by the Erdtree Avatar guarding the Minor Erdtree in the east of the Mountaintops of the Giants.',
            image: Bubble
        },
        {
            name: 'Crimsonwhorl Bubbletear',
            description: 'Converts Damage received in HP',
            detailedDescription: 'Mountaintops of the Giants: Start at the Foot of the Forge site of grace and move to the most north-eastern part of that mountain, past the pot-throwing trolls and the giant Fingercreeper. The bubbletear is at the end of a narrow passage heading west from this point, along the northern cliff. Beware that the passage is infested with small Fingercreepers. ',
            image: Crimsonwhorl
        },
        {
            name: 'Opaline Bubbletear',
            description: 'Significantly negates damage on next hit',
            detailedDescription: 'Weeping Peninsula, beneath the Minor Erdtree: Dropped by the Erdtree Avatar boss upon defeat.',
            image: Opalinebubble
        },
        {
            name: 'Cerulean Hidden Tear',
            description: 'Eliminates all FP consumption',
            detailedDescription: 'Mt. Gelmir: Drops from the Ulcerated Tree Spirit at the Minor Erdtree, east of the Road of Iniquity site of grace. ',
            image: Ceruleanhidden
        },
        {
            name: 'Purifying Crystal Tear',
            description: 'Purifies the Lord of Bloods (Mohg) curse',
            detailedDescription: 'Dropped by Eleonora, Violet Bloody Finger at the Second Church of Marika in Altus Plateau. ',
            image: Purifying
        },
        {
            name: 'Ruptured Crystal Tear',
            description: 'Explosion after a short delay',
            detailedDescription: 'Dropped by the Erdtree Avatar that resides in Liurnia of the Lakes or the second one is Dropped by the Putrid Avatar at the Minor Erdtree in the Consecrated Snowfield, east of Ordina, Liturgical Town.',
            image: Ruptured
        },


        // Add more items here
    ];

    const showPopup = (item) => {
        setSelectedItem(item);
        setPopupVisible(true);
    };

    const hidePopup = () => {
        setPopupVisible(false);
        setSelectedItem(null);
    };

    return (
        <div className="background">
            <img src={Banner} className="banner" alt="Banner" />
            <h2 style={{ fontFamily: 'Arial, sans-serif' }}>To get the flask of Wondrous Physick</h2>
            <ul className="custom-bullets">
                <li><h3>It can be found in the "Third Church of Marika" in East Limgrave. You obtain it as soon as you exit the Stranded Graveyard and emerge into The Lands Between.</h3></li>
            </ul>

            <h2>Location of all Wondrous Physick Mixes.</h2>
            <ul className="custom-bullets">
                {items.map((item, index) => (
                    <li key={index}>
                        <h3 style={{ color: 'gold', cursor: 'pointer' }} onClick={() => showPopup(item)}>
                            {item.name} - {item.description}
                        </h3>
                    </li>
                ))}
            </ul>

            {popupVisible && (
                <div className="overlay" onClick={hidePopup}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <h3>{selectedItem.name}</h3>
                        <img src={selectedItem.image} alt={selectedItem.name} style={{ maxWidth: '100px' }} />
                        <p style={{ color: 'black' }}>{selectedItem.detailedDescription}</p>
                        <button onClick={hidePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Physick;
