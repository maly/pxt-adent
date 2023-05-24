basic.forever(function () {
	led.toggle(0,0)
})

namespace adent {
export function doLed() {
    basic.forever(function () {
        led.toggle(2, 2)
    })
}
}