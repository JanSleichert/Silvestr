const silvestr = dayjs("31.12.2023")
const today = dayjs()

if (today.isAfter(silvestr)) {
    document.body.innerHTML += `
    Silvestr 2023 už byl
    `
}

else {

    document.body.innerHTML += `
    Silvestr 2023 teprve bude
`
}
