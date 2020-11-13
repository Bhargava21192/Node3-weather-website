const request=require('request')
const geocode=(address,callback)=>{
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYmhhcmdhdmEwMiIsImEiOiJja2c5eDNsd2kwMWw0MnNvanU1Nnc3eWQwIn0.fcuQlUQ44sxZBh4cVBYqvw&limit=1&units=si'
    
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect the server!!',undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find the location',undefined)
        }
        else if(body.message){
            callback('Insufficient data',undefined)
        }
        else{
            callback(undefined,{
                Longitude: body.features[0].center[0],
                Latitude: body.features[0].center[1],
                Location: body.features[0].place_name})
        }
    
    })}
    
    // geocode('10which',(error,data)=>{
    //     console.log('Error',error)
    //     console.log('Data',data)
    // })
    
    module.exports=geocode