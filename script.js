function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function updateDateTime() {
  const options = { timeZone: 'Asia/Kolkata', hour12: false };
  const now = new Date().toLocaleString('en-GB', options);
  const [date, time] = now.split(', ');
  const [day, month, year] = date.split('/');
  const [hour, minute, second] = time.split(':');
  const formattedDateTime = `${hour}:${minute}:${second}`;
  document.getElementById('datetime').innerHTML = formattedDateTime;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display the time immediately
