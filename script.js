function modal (date) {
    let dateStamp = 'null'
    if (date == 1) {
        dateStamp = '23.04.2021'
    }
    if (date == 2) {
        dateStamp = '24.04.2021'
    }
    if (date == 3) {
        dateStamp = '25.04.2021'
    }
    const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.tabIndex = '-1'
        modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Вітаю!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>Результати будуть доступні: <h3>18:00 ${dateStamp}</h3></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-close-bottom btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        `
        )
        document.body.appendChild(modal)
    setTimeout(() => {
        modal.remove()
    }, 3000)
    document.querySelector('.btn-close-bottom').addEventListener('click', () => {
        modal.remove()
    })
    document.querySelector('.btn-close').addEventListener('click', () => {
        modal.remove()
    })
}
