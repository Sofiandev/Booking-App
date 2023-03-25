//convert today date to input format
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

//tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

//convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    let tomorrowFormat = day.toISOString().split("T")[0];
    end_date.value = tomorrowFormat;
  }
});
