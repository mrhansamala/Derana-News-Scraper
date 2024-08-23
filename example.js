import derana from "./index.js";

async function data() {
    const api = await derana()
    console.log(api) 
}

data()