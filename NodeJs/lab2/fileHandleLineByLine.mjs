/*
* ================================================================
* =========================== File Handle ========================
* ================================================================
* */

import  readLine  from "readline";
import  fs from "fs";
let fileHandle = readLine.createInterface({
    input: fs.createReadStream(new URL("greet.text",import.meta.url)),
    output: process.stdout
})

fileHandle.on("line",()=>{
    console.log("**************************************************");
})