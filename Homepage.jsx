import React from 'react';
import Banner from './assets/Banner.png';
import P1 from './assets/preview1.png';
import P2 from './assets/preview2.png';
import P3 from './assets/preview3.png';
import BannerV from './assets/BannerVictory.png';
import Rating from './assets/ERRating.png';

function Homepage() {
    return (
        <div>
            <img src={Banner} className="banner" alt="Banner" />
            <p>Updated July, 27th, 2024 @ 4:33 AM</p>
            <h1 style={{ fontFamily: 'Arial, sans-serif' }}>Information Regarding the Game</h1>
            
            <h2 className="section-header">* Latest Elden Ring Updates</h2>
            <h3>* Important: Added a fix where when Torrent dies, calling for Torrent again will have the option preset to "Yes" rather than "No" like it was before.</h3>
            <ul className="custom-bullets">
                <li><h3>Most recent patch: Version 1.12.3 details</h3></li>
                <ul className="custom-bullets">
                <li><b>PvP-exclusive balance adjustments</b></li>
                    <ul className="custom-bullets">
                        <li>Decreased the damage and damage animation of the shearing vacuum effect of the “Swift Slash” Skill.</li>
                    </ul>
                <li><b>General balance adjustments</b></li>
                    <ul className="custom-bullets">
                        <li>Increased the Intelligence scaling of the Carian Sorcery Sword and slightly decreased the base damage.</li>
                        <li>Extended the throwing attacks range for the following weapons: Smithscript Dagger / Smithscript Cirque</li>
                        <li>Changed the placement of the bosses in the re-fight against the Golden Hippopotamus and Commander Gaius bosses to be in the same position as in the first fight.</li>
                    </ul>
                <li><b>Bug Fixes</b></li>
                    <ul className="custom-bullets">
                        <li>Fixed a bug that caused the Rolling Sparks Skill to deal more damage than expected.</li>
                        <li>Fixed a bug that caused the Rolling Sparks and Wall of Sparks Skills to deal no damage while some special effects were applied to the player.</li>
                        <li>Fixed a bug where some special effects of a right-handed weapon would also be applied to the following Weapon Skills when cast with the left hand:</li>
                            <ul className="custom-bullets">
                                <li>Feeble Lord's Frenzied Flame</li>
                                <li>Discus Hurl</li>
                            </ul>
                        <li>Fixed a bug where successfully guarding while attacking using the Thrusting Shield weapon type would consume less stamina than intended.</li>
                        <li>Fixed a bug that prevented players from cancelling the attack recovery of two-handed strong attacks by rolling for certain weapons of the Backhand Blades weapon type.</li>
                        <li>Fixed a bug that caused the Lightning Perfume Bottle and Frenzyflame Perfume Bottle weapons to deal double damage under certain circumstances.</li>
                        <li>Fixed a bug where the Arcane scaling of the Bloodfiend's Arm weapon was higher than intended when setting an affinity. The status buildup of the heavy attack was also reduced.</li>
                        <li>Fixed a bug where the Faith scaling of the Gazing Finger weapon was not being applied correctly.</li>
                        <li>Fixed a bug where the damage animation of some attacks of the Fire Knight's Greatsword against players was different than expected.</li>
                        <li>Fixed a bug where the attack affinity of some attacks of the Fire Knight's Greatsword were different than expected.</li>
                        <li>Fixed a bug that caused some affinities for the following weapons to be higher than intended:</li>
                            <ul className="custom-bullets">
                                <li>Smithscript Dagger</li>
                                <li>Smithscript Cirque</li>
                                <li>Smithscript Axe</li>
                                <li>Smithscript Greathammer</li>
                                <li>Smithscript Spear</li>
                                <li>Golem Fist</li>
                                <li>Smithscript Shield</li>
                            </ul>
                        <li>Fixed a bug that caused enemies to heal when the Maximum HP reduction gradual HP reduction effect  applied by Black Knife Tiche wore off.</li>
                        <li>Fixed a bug that caused summoned NPCs to behave differently than expected under certain circumstances.</li>
                        <li>Fixed a bug that where the unblockable bite attack of the Golden Hippopotamus boss would connect with players more easily than intended.</li>
                        <li>Fixed a bug that caused text to display differently than expected.</li>
                        <li>Several other performance improvements and bug fixes.</li>
                    </ul>
                <li><b>Possible unstable performance fixes</b></li>
                    <ul className="custom-bullets">
                        <li>For the PS5 version of the game, unstable framerate may be improved by using the "Rebuild Database" option from the device's safe mode.</li>
                        <li>In some PC versions, Ray Tracing may be unintentionally enabled and cause unstable performance. Please check the Ray Tracing setting in the "System" - "Graphics Settings" - "Raytracing Quality" from the title screen or in-game menu.</li>
                        <li>In the PC Version, the message "Inappropriate activity detected" may appear without cheating.</li>
                        <p>To fix this issue, please verify the integrity of the game's files before restarting the game.</p>
                        <li>In the PC version, unstable framerate may be caused by third party applications that control mouse behavior. Deactivating these third party applications may improve performance.</li>
                    </ul>
                <br />
                <p style={{ color:'gold' }}>App Ver. 1.12.3</p>
                <p style={{ color:'gold' }}>Regulation Ver. 1.12.4</p>
                <br />
                <p>In PS4, PS5, Xbox One and Xbox Series X|S versions, Regulation files can be downloaded by logging in to the server.</p>
                <p>If the Regulation Ver. listed in the lower right corner of the title screen is not 1.12.4, please select LOGIN and apply the latest regulation before enjoying the game.</p>
                <br />
                <p>Online play requires the player to apply this update.</p>
                <br />
                <p>Further updates will be distributed in the future for you to continue to enjoy <b>ELDEN RING</b> more comfortably.</p>
                <br />
                
            </ul>
            </ul>
            
            <h2 className="section-header">* Shadow of the Erdtree related content</h2>
            <ul className="custom-bullets">
                <li>Shadow Lands guide</li>
                <ul className="custom-bullets">
                    <li>Shadow Lands guide</li>
                    <li>Important Things to Look Out For</li>
                    <li>Important Character Questlines</li>
                    <li>All <b>NEW</b> Legendary Armaments</li>
                    <li>All <b>NEW</b> Crystal Tears</li>
                    <li>All <b>NEW</b> Ash of Wars</li>
                    <li>All <b>NEW</b> Sorceries</li>
                    <li>All <b>NEW</b> Incantations</li>
                </ul>
            </ul>
            
            <h2 className="section-header">* Elden Ring Details</h2>
            <ul className="custom-bullets">
                <li>What Platforms is Elden Ring Available On?</li>
                <ul className='custom-bullets'>
                    <li>Elden Ring is available on PS4/5, X Box One/One X, and PC for $59.99.</li>
                </ul>
            </ul>
            
            <br />
            <div className="banner-container">
                <img src={Banner} className="banner" alt="Banner" />
                <h2 className="section-header" style={{color: 'gold'}} >Tarnished of the Lands Between</h2>
                <p className="center-text">The Golden Order has been shattered. Throughout the Lands Between, Demigods holding shards of the Elden Ring squabble and make war over the ruins of a perfect realm, now abandoned by the golden guidance of the Greater Will.</p>
                <p className="center-text">As the echoes of this conflict thunder in the distance, an outcast arrives. Once, their ancestors called the Lands Between home, but the blessed light of grace was lost to their tribe long ago and they were expelled from the kingdom. They are the Tarnished, and they have returned to claim the Elden Lordship promised to them by legend.</p>
                <p className="center-text">This is the world of ELDEN RING. As a Tarnished, the Lands Between await your exploration. You will ride through the vast fields, gallop over rolling hills, and leap to the top of rocky crags on your ephemeral steed, revealing a world teeming with life and danger.</p>
                <p className="center-text">In the grand fields where your journey begins, mythic creatures prowl the veldts, ineffable horrors lurk in the bogs and marshes, and all manner of soldiers and itinerant warriors are waiting for those who wander unawares. Shy creatures nibble on sweet grasses or scuttle through the underbrush.</p>
                <p className="center-text">Those few inhabitants who are not mad or hostile linger near the broken remnants of cities left behind by the Shattering. They may have answers for you, if you help them. Above them all, ensconced in vast legacies bristling with traps, secrets, and guardians, the Demigods – warped Lords who began as members of a royal and noble family – rule their domains with the unyielding power granted by shards of the Elden Ring.</p>
            </div>
            
            <div className="image-row">
                <img src={P1} className="preview-image" alt="Preview 1" />
                <img src={P2} className="preview-image" alt="Preview 2" />
                <img src={P3} className="preview-image" alt="Preview 3" />
            </div>
            
            <div className="banner-container">
                <img src={Banner} className="banner" alt="Banner" />
                <h2 className="section-header">Victory Awaits</h2>
                <p className="center-text">The guidance of lost graces – should you find them - will put you on a road to re-take these lands from the Demigods through might and magic, but you need not follow their path.</p>
                <p className="center-text">The choice is yours. Do you crave power, or do you seek understanding? Decide for yourself, then build your character as you see fit.</p>
                <p className="center-text">Try dozens of skills and find one to best suit your style. Practice stealth to avoid danger or catch enemies unaware. Use the environment, the weather, and the time of day to gain an advantage. Learn the art of combat , where you must read your enemy’s intentions and a well-timed dodge or parry could be the difference between life and death. Ride your steed into battle against mounted mercenaries and cut them from their horses. Master arcane spells from the masters that still linger among the ruins of the war. Summon familiar spirits to even the odds against you or call on your fellow Tarnished to fight at your side and share the burden as you explore. Or, delve into the complex, bloody history of the Shattering and discover the lost secrets of the Demigods and their kin. All these paths are possible, and more.</p>
                <p className="center-text">Ultimately, your journey will be defined by the strength of your own ambition. The greater your goals, the greater the challenge will be. Should you choose to claim the Lands Between as your birthright then yes, you must fight.</p>
                <p className="center-text"><b>And yes, you may die.</b></p>
                <p className="center-text"><b>But you will return to fight again.</b></p>
                <p className="center-text"><b>For that is how a champion – or a Lord – is born.</b></p>
                <img src={BannerV} alt="Banner Victory" />
                <img src={Rating} className="rating-image" alt="Elden Ring Ratings" />
            </div>
        </div>
    );
}

export default Homepage;
