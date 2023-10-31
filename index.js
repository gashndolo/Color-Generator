
document.getElementById("color-form").addEventListener("submit", function(e) {
    e.preventDefault()
    const parent = document.getElementById("colors")
    parent.innerHTML = ""
    const color = document.getElementById("color-picker").value.substring(1)
    const type = document.getElementById("type").value
    
    const path = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${type}&count=5`
    fetch(path)
        .then(res => res.json())
        .then(data => {
            console.log(data.colors.length)
            
            for (let color of data.colors) {
                console.log(color.hex.value)
                
                const newDiv = document.createElement("div")
                const top = document.createElement("div")
                const bottom = document.createElement("p")
                
                top.style.backgroundColor = color.hex.value
                top.classList.add("color-div")
                bottom.innerHTML = color.hex.value
                         
                newDiv.appendChild(top)
                newDiv.appendChild(bottom)
                newDiv.classList.add("color-div")
                
                colors.appendChild(newDiv)
            }
        })
})