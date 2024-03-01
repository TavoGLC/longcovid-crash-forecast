
type ScoresType = {
    daily:number,
    hours6:number,
    hours12:number
}

type TimeType = {
    J:number,
    lat:number,
    T:number,
    normDay:number,
    normTime:number
}

function daylength(J:number,lat:number){
    //CERES model  Ecological Modelling 80 (1995) 87-95
    const phi = 0.4093*Math.sin(0.0172*(J-82.2))
    const coef = (-Math.sin(Math.PI*lat/180)*Math.sin(phi)-0.1047)/(Math.cos(Math.PI*lat/180)*Math.cos(phi))
    const arg0 = Math.max(-0.87,coef)
    const ha =7.639*Math.acos(arg0)
    return ha
}

function daylength_gradient(J:number,lat:number){
    return daylength(J,lat)-daylength(J+1,lat)
}

function SolarFluxCoefs(J:number,lat:number){
    
    const I0 = 1367
    const fact = Math.PI/180

    const delta = 23.45*Math.sin(0.986*(J+284))
    const a = Math.sin(lat*fact)*Math.sin(delta*fact)
    const b0 = Math.cos(lat*fact)*Math.cos(delta*fact)
    const Ct = 1+0.034*Math.cos((J-2)*fact)
    const Gamma = 0.796-0.01*Math.sin((0.986*(J+284))*fact)

    return [a,b0,Ct*I0*Gamma,120*Gamma]
}

function SolarFlux(T:number,coefs:number[]){
    ///New model to estimate and evaluate the solar radiation
    ///Y.El Mghouchi A.El BouardiZ.ChoulliT.Ajzoul
    ///ETEE, Faculty of Sciences, Abdelmalek Essaadi University, Tetouan, Morocco
    
    const fact = Math.PI/180
    const w = 15*(12-T)
    
    const a = coefs[0]
    const b0 = coefs[1]
    const A0 = coefs[2]
    const A1 = coefs[3]
    
    const b = b0*Math.cos(w*fact)
    const h = Math.asin((a+b))
    const sinh = Math.sin(h)
    const ex = Math.exp(-(0.13/sinh))
    const I = A0*sinh*ex
    const coeff = 0.4511+sinh
    const Dh = A1*Math.exp(coeff)
    
    return I+Dh
}

function GetFluxByTime(J:number,lat:number,T:number){
    const coefs = SolarFluxCoefs(J,lat)
    const currentFlux = SolarFlux(T,coefs)
    var outflux
    if (currentFlux<0){
        outflux = 0
    }
    else{
        outflux = currentFlux
    }
    return outflux
}

function SolarFlux_gradient(J:number,lat:number,T:number){

    const pointa = GetFluxByTime(J,lat,T)
    const pointb = GetFluxByTime(J,lat,T+1)
    var grad
    if(pointa===0 && pointb===0){
        grad = 1000
    }
    else{
        grad = GetFluxByTime(J,lat,T)-GetFluxByTime(J,lat,T+1)
    }
    return grad
}

function meanAbsGradient(J:number,lat:number,T:number,normDay:number,normTime:number){
    const scaledDay = Math.abs(SolarFlux_gradient(J,lat,T))/normTime
    const scaledTime = Math.abs(daylength_gradient(J,lat))/normDay
    return (scaledDay + scaledTime)/2
}

function GetScores(Scores:ScoresType,localTime:TimeType){

    const weight0 = 10*meanAbsGradient(localTime.J,localTime.lat,localTime.T,localTime.normDay,localTime.normTime) 
    const weightInv = (1/weight0)

    const scores = {
        'xdata':[Math.min(weightInv*Scores.daily,100),Math.min(weightInv*Scores.hours6,100),Math.min(weightInv*Scores.hours12,100)],
        'ydata':['daily','6-Hours','12-hours']
    }

    return scores
}

export { GetScores }