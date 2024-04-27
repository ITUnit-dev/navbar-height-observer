# Dynamic height of the Navbar

This repository contains an example of the Navbar component for React, which automatically determines and updates its height depending on the content. The height also changes dynamically when the menu is opened by a button in the mobile version. The React-Bootstrap library is used to build the interface.

## How it works

### Navbar.jsx

The `Navbar.jsx` contains a Navbar component that uses ResizeObserver to track height changes. The menu disclosure event in the mobile version is also handled.
The example given in the source texts demonstrates how the current height of the Navbar is stored in the store using MobX. To do this, the application context is used, which is passed to the Navbar component, as well as the MobX monitoring mechanism to track height changes and update the application status.

```javascript
import { useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";

const BasicExample = observer(() => {
  const refNav = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (refNav.current) {
        const navbarHeight = refNav.current.offsetHeight;
        console.log("Navbar height:", navbarHeight);
        // Here you can add logic to transfer the height to the storage or use it at your discretion
      }
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(refNav.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <Navbar ref={refNav} expand="lg" className="bg-body-tertiary">
      {/* Your Navbar content is here */}
    </Navbar>
  );
});

export default BasicExample;
```

### App.jsx

The `App.jsx` is the main component of the application. It includes a Navbar and a container that adapts its height to the height of the Navbar using the `calc()` CSS function. The current height of the Navbar is displayed inside the container.

## How to use

1. Install the dependencies using `npm install`.
2. Launch the application using `npm start`.
3. Open the browser and go to `http://localhost:5173 `.
