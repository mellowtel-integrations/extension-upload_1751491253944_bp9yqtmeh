import Mellowtel from 'mellowtel';

let mellowtel;

(async () => {
    mellowtel = new Mellowtel('f4387458');
    await mellowtel.initBackground();
})();

chrome.runtime.onInstalled.addListener(async function(details) {
    console.log('Extension Installed or Updated');
    await mellowtel.generateAndOpenOptInLink();
});