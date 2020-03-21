window.onload = () => {
    console.log(firebase.app().name);
    view.setActiveScreen('chat');
    document
        .getElementById('already-have-account')
        .addEventListener('click', () => {
            view.setActiveScreen('login');
        });
};
