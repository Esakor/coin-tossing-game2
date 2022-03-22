input.onButtonPressed(Button.A, function () {
    Coin = randint(1, 2)
    if (Coin == 1) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        Coin = 0
    } else if (Coin == 2) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        Coin = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Coin == 1 && Coin == 1) {
        basic.showString("P1")
        Player_1 += game.score()
    } else if (Coin == 2 && Coin == 2) {
        basic.showString("P1")
        Player_1 += game.score()
    } else if (Coin == 2 || Coin == 1) {
        basic.showString("P2")
        Player_2 += game.score()
    } else if (Coin == 1 || Coin == 2) {
        basic.showString("P2")
        Player_2 += game.score()
    }
})
input.onButtonPressed(Button.B, function () {
    let head = 0
    let tails = 0
    Coin = randint(tails, head)
    if (Coin == head) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.pause(1000)
    } else if (Coin == tails) {
        basic.pause(1000)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    Coin = 0
})
let Coin = 0
let Player_1 = game.score()
let Player_2 = game.score()
basic.forever(function () {
	
})
