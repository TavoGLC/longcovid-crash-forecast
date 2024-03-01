function MakeDailyData(J:number,lat:number,long:number){

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

    function GetFluxByDay(J:number,lat:number){
    
        const coefs = SolarFluxCoefs(J,lat)
        
        function LocalFlux(T:number){
            return SolarFlux(T,coefs)
        }
        const step = 24/500
        const data  = []

        for (let i=0; i< 500; i++) {
            const value = i*step
            const disc = LocalFlux(value)
            let flux = 0
            if(disc<0){
                flux=0
            }
            else if (disc>20000){
                flux = 0
            }
            else{
                flux=disc                
            }
            data.push({
                'time': Number(value),
                'flux': Number(flux)
            })}
        return data
    }

    const localdata = GetFluxByDay(J,lat)

    const xdata = Object.values(localdata).map((localdata:any) => localdata.time)
    const ydata = Object.values(localdata).map((localdata:any) => localdata.flux)

    const outdata = {
        'xdata':xdata,
        'ydata':ydata
    }

    return outdata
}

export { MakeDailyData }