let a = 0
let b = 0
let left = 0
let up = 0
let right = 0
let down = 0
let score = 0
forever(function () {
    if (controller.A.isPressed()) {
        a = 0
        pauseUntil(() => !(controller.A.isPressed()))
    } else { a += 1 }
    if (controller.B.isPressed()) {
        b = 0
        pauseUntil(() => !(controller.B.isPressed()))
    } else { b += 1 }
    if (controller.left.isPressed()) {
        left = 0
        pauseUntil(() => !(controller.left.isPressed()))
    } else { left += 1 }
    if (controller.right.isPressed()) {
        right = 0
        pauseUntil(() => !(controller.right.isPressed()))
    } else { right += 1 }
    if (controller.up.isPressed()) {
        up = 0
        pauseUntil(() => !(controller.up.isPressed()))
    } else { up += 1 }
    if (controller.down.isPressed()) {
        down = 0
        pauseUntil(() => !(controller.down.isPressed()))
    } else { down += 1 }
    pause(1)
})

//% color="#AA278D" weight=100 icon="\f2f2"
namespace rhythmTools {

    //% block
    export function timeSinceLast(button: ControllerButton): number {
        if (button == 1) {
            return left
        } else if (button == 2) {
            return up
        } else if (button == 3) {
            return right
        } else if (button == 4) {
            return down
        } else if (button == 5) {
            return a
        } else if (button == 6) {
            return b
        }
        return -1
    }

    //% block
    export function press(button: ControllerButton): boolean {
        pause(10)
        if (timeSinceLast(button) <= 5) {
            return true
        } else { return false }
        return false
    }
}