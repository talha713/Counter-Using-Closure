function counter() { 

    let count = 0; 
    
    function increment() { 
        count++; 
    } 
    
    function decrement() { 
        count--; 
    } 
    
    function modify(val) { 
    
        if (val === "1") increment(); 
        else if (val === "0") decrement(); 
    
        return count; 
    } 
    
    return modify; 
    } 
    
    const closure = counter(); 
    
    function counterHandler(objButton) { 
    
    let count = closure(objButton.value); 
    
    document.getElementById("counter_div").innerHTML = "<h2>" + count + "</h2>"; 
    }
    