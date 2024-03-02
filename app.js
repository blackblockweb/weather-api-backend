
const request =  require('request');
//  const url = "https://api.weatherapi.com/v1/current.json?key=604b1f29254945ceb78170051242602&q=egypt"

//  request({url , json :  true}, (error, response) => {
//     if (error) {
//         console.log("ERROR HAS OCCURED")
//     }else if (response.body.error){
//         console.log(response.body.error.message)
//     }else{
//         console.log(response.body.location.name)
//         console.log(response.body.current.condition.text)
//     }
//  })

 const forecast = require ("./data1/forecast")

const geocode = require("./data1/geocode")


 const country = process.argv[2]


geocode( country , (error , data) => {
    console.log("ERROR : " , error)
    console.log("DATA : "  , data)

    forecast( data.latitude , data.longtitude , (error , data) => {
        console.log("ERROR : " , error)
        console.log("DATA : " , data)
     } )
 })