import React from 'react';
import ERMapScroll from './assets/ERMapScroll.png';
import Physick from './assets/Physick.png';
import './index.css'; // Ensure CSS file is imported correctly

function Guides() {
  return (
    <div>
      <div className="description-box">
        <p>To find guides of any kind (Collectibles, Builds, Quests, and more) click any link!</p>
      </div>
      <table className="gold-table">
        <tbody>
          <tr>
            <td className="image-link">
              <a href="/Talismans" style={{fontFamily: 'Arial, sans-serif'}}>
                <img src={ERMapScroll} alt="Talisman Guide" />
                <span>Talismans (Coming Soon)</span>
              </a>
            </td>
            <td className="description">
              <p>To find any talisman you're looking for.</p>
            </td>
          </tr>
          <tr>
            <td className="image-link">
              <a href="/Physick" style={{fontFamily: 'Arial, sans-serif'}}>
                <img src={Physick} alt="Physick Guide" />
                <span>Physick</span>
              </a>
            </td>
            <td className="description">
              <p>To find all Physick mixes.</p>
            </td>
          </tr>
          </tbody>
      </table>
    </div>
  );
}

export default Guides;
