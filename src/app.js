const doc={
    tbody: document.querySelector("#tbody")
}

    const state ={
    bikes: [],
    host: "http://localhost:8000/"
}
window.addEventListener("load", ()=>{
    init()

})

function init(){
    getBikes()
}

function getBikes(){
    let endpoint = "bikes"
    let url = state.host+endpoint
    fetch(url)
    .then(response => response.json())
    .then(result=> {
        console.log(result)
        state.bikes = result
        render()
    })
}

function render(){
    var rows = ""
    state.bikes.forEach( bike => {
        var row=`
        <tr>
            <td>${bike.id}</td>
            <td>${bike.name}</td>
            <td>${bike.wheel}</td>
            <td>${bike.usage}</td>
            <td>${bike.price}</td>
        </tr>
        `
        console.log(bike.name)
        rows += row
        
    })
    doc.tbody.innerHTML=rows
}