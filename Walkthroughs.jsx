import './index.css';
import React from 'react';
import Banner from './assets/Banner.png';


function Walkthroughs(){

    return(
        <>
        <img src={Banner} className="banner" alt="Banner" />
            <h1>*Elden Ring Base Game Guide/Walkthrough (Coming Soon)</h1>
            <ul className='custom-bullets'>
                <li><h3>To get more details about how you should progress through the base game in order to receive all, click here: Guide Progression </h3></li>
                <li><h3>To get more details about how you can progress through the base game in order to 100% the game, click here: Walkthrough Content</h3></li>
            </ul>



            <br />



            <h1>*Elden Ring Shadow of the Erdtree DLC Guide/Walkthrough (Coming Soon)</h1>
            <ul className='custom-bullets'>
                <li><h3>To get more details about how you should progress through the DLC in order to receive all rewards within a playthrough or two, click here: DLC Guide Progression</h3></li>
                <li><h3>To get more details about how you can progress through the DLC in order to 100% the DLC, click here: DLC Walkthrough Content</h3></li>
            </ul>
        </>
    );
}


export default Walkthroughs;
