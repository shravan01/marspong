namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const rightPlayer = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
4 . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . 4 
`
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.vx = 0 - sprite.vx
    if (otherSprite.right + 0 >= sprite.left) {
        sprite.x = 2 + sprite.x
        info.changeScoreBy(1)
    }
})
function create_right_paddle_ () {
    right_paddlleee = sprites.create(img`
5 5 5 c 
5 5 5 c 
5 5 5 b 
5 5 5 b 
5 5 5 6 
5 5 5 6 
5 5 5 a 
5 5 5 a 
5 5 5 4 
5 5 5 4 
5 5 5 8 
5 5 5 8 
5 5 5 7 
5 5 5 7 
5 5 5 3 
5 5 5 3 
`, SpriteKind.rightPlayer)
    right_paddlleee.x = 150
    right_paddlleee.setFlag(SpriteFlag.StayInScreen, true)
    controller.player2.moveSprite(right_paddlleee, 0, 200)
    info.player2.setScore(0)
    info.player2.setLife(3)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    right_paddlleee.y += 5
})
function create_ballele () {
    mars_ball = sprites.create(img`
. . . . . 4 4 4 4 . . . . . 
. . . 4 4 4 5 5 4 4 4 . . . 
. . 3 3 3 3 4 4 4 4 4 4 . . 
. 4 3 3 3 3 2 2 2 1 1 4 4 . 
. 3 3 3 3 3 2 2 2 1 1 5 4 . 
4 3 3 3 3 2 2 2 2 2 5 5 4 4 
4 3 3 3 2 2 2 4 4 4 4 5 4 4 
4 4 3 3 2 2 4 4 4 4 4 4 4 4 
4 2 3 3 2 2 4 4 4 4 4 4 4 4 
. 4 2 3 3 2 4 4 4 4 4 2 4 . 
. 4 2 2 3 2 2 4 4 4 2 4 4 . 
. . 4 2 2 2 2 2 2 2 2 4 . . 
. . . 4 4 2 2 2 2 4 4 . . . 
. . . . . 4 4 4 4 . . . . . 
`, SpriteKind.Ball)
    mars_ball.setFlag(SpriteFlag.StayInScreen, true)
    mars_ball.y = Math.randomRange(0, 120)
    mars_ball.setFlag(SpriteFlag.BounceOnWall, true)
    randomizeStartPos()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.rightPlayer, function (sprite, otherSprite) {
    sprite.vx = 0 - sprite.vx
    if (otherSprite.left - 1 <= sprite.right) {
        sprite.right = sprite.right - 2
        info.player2.changeScoreBy(1)
    }
})
function create_left_paddle () {
    odi_left_paddleeee = sprites.create(img`
a 7 7 a 
a a a a 
7 7 7 7 
2 3 9 3 
3 4 3 4 
3 4 3 4 
9 4 4 4 
7 4 4 4 
7 4 4 4 
9 4 4 4 
3 4 3 4 
2 4 3 4 
2 3 9 3 
7 7 7 7 
a a a a 
a 7 7 a 
`, SpriteKind.Player)
    odi_left_paddleeee.left = 10
    controller.moveSprite(odi_left_paddleeee, 0, 200)
    odi_left_paddleeee.setFlag(SpriteFlag.StayInScreen, true)
    info.setScore(0)
    info.setLife(3)
}
info.player2.onLifeZero(function () {
    game.splash("Left Player Wins")
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    right_paddlleee.y += -5
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    right_paddlleee.y += -5
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    right_paddlleee.y += 5
})
function randomizeStartPos () {
    if (Math.percentChance(50)) {
        mars_ball.vx = -50
    } else {
        mars_ball.vx = 50
    }
    if (Math.percentChance(50)) {
        mars_ball.vy = -50
    } else {
        mars_ball.vy = 50
    }
}
info.onLifeZero(function () {
    game.splash("Right Player Wins")
    game.over(true, effects.confetti)
})
let odi_left_paddleeee: Sprite = null
let mars_ball: Sprite = null
let right_paddlleee: Sprite = null
create_ballele()
create_left_paddle()
create_right_paddle_()
scene.setBackgroundColor(11)
game.onUpdate(function () {
    if (0 == mars_ball.left) {
        info.changeLifeBy(-1)
        mars_ball.destroy()
        create_ballele()
    } else if (scene.screenWidth() == mars_ball.right) {
        info.player2.changeLifeBy(-1)
        mars_ball.destroy()
        create_ballele()
    }
})
