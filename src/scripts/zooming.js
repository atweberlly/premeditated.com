import Zooming from 'zooming'

function modal() {
  const zooming = new Zooming({
    bgColor: '#000',
    bgOpacity: 0.75,
    transitionDuration: 0.5,
  })

  const image = document.getElementById('main-image')
  const thumbnails = document.querySelectorAll('.thumbnail')

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (e) => {
      console.log('hi')
      image.setAttribute('src', e.target.src)
    })
  })

  zooming.listen('.img-zoomable')
}

export default modal
