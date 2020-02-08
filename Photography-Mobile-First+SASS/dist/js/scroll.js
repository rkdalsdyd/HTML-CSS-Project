(function (){

    const workContainer = document.querySelector('.photos-header');
    
    function scrollToWork(event){
        event.preventDefault();

        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: window.pageYOffset + workContainer.getBoundingClientRect().top
        });
    }

    function main(){
        document.querySelector('.view-work').addEventListener('click', scrollToWork);
    }
    main();
})();