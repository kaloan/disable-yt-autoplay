function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
sleep(1000).then(() => {
    [...document.getElementsByClassName('ytp-autonav-toggle-button')].forEach(
        button => {
            if(button.ariaChecked === 'true') button.click();
    });
});

