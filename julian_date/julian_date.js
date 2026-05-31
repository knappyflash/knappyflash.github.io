document.getElementById("julianDate").addEventListener("input", (e) => {
  let input = e.target.value;
  if (input.length < 5) return;
  let myDate = JulianDateToDate(input);
  document.getElementById("date").value = myDate;
});

document.getElementById("date").addEventListener("input", (e) => {
  let input = e.target.value;
  if (input.length < 8) return;
  julian = DateToJulianDate(input);
  document.getElementById("julianDate").value = julian;
});

function JulianDateToDate(jd) {
  if (!jd || jd.length < 5) return "";
  const yearShort = Number(jd.slice(0, 2));
  const julianDay = Number(jd.slice(-3));
  const year = 2000 + yearShort;
  const date = new Date(Date.UTC(year, 0, julianDay));
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function DateToJulianDate(myDate) {
  if (!myDate) return "";
  const parts = myDate.split("-");
  if (parts.length !== 3) return "";
  const year = Number(parts[0]);
  const month = Number(parts[1]);
  const day = Number(parts[2]);
  if (!year || !month || !day) return "";
  const dateUTC = Date.UTC(year, month - 1, day);
  const startUTC = Date.UTC(year, 0, 0);
  const julianDay = Math.floor((dateUTC - startUTC) / 86400000);
  const yearShort = String(year).slice(-2);
  return yearShort + String(julianDay).padStart(3, "0");
}

function SetDateBoxes() {
  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, "0");
  let day = String(today.getDate()).padStart(2, "0");
  let formattedDate = `${year}-${month}-${day}`;
  document.getElementById("date").value = formattedDate;
  let julian = DateToJulianDate(formattedDate);
  document.getElementById("julianDate").value = julian;
}

SetDateBoxes();