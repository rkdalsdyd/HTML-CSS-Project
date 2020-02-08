(function(){

    const signInButton = document.querySelector('#overlay-container .overlay-left button'),
        singUpButton = document.querySelector('#overlay-container .overlay-right button'),
        overlayContainer = document.querySelector('#wrapper');

    function signInSliding(event){
        event.preventDefault();
        overlayContainer.classList.remove('sign-up-active');
    }

    function signUpSliding(event){
        event.preventDefault();
        overlayContainer.classList.add('sign-up-active');
    }

    function main(){
        signInButton.addEventListener('click', signInSliding);
        singUpButton.addEventListener('click', signUpSliding);
    }
    main();

})();