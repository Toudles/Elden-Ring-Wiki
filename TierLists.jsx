import React from 'react';
import Sorceries from './Sorceries';
import RandomBuild from './RandomBuild';
import ERBoss from './assets/ERBosses.png';
import ERSorc from './assets/ERSorceries.png';
import ERRB from './assets/ERRandomBuild.png';
import './index.css'; // Ensure CSS file is imported correctly

function TierLists() {
  return (
    <div>
      <div className="description-box">
        <p>To see meta strategies/weapons in this current Elden Ring patch (1.01), click the links below</p>
      </div>
      <table className="gold-table">
        <tbody>
          <tr>
            <td className="image-link">
              <a href="/Bosses" style={{fontFamily: 'Arial, sans-serif'}}>
                <img src={ERBoss} alt="Bosses" />
                <span>Bosses</span>
              </a>
            </td>
            <td className="description">
              <p>Find strategies to defeat the toughest bosses in Elden Ring.</p>
            </td>
          </tr>
          <tr>
            <td className="image-link">
              <a href="/Sorceries" style={{fontFamily: 'Arial, sans-serif'}}>
                <img src={ERSorc} alt="Sorceries" />
                <span>Sorceries</span>
              </a>
            </td>
            <td className="description">
              <p>Discover the most powerful sorceries and how to use them effectively.</p>
            </td>
          </tr>
          <tr>
            <td className="image-link">
              <a href="/RandomBuild" style={{fontFamily: 'Arial, sans-serif'}}>
                <img src={ERRB} alt="Random Builds" />
                <span>Random Builds</span>
              </a>
            </td>
            <td className="description">
              <p>Discover the funniest and wildest of builds that are interestingly viable.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TierLists;
