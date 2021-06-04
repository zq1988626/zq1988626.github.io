
import * as d3 from "d3";
import drag from "./drag.js";
import "./index.css"
import {query,queryPackageJSON } from "./api.js";

const height = 600;
const width = 800;
const r = 20;
const forceCollide = 40;

const datas = {
    nodes:[
        { 
            id: "@babel/core", name: "@babel/core", index: 0, x: 121.89304634296161, 
            y: -327.0877439911904, vy: -0.0670786919612953, 
            vx: 0.02518413101664201
        }
    ],
    links:[]
}

const simulation = d3.forceSimulation()
    .force("charge", d3.forceManyBody())
    .force("link", d3.forceLink().id(d => d.id))
    .force('collide', d3.forceCollide(d=>forceCollide))//力大小
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .on("tick", ticked);
  
const svg  = d3.select(document.body)
.append("svg");

svg.attr("viewBox", [-width / 2, -height / 2, width, height]);

let link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
.selectAll("line");

let node = svg.append("g")
    .attr("stroke", "#fff0")
    .attr("stroke-width", 1.5)
    .attr("fill","#0003")
    .selectAll("g");

function ticked() {
    node.attr("transform",d=>"translate("+d.x+","+d.y+")")
    //node.attr("cx", d => d.x)
    //.attr("cy", d => d.y);

    link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
}

let links = datas.links;
let nodes = datas.nodes;

function queryChildrenNodes(id){
    return queryPackageJSON(id).then(d=>{
        return Object.keys(d.dependencies).map(name=>{
            return {
                id:name,
                name:name,
                x:0,
                y:0,
                vx:0,
                vy:0
            }
        })
    })
}

updateData(nodes,links);
function updateData(nodes){
    node = node
    .data(nodes, d => d.id)
    .join(enter=>{
        enter.append("g")
        .classed("node",true)
        .on("dblclick",function(event,d){
            queryChildrenNodes(d.id).then(nds=>{
                updateData(nds,links)
            })
        })
        //.attr("r",r)
        .call(drag(simulation))
        .call(node => node.append("title").text(d => d.id+":双击展开"))
        .call(node => 
            node.append("text")
            .text(d => d.id)
            .attr("stroke", "#000")
        )
        .call(node => node.append("circle").attr("r",r))
    });

    link = link
    .data(links, d => [d.source, d.target])
    .join("line");
    
    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).restart().tick();
    ticked(); // render now!
}

