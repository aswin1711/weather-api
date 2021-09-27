var request1 = new XMLHttpRequest();
request1.open('GET','https://restcountries.eu/rest/v2/all',true)
request1.send();
request1.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(var i=0;i<=data.length;i++){
        try{
            var name = data[i].name;
        var lang=data[i].latlng;
        if(lang.length===0) throw new error("longitude not found")
        console.log(name+" "+lang)
        weatherdata(name,...lang)

        }
        catch(e){
            console.log("invalid coordinates for a country")
        }
    }
}
function weatherdata(name,lat,lang){
    var request2 = new XMLHttpRequest();
    var url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lang+'&appid=cd0fe0705b6f4e172b5c10221b12665d';
    request2.open('GET',url,true);
    request2.send();
    request2.onload=function(){
        var res=JSON.parse(this.response);
        console.log(`${name} : ${res.main.temp}`)
    }
}