function update_clock() {
  const currentTime = new Date()
  let hours = currentTime.getHours()
  let minutes = currentTime.getMinutes()
  let seconds = currentTime.getSeconds()

  hours = hours < 10? `0${hours}`:hours
  minutes = minutes < 10? `0${minutes}`:minutes
  seconds = seconds < 10? `0${seconds}`:seconds

  document.getElementById("clock").innerHTML = `${hours} : ${minutes} : ${seconds}`
  setTimeout(update_clock, 1000)
}

const titleText = () => {
  let s = "cactoes | lvl100 editor"
  let i = 1
  let f = []
  for (; i < s.length; ) f.push(s.substring(0, i++))
  for (; i > 1; ) f.push(s.substring(0, i--))
  return f
}

let titleIDX = 0
function title() {
  document.title = titleText()[titleIDX++ % titleText().length]
  setTimeout(title, 400)
}

title()
update_clock()