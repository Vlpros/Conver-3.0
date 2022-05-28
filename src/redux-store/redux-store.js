import { rerenderEntireTree } from "../rerender"

let state = {
 



    portfelPage: {
        dataDiagram: [],
        btc:2,
        eth:5,
        usd:1

    }



}
export let addPost = (valute, newBTC) => {
    
    let newPost = {
        x: valute,
        y: newBTC
    }
    debugger
    state.portfelPage.dataDiagram.push(newPost)
    rerenderEntireTree();
}
export let cleanPost=()=>{
    while(state.portfelPage.dataDiagram.length>0){
        state.portfelPage.dataDiagram.pop();
    }
    rerenderEntireTree();
}

 

export default state;