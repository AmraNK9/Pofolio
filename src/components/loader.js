let timeout = 500;
let loaded = false
document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(() => {
        document.querySelector("#loader").style.display = "none"
        loaded = true
    }, timeout);
})

export {timeout};
