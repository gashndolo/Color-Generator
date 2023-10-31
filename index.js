
document.getElementById("color-form").addEventListener("submit", function() {
    const color = document.getElementById("color-picker").value.substring(1)
    const type = document.getElementById("type").value
    
    console.log(`${color} of type ${type}`)
    const path = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${type}&count=5`
    console.log(path)
    fetch(path)
        .then(res => res.json())
        .then(data => console.log(data))
})