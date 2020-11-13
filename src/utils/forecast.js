const request = require("request")

const forecast=(Longitude,Latitude,callback)=>{
const url='https://api.darksky.net/forecast/3469f074c0bb732abafbde98fdf2f1e0/'+Latitude+','+Longitude
request({url,json:true},(error,{body})=>{
        if(error)
    {
        callback('Unable to connect to the weather service!',undefined)
    }
    else if(body.error)
    {
        callback('Unable to retrive data due to data insufficiency',undefined)
    }
    else
    {
        callback(undefined,body.daily.data[0].summary+" The temperature is "+body.currently.temperature+' degrees out'+
        " The chance of rainfall is "+ body.currently.precipProbability+' %')}
})
}
// forecast(75.40,-43.20,(error,data)=>{
//     console.log("Error ",error)
//     console.log("Data ",data)

// })

module.exports=forecast