var req= new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all');
req.send();
req.onload=function(){
var datas=JSON.parse(req.response);
for(let i=0; i<datas.length; i++){
    console.log(datas[i].name.common); 
    console.log(datas[i].region);
    console.log(datas[i].subregion);
    console.log(datas[i].population);
}
}