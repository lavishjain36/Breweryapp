document.body.innerHTML=`
<div class="heading-container">
<h1>Brewerys List</h1>
<img class="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy6RKL_soj8MsoMbzQu96msGyHWrXioqdJnw&usqp=CAU">
</div>

<div id="mainContainer" class="main-container"></div>
`

//Get the Brewerys data  
const  getBreweriesData=async ()=>{
    try {
        //fetch the data from api 
        const data=await fetch("https://api.openbrewerydb.org/breweries");
        //Convert the data into  JSON format
        const brewerys=await data.json();
        mainContainer.innerHTML="";
        brewerys.forEach((brewery)=>{
            // console.log(brewery);
            displayBreweryData(brewery);
        })
        
    } catch (error) {
        console.log(error);
        mainContainer.innerHTML=error.message;
    }
                                             
}
getBreweriesData();



const displayBreweryData=(obj)=>{
mainContainer.innerHTML+=`
<div class="container">
     <h3 class="test">Name:<span>${obj.name}</span></h3>
     <p class="para test">Type:<span>${obj.brewery_type}</span></p>
     <p class="para test">City:<span>${obj.city}</span></p>
     <p class="para test">Street:<span>${obj.street}</span></p>
     <p class="para test">State:<span>${obj.state}</span></p>
     <p class="para test">Phone:<span>${obj.phone}</span></p>
     <p class="para test">Country:<span>${obj.country}</span></p>
</div>
`;
}