const butInstall = document.getElementById('buttonInstall');
window.addEventListener('beforeinstallprompt', (event) => {
        
        window.defferedPrompt = event;
        butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
const promptMessage = window.defferedPrompt;
            if(!promptMessage){
                return;
            }
            promptMessage.prompt();
    window.defferedPrompt = null;
    butInstall.classList.toggle('hidden', true)
        });
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
window.defferedPrompt = null;

});