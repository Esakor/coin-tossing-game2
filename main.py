Coin = 0
tails = 0
head = 0

def on_button_pressed_a():
    global Coin
    Coin = randint(tails, head)
    if Coin == head:
        basic.show_leds("""
            # . . . #
                        # . . . #
                        # # # # #
                        # . . . #
                        # . . . #
        """)
        Coin = 0
    elif Coin == tails:
        basic.show_leds("""
            # # # # #
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
        Coin = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if False and False:
        pass
    elif False and False:
        pass
    elif False or False:
        pass
    elif False or False:
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Coin
    Coin = randint(tails, head)
    if Coin == head:
        basic.show_leds("""
            # . . . #
                        # . . . #
                        # # # # #
                        # . . . #
                        # . . . #
        """)
        basic.pause(1000)
    elif Coin == tails:
        basic.pause(1000)
        basic.show_leds("""
            # # # # #
                        . . # . .
                        . . # . .
                        . . # . .
                        . . # . .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global Coin
    Coin = 0
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)
