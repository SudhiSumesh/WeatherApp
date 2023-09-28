
 
 const apiurl='https://api.openweathermap.org/data/2.5/weather?&units=metric'
 const apikey='bfd955f8d0bbaf48b73b2d6d295916ce'
 const searchBox=document.querySelector('.search input')
 const searchButton=document.querySelector('.search button')
 const img=document.querySelector('.image_sec img')
 
      
  async function checkWeather(city){

  
   const response=await fetch(apiurl+`&appid=${apikey}`+`&q=${city}`)
   if(response.status==404){
      document.querySelector('.error').style.display='block'
   }
   else{
    document.querySelector('.error').style.display='none'
   const data= await response.json()
   document.querySelector('.temp h1').innerText=Math.round(data.main.temp)
   document.querySelector('.image_sec h2').innerText=data.name
   document.querySelector('.left h3').innerText=data.wind.speed +' km/h'
   document.querySelector('.right h3').innerText=data.main.humidity + " %"
   console.log(data);
    if(data.weather[0].main=="Clouds")
    {
        img.src ='images/cloudy.png'
    }
    else if(data.weather[0].main=="Clear"){
        img.src='images/clear.png'

    }
    else if(data.weather[0].main=="Rain"){
        img.src='images/rain.png'

    }
    else if(data.weather[0].main=="Drizzle"){
        img.src='images/drizzle.png'

    }
    else if(data.weather[0].main=="Mist"){
        img.src='./images/mist.png'

    }
   
      document.querySelector('.main').style.display="block"
      
  }
  }
  searchButton.addEventListener('click',()=>{
    checkWeather(searchBox.value)

     })
  
  