const btn = document.querySelector("button")
const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const themeContainer = document.querySelector(".theme-container")

btn.addEventListener("click", () => {
    sun.classList.toggle("hidden")
    moon.classList.toggle("hidden")
    body.classList.toggle("toggleBackground")
    h1.classList.toggle("fontColor")
    // console.log(parseInt(getComputedStyle(themeContainer).getPropertyValue("--rotation")))
    const currentRotation = parseInt(getComputedStyle(themeContainer).getPropertyValue("--rotation"))
    themeContainer.style.setProperty('--rotation', currentRotation + 180)
})
