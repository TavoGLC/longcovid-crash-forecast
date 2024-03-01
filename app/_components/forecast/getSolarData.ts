
type SolarType = {
    xray:{
        xdata:string[],
        ydata:number[]
    },
    mag:{
        xdata:string[],
        bz:number[],
        bt:number[]
    },
    plasma:{
        xdata:string[],
        density:number[],
        temperature:number[],
        speed:number[]
    }
}

function Median(numbers:number[]){
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }
    return sorted[middle]
}

function Mean(array:number[]){
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return mean
}

function StandarDeviation(array:number[]){
    const n = array.length
    const mean = Mean(array)
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

function ProcessData(data:number[]){
    const median = Median(data)
    const mean = Mean(data)
    const std = StandarDeviation(data)
    const centered = Array.from(data).map((a) => (a - median))
    const scores = Array.from(centered).map((a) => (a - mean)/std)
    return scores
}

function FractionalStart(start:number,size:number){
    const responce = Math.floor(start*size)
    return responce
}

function FormatScore(score:number){
    var outscore = 0
    if (isFinite(score)){
        if (score<0){
            outscore = 0
        }
        else{
            outscore = score
        }
    }
    else {
        outscore = 0
    }
    return outscore
}

function GetScoreBySlice(Solar:SolarType,start:number){
    
    const xraySlice = Solar.xray.ydata.slice(FractionalStart(Solar.xray.ydata.length,start),Solar.xray.ydata.length)
    const meanStdXray = Math.abs(Mean(ProcessData(xraySlice)))
    
    const magBtSlice = Solar.mag.bt.slice(FractionalStart(Solar.mag.bt.length,start),Solar.mag.bt.length)
    const meanStdMagBt = Math.abs(Mean(ProcessData(magBtSlice)))

    const magBzSlice = Solar.mag.bz.slice(FractionalStart(Solar.mag.bz.length,start),Solar.mag.bz.length)
    const meanStdMagBz = Math.abs(Mean(ProcessData(magBzSlice)))

    const plasmaTempSlice = Solar.plasma.temperature.slice(FractionalStart(Solar.plasma.temperature.length,start),Solar.plasma.temperature.length)
    const meanStdSWtemp = Math.abs(Mean(ProcessData(plasmaTempSlice)))
    
    const plasmaDensSlice = Solar.plasma.density.slice(FractionalStart(Solar.plasma.density.length,start),Solar.plasma.density.length)
    const meanStdSWden = Math.abs(Mean(ProcessData(plasmaDensSlice)))

    const plasmaSpeedSlice = Solar.plasma.speed.slice(FractionalStart(Solar.plasma.speed.length,start),Solar.plasma.speed.length)
    const meanStdSWspeed = Math.abs(Mean(ProcessData(plasmaSpeedSlice)))

    const meanScoreValue = Mean([meanStdXray,meanStdMagBt,meanStdMagBz,meanStdSWtemp,meanStdSWden,meanStdSWspeed]) - 2

    return meanScoreValue

}

function GetScores(Solar:SolarType){

    const scoreDaily = FormatScore(GetScoreBySlice(Solar,0))
    const score12Hrs = FormatScore(GetScoreBySlice(Solar,0.5))
    const score6Hrs = FormatScore(GetScoreBySlice(Solar,0.75))

    const scores = {
        'daily':scoreDaily,
        'hours6':score6Hrs,
        'hours12':score12Hrs
    }

    return scores
}

async function GetSolarData(){
    const response_xray = await fetch("https://services.swpc.noaa.gov/json/goes/secondary/xrays-1-day.json")
    const body_xray = await response_xray.json();

    var xray_xdata = [];
    var xray_ydata = [];

    for(var i = 1; i < body_xray.length; ++i){
        if(isNaN(body_xray[i].flux)===false){
            xray_xdata.push(body_xray[i].time_tag)
            xray_ydata.push(Number(body_xray[i].flux))
    }
    }

    const finalxray = {
        "xdata":xray_xdata,
        "ydata":xray_ydata
    }

    const response_mag = await fetch("https://services.swpc.noaa.gov/products/solar-wind/mag-1-day.json")
    const body_mag = await response_mag.json();

    var mag_time = [];
    var mag_bz = [];
    var mag_bt = [];
    for (var i = 1; i < body_mag.length; ++i) {

        if(isNaN(body_mag[i][3])===false && isNaN(body_mag[i][6])===false){
            mag_time.push(body_mag[i][0])
            mag_bz.push(Number(body_mag[i][3]))
            mag_bt.push(Number(body_mag[i][6]))
    }
    } 

    const finalmag = {
        "xdata":mag_time,
        "bz": mag_bz,
        "bt":mag_bt
    }

    const response_plasma = await fetch("https://services.swpc.noaa.gov/products/solar-wind/plasma-1-day.json")
    const body_plasma = await response_plasma.json();

    var plasma_time = [];
    var plasma_density = [];
    var plasma_temp = [];
    var plasma_speed = [];

    for (var i = 1; i < body_plasma.length; ++i) {
        if(isNaN(body_plasma[i][1])===false && isNaN(body_plasma[i][2])===false && isNaN(body_plasma[i][3])===false){
            plasma_time.push(body_plasma[i][0])
            plasma_density.push(Number(body_plasma[i][1]))
            plasma_temp.push(Number(body_plasma[i][3]))
            plasma_speed.push(Number(body_plasma[i][2]))
        }
    }

    

    const finalplasma = {
        "xdata":plasma_time,
        "density": plasma_density,
        "temperature":plasma_temp,
        "speed":plasma_speed
    }

    const finalsolar = {
        "xray":finalxray,
        'mag':finalmag,
        "plasma":finalplasma
    }

    const scores = GetScores(finalsolar)

    const outsolar = {
        "xray":finalxray,
        'mag':finalmag,
        "plasma":finalplasma,
        "scores":scores,
        "loaded":true
    }
    return outsolar
}

export {GetSolarData}
