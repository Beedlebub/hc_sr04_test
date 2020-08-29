let ping = 0
basic.forever(function () {
    ping = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.Inches
    )
    basic.showNumber(ping)
    serial.writeLine("" + (ping))
    basic.pause(1000)
})
