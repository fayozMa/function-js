let year = +prompt("Yilni kiriting:");
let month = +prompt("Oyni raqamda kiriting:");
let day = +prompt("Kunni kiriting:");
function totalDays(year, month, day) {
  let startDate = new Date(1970, 0, 1);
  let endDate = new Date(year, month - 1, day);
  let milisekundFarqi = endDate.getTime() - startDate.getTime();
  let kunfarqi = Math.floor(milisekundFarqi / (1000 * 60 * 60 * 24));
  alert(kunfarqi);
}
totalDays(year, month, day);
