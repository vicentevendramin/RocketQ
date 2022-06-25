export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //functionality: add active modal class
        modalWrapper.classList.add("active")
    }
    function close(){
        //functionality: remove active modal class
        modalWrapper.classList.remove("active")
    }

    return{
        open,
        close
    }
}