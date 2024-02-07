const elModal = document.querySelector('.modal')
const elOpenBtn = document.getElementById('open-modal')
const elCloseBtn = document.getElementById('close-modal')


elOpenBtn.addEventListener('click', () => {
    elModal.style.display = 'flex';
})

elCloseBtn.addEventListener('click', () => {
    elModal.style.display = 'none';

})



