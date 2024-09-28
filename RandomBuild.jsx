import React from 'react';
import Falx from './assets/Falx.png';
import Euporia from './assets/Euporia.png';
import GKatana from './assets/GKatana.png';
import Maliketh from './assets/Maliketh.png';
import Banner from './assets/Banner.png';

function RandomBuild() {
  return (
    <>
    <div className="content">
      <img src={Banner} className="banner" alt="Banner" />
      <h2>Welcome to the Random Build section where you can find all types of builds here!</h2>
      <div className="build-container">
        <div className="build">
          <h3 style={{fontFamily: 'Arial, sans-serif'}}><b>Falx dual slicer</b></h3>
          <p>Weapon(s): Falx</p>
          <p>Incantations: Flame Grant Me Strength, Golden Vow, Shabriri's Howl (optional)</p>
          <p>Armor: White Mask Helmet, Rakshasha Arms, Chest, Legs</p>
          <p>Talismans: Shard of Alexander, Rotten Winged Insignia, Millicent Prosthesis, Lord of Blood's Exultation</p>
          <p>Things to know: Very enjoyable ash of war where you run up to the enemy then cast a heavy attack will start a combo of rapid hits that can proc blood loss very quickly. Be wary of taking hits though as Rakshasha's set causes you to take more damage.</p>
          <img src={Falx} alt="Falx Build" className="build-image" />
        </div>
        <div className="build">
        <h3 style={{fontFamily: 'Arial, sans-serif'}}><b>Holy Light of Euporia</b></h3>
          <p>Weapon(s): Euporia & Sacred Black Steel Twinblade (with Sacred Order ash of war)</p>
          <p>Incantations: Flame Grant Me Strength, Golden Vow, Shabriri's Howl (optional)</p>
          <p>Armor: Rakshasha Helmet, Legs, Arms, Gravebirds Blackquill Armor (chestpiece is a better version of Raptor's Black Feathers)</p>
          <p>Talismans: Claw Talisman, Sacred Scorpion Charm, Millicent Prosthesis, Rotten Winged Insignia</p>
          <p>Things to know: Before a fight, you should cast Black Steel's ash of war and during the fight, stack a couple hits on Euporia (until the blade starts glowing/drops of holy light start falling). This is where you can use Euporia's ash of war and emit a laser beam of holy damage that staggers and deals massive damage to enemies.</p>
          <img src={Euporia} alt="Euporia Build" className="build-image" />
        </div>
        <div className="build">
        <h3 style={{fontFamily: 'Arial, sans-serif'}}><b>Piercing Flame Katana</b></h3>
          <p>Weapon(s): Great Katana (with Blood Tax ash of war (keen))</p>
          <p>Incantations: Flame Grant Me Strength, Golden Vow, Bloodflame Blade</p>
          <p>Armor: Ansbach's set (grants bonus blood tax damage)</p>
          <p>Talismans: Lord of Blood's Exultation, Rotten Winged Insignia, Millicent Prosthesis, Shard of Alexander</p>
          <p>Things to know: Before a fight, you should cast your incantations first then cast Bloodflame Blade. Make sure to utilize the Blood Tax ash of war as it deals tons of damage while also healing you for a percentage of the damage dealt. It also deals a lot of poise damage to stagger bosses.</p>
          <img src={GKatana} alt="Great Katana Build" className="build-image" />
        </div>
        <div className="build">
          <h3>More to come</h3>
          <p>...</p>
          <img src={Maliketh} alt="Maliketh Build" className="build-image" />
        </div>
      </div>
    </div>
    </>
  );
}

export default RandomBuild;
