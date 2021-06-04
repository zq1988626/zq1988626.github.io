
import * as d3 from "d3";
import drag from "./drag.js";
import "./index.css"
import {query,queryPackageJSON } from "./api.js";

const height = 600;
const width = 800;
const r = 5;
const forceCollide = 10;

const datas = window.datas =  {
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
loadData(datas);


function autoLoad(){
    var next = datas.nodes.find(item=>!item.expend);
    if(next){
        next.expend = true;
        queryChildrenNodes(next.id)
        .then(function(){
            setTimeout(autoLoad,0);
        })
    }
}

// autoLoad();

document.getElementById("btnAdd").addEventListener("click",function(){
    addPackage(document.getElementById("packagename").value)
})

function addPackage(id,version){
    var d = datas.nodes.find(item=>item.id==id)
    if(d && d.expend ){return}
    if(!d){
        datas.nodes.push({
            id:id,
            name:id,
            x:0,
            y:0,
            vx:0,
            vy:0
        });
    }
    autoLoad()
    //queryChildrenNodes(id);
}

function queryChildrenNodes(id){
    return queryPackageJSON(id).then(d=>{
        return (d.dependencies&&Object.keys(d.dependencies)||[])
        .concat(d.devDependencies&&Object.keys(d.devDependencies)||[])
        .map(name=>{
            return {
                id:name,
                name:name,
                x:0,
                y:0,
                vx:0,
                vy:0
            }
        })
    }).then(nds=>{
        nds.forEach(item=>{
            if(!datas.nodes.find(d=>d.id==item.id)){
                datas.nodes.push(item)
            }
            if(!datas.links.find(d=>d.source==id&&d.target===item.id)){
                datas.links.push({
                    source:id, 
                    target:item.id
                })
            }
        })
        loadData(datas)
    }).catch(function(ex){
        console.error(ex)
    })
}
function loadData(datas){

    let links = datas.links;
    let nodes = datas.nodes;

    node = node
    .data(nodes, d => d.id)
    .join(
        enter => enter.append("g")
            .classed("node",true)
            .classed("expend",d=>d.expend)
            .on("dblclick",function(event,d){
                d.expend = true;
                queryChildrenNodes(d.id)
            })
            //.attr("r",r)
            .call(drag(simulation))
            .call(node => node.append("title").text(d => d.id))
            /*
            .call(node => 
                node.append("text")
                .text(d => d.id)
                .attr("stroke", "#000")
            )*/
            .call(node => node.append("circle").attr("r",r)),
        update => update
            .classed("expend",d=>d.expend)
    );

    link = link
    .data(links, d => [d.source, d.target])
    .join("line");

    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).restart().tick();
    ticked(); // render now!
}