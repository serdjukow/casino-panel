document.addEventListener("DOMContentLoaded", () => {
  let value = 1234567890
  odometer.innerHTML = value
  setInterval(() => {
    value += 1
    odometer.innerHTML = value
  }, 20000000)
})
