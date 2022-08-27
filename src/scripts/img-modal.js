function imageModal() {
  const body = document.querySelector('body')
  const images = document.querySelectorAll('.wig')
  const modal = document.getElementById('modal')
  const imgModal = document.getElementById('img-modal')
  const closeButton = document.querySelector('.close-button')

  function closeModal() {
    body.classList.remove('overflow-hidden')
    imgModal.classList.remove('active')
  }

  function closeModalOnEsc() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey)

        if (isNotCombinedKey) {
          closeModal()
        }
      }
    })
  }

  images.forEach((image) => {
    image.addEventListener('click', (e) => {
      body.classList.add('overflow-hidden')
      imgModal.classList.add('active')
      modal.setAttribute('src', e.target.src)

      if (imgModal.classList.contains('active')) {
        closeModalOnEsc()
      }
    })
  })

  closeButton.addEventListener('click', closeModal)
}

export default imageModal
