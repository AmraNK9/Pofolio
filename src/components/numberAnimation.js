function animateNumber(elementId, number, speed) {
    let element = document.getElementById(elementId);
    element.innerHTML = '';
  
    function typeNumber(i) {
        if (i <= number) {
            element.innerHTML = i + "+";
            i++;
                for(let z=0;z<=speed;z++){
                    console.log(z)  
                    if(z == speed){
                        
                        requestAnimationFrame(() => typeNumber(i));

                    }
                }
          
        }
    }

    typeNumber(0);
}

export { animateNumber };