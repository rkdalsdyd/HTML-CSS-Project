(function(){

    const signInButton = document.querySelector('#sign-in-container .content button'),
        singUpButton = document.querySelector('#sign-up-container .content button');

    function signInSliding(event){
        event.preventDefault();
    }

    function signUpSliding(event){
        event.preventDefault();
    }

    function main(){
        signInButton.addEventListener('click',signInSliding);
        singUpButton.addEventListener('click',signUpSliding);
    }
    main();

})();