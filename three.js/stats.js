import Stats from 'stats-js'

export default () => {
  const stats = new Stats()
  stats.domElement.style.position = 'fixed'
  document.body.appendChild(stats.domElement)
  const loop = () => {
    stats.update()
    window.requestAnimationFrame(loop)
  }
  window.requestAnimationFrame(loop)
}
