
//step1. set a connection
var request = new XMLHttpRequest();

//step2. open connection
request.open('GET', "https://restcountries.eu/rest/v2/all", true);  //true if any error it will not stop execution

//step3.send request

request.send();

//step4.process and load retrive response

//Dont use arrow fn here

//this will refer the window obj rather than response obj
//so we shouldn't use anonymous fn
/*request.onload = () => {
    var data = JSON.parse(this.response);  
    console.log(data);
}*/





request.onload = function () {

    var countries = JSON.parse(this.response);  //why json parse bcoz response will come as string
    console.log("All countries data")
    console.log(countries);
    //  Task 1. Get all the countries from Asia continent / “region” using Filter function
    var asiaArr = countries.filter((item) => {
        return item.region == "Asia";
    });
    console.log("Countries whose region is Asia")
    console.log(asiaArr);


    //Task 2. Get all the countries with population of less than 2 lacs using Filter function 
    var popTwoLacsCountries = countries.filter((item) => {
        return item.population < 200000;
    });
    console.log("Countries those population less than 2 lacs")
    console.log(popTwoLacsCountries);


    //Task3. Print the following details name, capital, flag using forEach function

    countries.forEach((item) => {
        console.log("country name", item.name);
        console.log("country capital", item.capital);
        console.log("country flag", item.flag);
    });

    //Task4.  Print the total population of countries using reduce function.

    var totalPopUsingReduce = countries.reduce((acc, item) => {
        return acc + item.population;
    }, 0) //int is optional

    console.log("Total population of all countries", totalPopUsingReduce);


    //Task 5. Print the country which uses US Dollars as currency.

    var usDollarCountries = countries.filter((item) => {
        return item.currencies[0].symbol=="$";
    }).map((item)=>{
        return item.name;
    });

    console.log("Country which uses US dollar as currency",) ;
    console.log(usDollarCountries);
};




