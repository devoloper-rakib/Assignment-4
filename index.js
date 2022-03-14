


// problem 1 creating 3 Quantity by javascript 

function NumberOfProducts(C,W,Cof){

        var Computer = 1000;
        var Watch = 260;
        var Coffee = 50;
        var TotalCost= Computer * C + Watch * W + Coffee * Cof;
        console.log
        if((typeof(C,W,Cof))!== "number"){
            console.log("\nERROR INPUT")
        }
        else{
        console.log("Total Cost of the products is: " + TotalCost + " Taka");
    }
}

//take input
var TotalProduct = NumberOfProducts(2 ,2 ,12 );






// Problem -2 Product Search 



var products = [
    {
        id: 1,
        title: "Laptop",
        price: 567,
        description: "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 2,
        title: "Mobile",
        price: 367,
        description: "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 3,
        title: "Watch",
        price: 180,
        description: "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },
    {
        id: 4,
        title: "Coffee",
        price: 40,
        description: "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper"
    },

];



// Search your product Here!
var search = "laptop"



//Changing the search string for matching the array
var nameCapitalized = search.charAt(0).toUpperCase() + search.slice(1).toLowerCase()
var found = products.find( ({ title }) => title === nameCapitalized );
//condition to show "product not found" when .find result is undefined
if(found === undefined){
    console.log("You searched for: " + nameCapitalized)
    console.log("Product Not Found");
}
else{
    console.log("Here is your search result:" + nameCapitalized)
    console.log(found)
}






//Problem - 3 Hidden Billionaire Calculator

function SavingYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        let TotalSaving = 366 * 10;    
        console.log("You saved " + TotalSaving + "Taka in " + year + ".");        
    } 
    else {
        let TotalSaving = 365 * 10;      
        console.log("You saved " + TotalSaving + "Taka in " + year + ".");
    }

}
//takeInput
//On which year I studied in class five
var Year = SavingYear(2013);















