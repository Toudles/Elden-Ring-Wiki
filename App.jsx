import React from 'react'; 
// Import React library to use JSX and React functionalities
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// Import Router components for handling routing in the application
import Background from './Background.jsx'; 
// Import the Background component for consistent styling across pages
import Homepage from './Homepage.jsx'; 
import Personal from './Personal.jsx'; 
import Walkthroughs from './Walkthroughs.jsx'; 
import Bosses from './Bosses.jsx'; 
import Sorceries from './Sorceries.jsx'; 
import RandomBuild from './RandomBuild.jsx'; 
import Talismans from './Talismans.jsx'; 
import Guides from './Guides.jsx'; 
import TierLists from './TierLists.jsx'; 
import Physick from './Physick.jsx'; 
import Glitches from './Glitches.jsx'; 

// Define the App component, which sets up routing for the application
function App() {
  return (
    <Router>
      {/* Wrap the Routes component with Router to enable routing */}
      <Routes>
        {/* Define the routing paths and associated components */}
        <Route path="/" element={<Background title="Welcome to the Elden Ring Wiki"><Homepage /></Background>} />
        {/* Route for the homepage with the Background component wrapping the Homepage component */}
        <Route path="/Guides" element={<Background title="Guides"><Guides /></Background>} />
        {/* Route for the Guides page */}
        <Route path="/tierlists" element={<Background title="Tier Lists"><TierLists /></Background>} />
        {/* Route for the Tier Lists page */}
        <Route path="/Bosses" element={<Background title="Bosses"><Bosses /></Background>} />
        {/* Route for the Bosses page */}
        <Route path="/Sorceries" element={<Background title="Sorceries"><Sorceries /></Background>} />
        {/* Route for the Sorceries page */}
        <Route path="/RandomBuild" element={<Background title="Random Builds"><RandomBuild /></Background>} />
        {/* Route for the Random Builds page */}
        <Route path="/Talismans" element={<Background title="Talismans"><Talismans /></Background>} />
        {/* Route for the Talismans page */}
        <Route path="/Physick" element={<Background title="Physick"><Physick /></Background>} />
        {/* Route for the Physick page */}
        <Route path="/Personal" element={<Background title="Personal"><Personal /></Background>} />
        {/* Route for the Personal page */}
        <Route path="/Walkthroughs" element={<Background title="Walkthroughs"><Walkthroughs /></Background>} />
        {/* Route for the Walkthroughs page */}
        <Route path="/Glitches" element={<Background title="Glitches"><Glitches /></Background>} />
        {/* Route for the Glitches page */}
      </Routes>
    </Router>
  );
}

export default App; 
// Export the App component for use in the entry point of the application
