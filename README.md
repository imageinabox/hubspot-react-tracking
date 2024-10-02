# HubSpot Tracking Integration for React

This project provides a simple way to integrate HubSpot tracking into your React application. It allows you to inject the HubSpot tracking script globally and trigger various HubSpot tracking events (e.g., `identify`, `trackPageView`, and `trackCustomBehavioralEvent`) throughout your app.

## Installation

To install, clone this repository or copy the relevant files into your project.

## Usage

### Injecting the HubSpot Tracking Script

You can inject the HubSpot tracking script into your app using the `HubSpotTrackingScript` component. This will ensure the tracking functionality is loaded when the app is rendered.

```js
import React from 'react';
import { HubSpotTrackingScript } from './HubSpotTrackingScript';

const App = () => {
  return (
    <>
      <HubSpotTrackingScript portalID="1234567890" />
      <div className="App">
        <h1>Welcome to the App</h1>
      </div>
    </>
  );
};

export default App;
```

#### EU Hosted HubSpot Accounts
Set the EU parameter to `true` and it will include the tracking code from js-eu1.hs-scripts.com.
```js
<HubSpotTrackingScript portalID="1234567890" EU={true} />
```

### Tracking Page Views and Events

You can track page views and various other events using the provided functions.

```jsx
import React, { useEffect } from 'react';
import { trackPageView, setPath } from './HubSpotTracking';

const App = () => {
  useEffect(() => {
    // Track page view when the component mounts
    trackPageView();
    
    // Set the current path for tracking
    setPath(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <h1>Welcome to the App</h1>
    </div>
  );
};

export default App;
```

### Identifying Users

You can identify users in HubSpot using the `identifyByEmail` function.

```jsx
import React, { useEffect } from 'react';
import { identifyByEmail } from './HubSpotTracking';

const UserProfile = ({ user }) => {
  useEffect(() => {
    if (user) {
      identifyByEmail(user.email, {
        firstName: user.firstName,
        lastName: user.lastName,
      });
    }
  }, [user]);

  return <div>Welcome, {user.firstName}!</div>;
};

export default UserProfile;
```

## Available Functions

- `setPath(path)`: Sets the current page path.
- `trackPageView()`: Tracks a page view.
- `identify(identifyObject)`: Identifies a user with additional properties.
- `identifyByEmail(email, customProperties)`: Identifies a user by email.
- `identifyByID(id, customProperties)`: Identifies a user by ID.
- `trackCustomBehavioralEvent(eventName, eventProperties)`: Tracks a custom event.
- `addPrivacyConsentListener(callback)`: Adds a listener for privacy consent changes.
- `revokeCookieConsent()`: Revokes cookie consent for a user.
- `addIdentityListener(callback)`: Adds a listener for user identity across domains.
- `doNotTrack()`: Activates the "Do Not Track" feature.
- `refreshPageHandlers()`: Reapplies event handlers for updated content.

## License

This project is licensed under the MIT License.
