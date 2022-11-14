const allButtonToggle = document.querySelectorAll("#light")

allButtonToggle.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault()
    if (button.classList.contains("light-on")) {
      button.innerHTML = "OFF"
      button.setAttribute("class", "light-off")
    } else {
      button.innerHTML = "ON"
      button.setAttribute("class", "light-on")
    }
  })
})
