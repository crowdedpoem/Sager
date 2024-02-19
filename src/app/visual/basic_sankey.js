import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';
import { useRouter } from 'next/navigation';


const SankeyDiagram = ({ data }) => {
    const svgRef = useRef();
    const router = useRouter();

    useEffect(() => {
        if (!data) return;

        const { nodes, links } = data;

        const width = 600;
        const height = 400;

        // Define a color scale
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const sankeyGenerator = sankey()
            .nodeWidth(15)
            .nodePadding(10)
            .extent([[1, 1], [width - 1, height - 5]]);

        const { nodes: sankeyNodes, links: sankeyLinks } = sankeyGenerator({
            nodes: nodes.map(d => Object.assign({}, d)),
            links: links.map(d => Object.assign({}, d)),
        });

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear SVG content before drawing

        // Draw the links (the flows between nodes)
        // Draw the links (the flows between nodes)
        const gradient = svg.append("defs").append("linearGradient")
            .attr("id", "linkGradient")
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 1)
            .attr("y2", 0);

        gradient.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", "blue"); // Start color of the gradient

        gradient.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", "red"); // End color of the gradient

        // Draw the nodes
        const node = svg.append("g")
            .selectAll("rect")
            .data(sankeyNodes)
            .join("rect")
            .attr("x", d => d.x0)
            .attr("y", d => d.y0)
            .attr("height", d => d.y1 - d.y0)
            .attr("width", sankeyGenerator.nodeWidth())
            .attr("fill", d => color(d.index)) // Use the color scale based on node index
            .attr("stroke", "black");

        // Draw the links (the flows between nodes)
        svg.append("g")
            .attr("fill", "none")
            .attr("stroke-opacity", 0.5)
            .selectAll("path")
            .data(sankeyLinks)
            .join("path")
            .attr("d", sankeyLinkHorizontal())
            .attr("strokeWidth", d => Math.max(1, d.width))
            .attr("stroke", (d, i) => {
                // Get the colors of the source and target nodes
                const sourceColor = color(d.source.index);
                const targetColor = color(d.target.index);

                // Create a unique gradient ID for each link
                const gradientId = `gradient-${i}`;
                const gradient = svg.append("defs")
                    .append("linearGradient")
                    .attr("id", gradientId)
                    .attr("gradientUnits", "userSpaceOnUse")
                    .attr("x1", d.source.x1)
                    .attr("y1", d.y0)
                    .attr("x2", d.target.x0)
                    .attr("y2", d.y1);

                // Add gradient stops using the colors of the source and target nodes
                gradient.append("stop")
                    .attr("offset", "0%")
                    .attr("stop-color", sourceColor);

                gradient.append("stop")
                    .attr("offset", "100%")
                    .attr("stop-color", targetColor);

                return `url(#${gradientId})`; // Use the gradient for stroke color
            })
            .on("mouseover", function (event, d) {
                // Darken the gradient on hover
                d3.select(this)
                    .attr("stroke-opacity", 1);
            })
            .on("mouseout", function (event, d) {
                // Revert to original gradient opacity on mouse out
                d3.select(this)
                    .attr("stroke-opacity", 0.5);
            })
            .on("click", function (event, d) {
                // Example click event
                console.log("Clicked link: ", d);
                // You can perform other actions here, like opening a modal or navigating

                router.push(`http://localhost:3000/explore-path?career1=${d.names[0]}&career2=${d.names[1]}` // Add other properties as needed
                );
            })
            .append("title") // Tooltip to show information on hover
            .text(d => `${d.source.name} → ${d.target.name}\nValue: ${d.value}`);



        // Add hover text for nodes
        node.append("title")
            .text(d => `${d.name}\n${d.value}`);

        // Add labels for the nodes
        svg.append("g")
            .attr("font-family", "sans-serif")
            .attr("font-size", 10)
            .selectAll("text")
            .data(sankeyNodes)
            .join("text")
            .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
            .attr("y", d => (d.y1 + d.y0) / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
            .text(d => d.name);

    }, [data]); // Redraw diagram if data changes

    return (
        <svg ref={svgRef} width="600" height="400" style={{ border: "1px solid black" }} />
    );
};

export default SankeyDiagram;
