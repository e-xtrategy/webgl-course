import { Container, Sprite, Text, TextStyle, filters } from 'pixi.js'

const WIDTH = 150
const HEIGHT = 50

const createText = text => {
  const style = new TextStyle({
    fontSize: 18,
    fill: '#ffffff'
  })

  const textElement = new Text(text, style)

  textElement.x = (WIDTH - textElement.width) / 2
  textElement.y = (HEIGHT - textElement.height) / 2

  return textElement
}

const createSprite = () => {
  const sprite = Sprite.fromImage('./assets/button.png')
  sprite.height = HEIGHT
  sprite.width = WIDTH
  return sprite
}

export default ({text, x, y, onClick = () => {}}) => {
  const container = new Container()

  container.interactive = true
  container.buttonMode = true
  container.on('click', onClick)

  const textElement = createText(text)
  const sprite = createSprite()

  container.on('pointerover', () => {
    const colorMatrix = new filters.ColorMatrixFilter()
    sprite.filters = [colorMatrix]
    sprite.filters[0].lsd(2)
  })

  container.on('pointerout', () => {
    sprite.filters = []
  })

  container.x = x
  container.y = y
  container.height = HEIGHT
  container.width = WIDTH

  container.addChild(sprite)
  container.addChild(textElement)

  return container
}
