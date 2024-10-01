import { useEffect } from 'react';

const _hsq = () => (typeof window !== 'undefined' && window._hsq ? window._hsq : []);

export const HubSpotTrackingScript = ({ portalID, EU = false }) => {
    let HSPath = 'js.hs-scripts.com';
    if (EU) {
        HSPath = 'js-eu1.hs-scripts.com';
    }

    useEffect(() => {
        if (!window._hsq) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.id = 'hs-script-loader';
            script.src = `https://${HSPath}/${portalID}.js`;
            document.head.appendChild(script);
        }
    }, [portalID]);

    return null; // No UI, just for injecting the script
};

export const setPath = (path) => {
    _hsq().push(['setPath', path]);
};

export const trackPageView = () => {
    _hsq().push(['trackPageView']);
};

export const identify = (identify = {}) => {
    _hsq().push(['identify', identify]);
};

export const identifyByEmail = (email, customProperties = {}) => {
    identify({ email, ...customProperties });
};

export const identifyByID = (id, customProperties = {}) => {
    identify({ id, ...customProperties });
};

export const trackCustomBehavioralEvent = (eventName, eventProperties = {}) => {
    _hsq().push(['trackCustomBehavioralEvent', { name: eventName, properties: eventProperties }]);
};

export const addPrivacyConsentListener = (callback) => {
    _hsq().push(['addPrivacyConsentListener', callback]);
};

export const revokeCookieConsent = () => {
    _hsq().push(['revokeCookieConsent']);
};

export const addIdentityListener = (callback) => {
    _hsq().push(['addIdentityListener', callback]);
};

export const doNotTrack = () => {
    _hsq().push(['doNotTrack']);
};

export const refreshPageHandlers = () => {
    _hsq().push(['refreshPageHandlers']);
};

