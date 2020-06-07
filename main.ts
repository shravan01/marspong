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
`, SpriteKind.Player)
    right_paddlleee.x = 150
    controller.player2.moveSprite(right_paddlleee, 0, 200)
    right_paddlleee.setFlag(SpriteFlag.StayInScreen, true)
    info.player2.setScore(0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    mars_ball.vx = 0 - mars_ball.vx
    if (sprite == odi_left_paddleeee) {
        info.changeScoreBy(1)
        mars_ball.x = mars_ball.x + 2
    } else {
        info.player2.changeScoreBy(1)
        mars_ball.x = mars_ball.x - 2
    }
})
function create_ballele () {
    mars_ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Ball)
    mars_ball.setFlag(SpriteFlag.StayInScreen, true)
    mars_ball.setVelocity(50, 50)
    mars_ball.setFlag(SpriteFlag.BounceOnWall, true)
}
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
    odi_left_paddleeee.x = 10
    controller.moveSprite(odi_left_paddleeee, 0, 200)
    odi_left_paddleeee.setFlag(SpriteFlag.StayInScreen, true)
    info.setScore(0)
}
let odi_left_paddleeee: Sprite = null
let mars_ball: Sprite = null
let right_paddlleee: Sprite = null
create_left_paddle()
create_right_paddle_()
create_ballele()
