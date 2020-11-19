const secondNeedle = document.querySelector(".second-hand");
const minutNeedle = document.querySelector(".min-hand");
const hourNeedle = document.querySelector(".hour-hand");

const setDate = () => {
  const now = new Date;
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegree = seconds / 60 * 360;
  const minutesDegree = minutes / 60 * 360;
  const hoursDegree = hours / 12 *360;

  secondNeedle.style.transform = `rotate(${secondsDegree + 90}deg)`;
  minutNeedle.style.transform = `rotate(${minutesDegree + 90}deg)`;
  hourNeedle.style.transform = `rotate(${hoursDegree + 90}deg)`
  // console.log(seconds);
}
setInterval(setDate, 1000)
