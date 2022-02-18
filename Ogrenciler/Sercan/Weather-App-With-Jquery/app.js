const response = new Service();

$('#search').on('keyup', function(event){
    if(event.keyCode == '13'){
       let city = $('#search').val().trim();
        
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=801cdb12a046cfd97370266ee636abba&units=metric&lang=tr` 
       response.get(url).then(response=> console.log(response)) 
    }
   
})
