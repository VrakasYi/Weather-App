const searchForm = document.getElementById('searchForm');
const temp = document.getElementById('temp');
const windKph = document.getElementById('windKph');
const windDir = document.getElementById('windDir')

async function getLocation(location) {    
  try {
    const response = await fetch
    (`https://api.weatherapi.com/v1/current.json?key=6ccb19deecb04d47a6793511240402&q=${location}`, {mode: 'cors'});
    const result = await response.json();
    console.log(result);
    console.log(result.current.temp_c);

    temp.textContent = `Temperature: ${result.current.temp_c} C`;
    windKph.textContent = `Wind speed: ${result.current.wind_kph}k/h`;
    windDir.textContent = `Wind direction: ${result.current.wind_dir}`
  } catch(error) {
    console.error('Error:', error);
  };
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let searchInput = document.getElementById('searchInput').value.trim();
  getLocation(searchInput);
});