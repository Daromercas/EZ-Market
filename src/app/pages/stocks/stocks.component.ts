import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  constructor() { 
    
    
    
  }

  ngOnInit(): void { 
    /*


fetch("https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=TSLA", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "4be0429e17msh2f2eee4816d2a32p18a9f7jsnb52e46c321f2",
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
      }
    })
    


    fetch("https://realstonks.p.rapidapi.com/TSLA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4be0429e17msh2f2eee4816d2a32p18a9f7jsnb52e46c321f2",
		"x-rapidapi-host": "realstonks.p.rapidapi.com"
	}
})

    */



// api url
//const api_url =   "https://employeedetails.free.beeceptor.com/my/api/path";
  
// Defining async function
async function getapi() {
    
    // Storing response
    const response = await fetch("https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=AMD", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "**********",
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
      }
    })
    
    // Storing data in form of JSON
    var data = await response.json();
    
  

    console.log(data);
    if (response) {
        hideloader();
    }
    
    show(data);
}
// Calling that async function
 getapi();
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table

function show(data) {


  let tab = 
  `<tr>
    <th>Quick info for AMD</th>
    
   </tr>`;


/*
    let tab = 
        `<tr>
          <th>Symbol</th>
          <th>End</th>
          <th>Start</th>
         </tr>`;
    */
    // Loop to access all rows 
    /*
    for (let r of data) {
        tab += `<tr> 
    <td>${r.symbol} </td>
    <td>${r.end}</td>
    <td>${r.start}</td>     
</tr>`;
    }
    */
    
    for (let r of Object.values(data)) {
    
      tab += `<tr> 
  
  <td>${JSON.stringify(r).split("/t")}</td>
  
</tr>`;
  }
    // Setting innerHTML as tab variable
    document.getElementById("stocks").innerHTML = tab;
    
}








/*
    
    async function getStocks(){
      let response = await fetch("https://yahoo-finance-low-latency.p.rapidapi.com/v8/finance/spark?symbols=TSLA%2CNIO%2CMRNA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4be0429e17msh2f2eee4816d2a32p18a9f7jsnb52e46c321f2",
		"x-rapidapi-host": "yahoo-finance-low-latency.p.rapidapi.com"
	}
})
      let data = await response.json()

  
      return data;
    }


    
    //getStocks().then(data => console.log(data));
    getStocks().then(data => console.table(data));


    function loadJSON() {

     
  }
*/

    
  }

}
