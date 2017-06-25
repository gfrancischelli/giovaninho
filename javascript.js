

function Macaco(){
    
    document.getElementById("formID").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(e.target);
        
    var Birl = document.getElementById("TesteID") ;
    
    var xhr = new XMLHttpRequest();
    
    var http = "https://images-api.nasa.gov/search?q=" ;
    
    xhr.open("GET", http + Birl.value.toLowerCase() , true );
    
    xhr.send(Birl.value);   
               
});    
               
   
       
    
    
}



     