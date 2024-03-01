import * as d3 from 'd3'
import { useRef } from 'react'

type DataProps = {
    xdata: number[],
    ydata: string[],
    PlotLabel:string,
    margin: string,
    plotWidth:number,
    plotHeight:number
    xlabel:string,
    ylabel:string,
    loaded:boolean
}

export const BarPlot = (props:DataProps) => {

    const svgRef = useRef(null) as any 

    function MakeBarPlot(funcprops:DataProps,ref:any){

        const xdata = funcprops.xdata
        const ydata = funcprops.ydata
        const w = funcprops.plotWidth
        const h = funcprops.plotHeight
        const margin = funcprops.margin

        var color = "red"
        var toAdd = "(loading)"
        if (funcprops.loaded){
            color = "blue"
            toAdd = "(ready)"
        }

        const localdata = []

        for (let i=0; i< xdata.length; i++) {
            localdata.push({
                'xval': Number(xdata[i]),
                'yval': ydata[i]
            })
        }
            
        const svg = d3.select(ref.current)
            .attr("width",w)
            .attr("height",h)
            .style("margin-top",margin)
            .style("overflow","visible")

        const xScale = d3.scaleLinear()
            .domain([0,100])
            .range([0,w])

        const yScale  = d3.scaleBand()
            .domain(ydata)
            .range([0,h])
            .padding(0.1)

        const xAxis = d3.axisBottom(xScale)
                .ticks(3)
        
        const yAxis = d3.axisLeft(yScale)

        svg.selectAll('g').remove()

        svg.append('g')
            .call(xAxis)
            .attr("transform",`translate(0,${h})`)
            .append("text")
            .attr("text-anchor", "end")
            .attr("x", w)
            .attr("y", h*0.6)
            .text(funcprops.xlabel+toAdd)
            
        svg.append("g")
            .call(yAxis)
            .append("text")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-90)")
            .attr("x", 0)
            .attr("y", -h*1.25)
            .text(funcprops.ylabel)

        svg.selectAll('text')
            .attr("stroke-width","0")
            .attr("fill","#272728")
            .style("font-size",'14px')
            .style("font-weight",'bold')
        
        svg.selectAll("line").remove()

        svg.selectAll("line")
            .style("stroke", "#272728")

        svg.selectAll("rect").remove()

        svg.selectAll("rect")
            .data(localdata)
            .enter().append("rect")
            .attr("x", xScale(0))
            .attr("y", (d) => yScale(d.yval) as unknown as any)
            .attr("height", yScale.bandwidth())
            .attr("width", d => xScale(d.xval))
            .attr("fill", color)
    }
    
    MakeBarPlot(props,svgRef)

    return (
    <div className="flex justify-center">
        <div className='text-[#272728] text-2xl'>
            <p>{props.PlotLabel}</p>    
        </div>
        <div className='justify-center'>
            <svg ref={svgRef}/>
        </div>
    </div>
    )
}
