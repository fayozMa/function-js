let year = +prompt("Yilni kiriting:");
let month = +prompt("Oyni raqamda kiriting:");
let day = +prompt("Kunni kiriting:");
function calculateDays(year, month, day) {
  let startDate = new Date(1970, 0, 1);
  let endDate = new Date(year, month - 1, day);
  let timeDifference = endDate.getTime() - startDate.getTime();
  let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  alert(daysDifference);
}
calculateDays(year, month, day);
