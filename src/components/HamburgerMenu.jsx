import React from 'react';

function HamburgerMenu({ children }) {
  const [stateHamb, setStateHamb] = React.useState(false);

  const OpenCloseHumburger = () => {
    setStateHamb(!stateHamb);
    console.log('hamburger state');
  };

  return (
    <>
      <div style={{ width: stateHamb ? '100%' : 0 }} id="myNav" className="overlay">
        <p className="closebtn" onClick={OpenCloseHumburger}>
          &times;
        </p>
        <div className="overlay-content">{children}</div>
      </div>

      <span onClick={OpenCloseHumburger} style={{ fontSize: '30px', cursor: 'pointer' }}>
        &#9776;
      </span>
    </>
  );
}

export default HamburgerMenu;
