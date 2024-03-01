function MakeYearlyData(lat:number){

    function daylength(J:number){

        //CERES model  Ecological Modelling 80 (1995) 87-95
        const phi = 0.4093*Math.sin(0.0172*(J-82.2))
        const coef = (-Math.sin(Math.PI*lat/180)*Math.sin(phi)-0.1047)/(Math.cos(Math.PI*lat/180)*Math.cos(phi))
        const arg0 = Math.max(-0.87,coef)
        const ha =7.639*Math.acos(arg0)
        return Number(ha)

    }

    const data: any = []
            for (let i=1; i< 365; i++) {
                data.push({
                    'dayofyear': i,
                })}

    const dayofyear_m = Object.values(data).map((data:any) => data.dayofyear)
    const dl_m = Object.values(data).map((data:any) => daylength(data.dayofyear))

    const outdata = {
        'xdata':dayofyear_m,
        'ydata':dl_m

    }
    
    return outdata
}

export { MakeYearlyData }