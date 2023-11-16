input.onButtonPressed(Button.A, function () {
    RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
})
RTC_DS1307.DateTime(
2024,
4,
23,
12,
24,
36
)
basic.forever(function () {
    basic.showNumber(RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND))
})
