import React from 'react'; // Import React library to use JSX and React functionalities
import './index.css'; // Import CSS file for styling this component
import Logo from './Logo.jsx'; // Import the Logo component to use within this component

// Define the Background component, which takes 'title' and 'children' as props
function Background({ title, children }) {
  return (
    <div className='Background'> 
      {/* Main container with a CSS class for styling */}
      <Logo /> 
      {/* Render the Logo component */}
      <div className='title'> 
        {/* Container for the title */}
        {title} 
        {/* Render the title prop passed to the Background component */}
      </div>
      <div className='content'> 
        {/* Container for the content */}
        {children} 
        {/* Render the children prop passed to the Background component */}
      </div>
    </div>
  );
}

export default Background; 
// Export the Background component for use in other parts of the application
