import * as d3 from 'd3'
import { useRef } from 'react'

type MapProps = {
    location:{
        latitude:number,
        longitude:number},

    plotWidth:number,
    plotHeight:number
}

export const WorldMap = (props:MapProps) => {
    
    const svgRef = useRef() as any

    function MakeMap(props:MapProps,ref:any){

        const lat = props.location.latitude
        const long = props.location.longitude
    
        const width = Math.floor(1.35*props.plotWidth)
        const height = Math.floor(5*props.plotHeight)

        const mapjson = require("./map.json")        
        const projection = d3.geoEquirectangular()
                        .fitSize([width, height], {type:"FeatureCollection", features: mapjson.features})

        const svg = d3.select(ref.current)
                        .attr("width", width)
                        .attr("height", height)

        svg.selectAll("path").remove()

        const path = d3.geoPath()
                        .projection(projection)

        svg.selectAll("path")
                .data(mapjson.features)
                .enter()
                .append("path")
                .attr("d", path as any)
                .attr("stroke", "#272728")
                .attr("fill", '#0C0C0F')
        
        const coordinates = projection([long, lat]) as number[]

        const coordinatesXmin = projection([-180, 0]) as number[]
        const coordinatesXmax = projection([180, 0]) as number[]

        const coordinatesYmin = projection([0, -90]) as number[]
        const coordinatesYmax = projection([0, 90]) as number[]

        svg.selectAll('circle').remove()
        
        svg.append('circle')
                .attr('cx', coordinates[0])
                .attr('cy', coordinates[1])
                .attr('r', 3)
                .attr("stroke", "#5E0009")
        
        svg.selectAll('line').remove()

        svg.append('line')
                .attr("x1", coordinates[0])  
                .attr("y1", coordinatesYmin[1])
                .attr("x2", coordinates[0])
                .attr("y2", coordinatesYmax[1])
                .style("stroke-width", 1)
                .attr("stroke", "#5E0009")
        
        svg.append('line')
                .attr("x1", coordinatesXmin[0])  
                .attr("y1", coordinates[1])
                .attr("x2", coordinatesXmax[0])
                .attr("y2", coordinates[1])
                .style("stroke-width", 1)
                .attr("stroke", "#5E0009")
    }

    
    MakeMap(props,svgRef)

    return(
        <div>
            <div className='flex justify-center'>
                <svg ref={svgRef}/>
            </div>
        </div>
    )
}