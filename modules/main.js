import { zapros1 }  from "./script.js"
import { zapros2 } from "./script2.js"
import { zapros3 } from "./script3.js"

function initizalion(){
    zapros1();
    zapros2();
    zapros3();
}

document.getElementById("button1").onclick = initizalion;
