scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.splash("Well done!", "Now find the treasure chest!")
    tiles.setCurrentTilemap(tilemap`level0`)
    Zombie1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . . f f 3 3 2 f . . . . . . . 
        . . . f f 3 3 3 3 . . . . . . . 
        . . . f 3 3 3 1 1 . . . . . . . 
        . . . f 1 1 1 1 2 . . . . . . . 
        . . . a a a a a a a 2 3 3 . . . 
        . . . a a 2 a a a a a 3 . . . . 
        . . . . a a a 2 . . . . . . . . 
        . . . . a a a a . . . . . . . . 
        . . . . a a 2 a . . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . e e e e . . . . . . . . 
        . . . . e e e e e . . . . . . . 
        `, SpriteKind.Enemy)
    Zombie1.setPosition(250, 110)
    Zombie1.follow(Pupil, 20)
    Zombie2 = sprites.create(img`
        . . . 4 4 4 4 4 4 4 . . . . . . 
        . . . 4 4 3 3 3 3 9 . . . . . . 
        . . . 4 4 3 3 3 3 3 3 . . . . . 
        . . . 4 4 3 3 3 3 3 . . . . . . 
        . . 4 . . 7 7 7 7 7 7 7 7 7 . . 
        . 4 . . . 7 7 7 7 7 7 7 7 7 . . 
        4 . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.Enemy)
    Zombie2.setPosition(250, 110)
    Zombie2.follow(Pupil, 40)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(Zombie1, effects.ashes, 500)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
let Zombie2: Sprite = null
let Zombie1: Sprite = null
let Pupil: Sprite = null
Pupil = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 4 4 4 4 4 4 4 4 . . . . . 
    . . . 4 4 4 4 4 4 4 4 . . . . . 
    . . . 4 3 3 3 3 3 3 4 . . . . . 
    . 4 4 4 3 f 3 3 f 3 4 4 4 . . . 
    4 4 . . 3 3 3 3 3 3 . . 4 4 4 . 
    . . . . 3 3 f f 3 3 . . . . 4 . 
    . 2 2 2 2 2 1 1 2 2 2 2 2 . . . 
    . 2 2 2 2 2 1 1 2 2 2 2 2 . . . 
    . 2 2 2 2 2 1 1 2 2 2 2 2 . . . 
    . 2 2 . 2 2 1 1 2 2 . 2 2 . . . 
    . 2 2 . 2 2 1 1 2 2 . 2 2 . . . 
    . 2 2 . 2 2 1 1 2 2 . 2 2 . . . 
    . . . . 2 2 1 1 2 2 . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . . b b b b b b . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
Pupil,
[img`
    . . . . . . . . . . . . . . . . 
    . . . 4 4 4 4 4 4 4 4 . . . . . 
    . . . 4 4 4 4 4 4 4 4 . . . . . 
    . . . 4 3 3 3 3 3 3 4 . . . . . 
    . 4 4 4 3 f 3 3 f 3 4 4 4 . . . 
    4 4 . . 3 3 3 3 3 3 . . 4 4 4 . 
    . . . . 3 3 f f 3 3 . . . . 4 . 
    . 2 2 2 2 2 1 1 2 2 2 2 2 . . . 
    . 2 2 2 2 2 1 1 2 2 2 2 2 . . . 
    . 2 2 2 2 2 1 1 2 2 2 2 2 . . . 
    . 2 2 . 2 2 1 1 2 2 . 2 2 . . . 
    . 2 2 . 2 2 1 1 2 2 . 2 2 . . . 
    . 2 2 . 2 2 1 1 2 2 . 2 2 . . . 
    . . . . 2 2 1 1 2 2 . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . . b b b b b b . . . . . . 
    `],
500,
true
)
info.setLife(3)
controller.moveSprite(Pupil)
scene.cameraFollowSprite(Pupil)
tiles.setCurrentTilemap(tilemap`level2`)
Zombie1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . f f 3 3 2 f . . . . . . . 
    . . . f f 3 3 3 3 . . . . . . . 
    . . . f 3 3 3 1 1 . . . . . . . 
    . . . f 1 1 1 1 2 . . . . . . . 
    . . . b b b b b b b 2 3 3 . . . 
    . . . b b 2 b b b b b 3 . . . . 
    . . . . b b b 2 . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . . b b 2 b . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . f f f f . . . . . . . . 
    . . . . e e e e . . . . . . . . 
    . . . . e e e e e . . . . . . . 
    `, SpriteKind.Enemy)
Zombie1.setPosition(250, 110)
Zombie1.follow(Pupil, 20)
game.splash("Avoid the Zombies!", "Find the tree to escape!")
