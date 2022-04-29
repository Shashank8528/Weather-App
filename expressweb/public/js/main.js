const CityName = document.getElementById('CityName');
const submitButton = document.getElementById('submitButton');

const city_name= document.getElementById('city_name');

const tem_real_val = document.getElementById('tem_real_val');
const temp = document.getElementById('temp');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();

    let cityVal = CityName.value;
    
    if (cityVal === "") {
        city_name.innerText = `plz enter the city name`;
        datahide.classList.add('data_hide');

    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c9ef3ddd48a10e2736be2e32c5394cdd`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

            tem_real_val.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            //condition to check sunny or cloudy
            if (tempMood == "clear") {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "clouds") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else
                (tempMood == "clouds"); {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');




        } catch {
            city_name.innerText = `plz enter the city name properly`;
            datahide.classList.add('data_hide');


        }

    }
} 

submitButton.addEventListener('click', getInfo);