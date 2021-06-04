
import {require} from "./lib/pkg/d3-require.js";

require("d3-array").then(d3 => {
    console.log(d3.range(100));
});