import { useState } from 'react';

function ModeToggler() {
  const [darkModeOn, setDarkModeOn] = useState(true);

  const darkMode = <h1>Dark Mode is on</h1>;
  const lightMode = <h1>Light Mode is on</h1>;

  function handleClick() {
    setDarkModeOn(!darkModeOn);
    if (darkModeOn) {
      console.log("Dark mode is on");
    } else {
      console.log("Light mode is on");
    }
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default ModeToggler;
