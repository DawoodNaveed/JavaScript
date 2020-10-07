var count=1;
var down = document.getElementById("btn1"); 
            
    
    var br = document.createElement("br");  


function new1()
{               
    // Create a form synamically 
    
    var div = document.createElement("div"); 
    div.setAttribute("id","d1");
    div.setAttribute("height", "250px"); 
    div.setAttribute("width", "250px"); 
    var h1 = document.createElement('span');
        h1.textContent = "Product Details";
        h1.setAttribute("id","h");
     var h2 = document.createElement('span');
     h2.textContent="ProductName:";
     h2.setAttribute("id","h1");
     var h3 = document.createElement('span');
     h3.textContent="CostPerUnit:";
     h3.setAttribute("id","h2");
     var h4 = document.createElement('span');
     h4.textContent="NumberOfProducts:";
     h4.setAttribute("id","h3");
     
    

    var FN = document.createElement("input"); 
    var FN1 = document.createElement("input"); 
    var FN2 = document.createElement("input"); 
    FN.setAttribute("type", "text"); 
     FN.setAttribute("id", "pn"+count); 
    FN.setAttribute("name", "ProductName"); 
    FN.setAttribute("placeholder", "Product Name"); 
    FN1.setAttribute("type", "text"); 
     FN1.setAttribute("id", "pni"+count); 
    FN1.setAttribute("name", "CostPerUnit"); 
    FN1.setAttribute("placeholder", "Cost Per Unit"); 
    FN2.setAttribute("type", "text"); 
     FN2.setAttribute("id", "pnii"+count); 
    FN2.setAttribute("name", "NumberOfProducts"); 
    FN2.setAttribute("placeholder", "Number Of Products"); 
    
    var s = document.createElement("input"); 
                s.setAttribute("type", "submit"); 
                s.setAttribute("value", "Calculate");
                s.setAttribute("id",count);
                s.onclick = function() { // Note this is a function
                    
                    var ab=this.id;
                    
                    var name=document.getElementById('pn'+ab).value;
                    var cp=document.getElementById('pni'+ab).value;
                    var ncp=Number(cp);
                    var np=document.getElementById('pnii'+ab).value;
                    var npp=Number(np);
                
                    if(Number.isInteger(ncp) &&Number.isInteger(npp))
                    {
                        
                        cp=parseInt(cp);
                        npp=parseInt(npp);
                        var total=ncp*npp;
                        document.getElementById('pa').innerHTML='The total cost of ' +name + ' is:'+total;
                        alert(total);
                    }
                    else if(!(Number.isInteger(ncp)) && !(Number.isInteger(npp)))
                    {
                        alert('Kindly enter input in Integer Number');
                        document.getElementById('pni'+ab).value="";
                        document.getElementById('pnii'+ab).value="";
                    }
                    else if(!(Number.isInteger(ncp)))
                    {
                        alert('Kindly enter cost per unit in Integer Number');
                        document.getElementById('pni'+ab).value="";
                    }
                    else
                    {
                         alert('Kindly enter NumberOfProducts in Integer Number');
                        document.getElementById('pnii'+ab).value="";
                    }
                    
                    
                    
                        
                                             };
                div.appendChild(h1);
                div.appendChild(br.cloneNode());   
                div.appendChild(h2);
            div.appendChild(FN);  

            div.appendChild(br.cloneNode());  
            div.appendChild(h3);
            div.appendChild(br.cloneNode());  
            div.appendChild(FN1);  
            div.appendChild(br.cloneNode());
            div.appendChild(h4);  
            div.appendChild(br.cloneNode());  
            div.appendChild(FN2);  
            div.appendChild(br.cloneNode());  
             div.appendChild(s);  
              
              
             document.getElementsByTagName("body")[0] 
               .appendChild(div);
               count++;
}
function d1() {
        
        
        var i=1;
        while(i<count)
        {
            document.getElementById('pn'+i).value='';
              document.getElementById('pni'+i).value='';
                document.getElementById('pnii'+i).value='';
            i++;
        }
        document.getElementById('pa').innerHTML='';
    }