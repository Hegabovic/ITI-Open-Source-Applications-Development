import { Emitter } from "./constructorFunction.mjs"

let emit = new Emitter();
emit.on("login",function(){
    console.log("hello you are logged in");
})

emit.emit("login")