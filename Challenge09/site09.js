const marvelHeroes = [{
        Alias: "Ant-Man",
        Name: "Scott Lang"
    },
    {
        Alias: "Black Panther",
        Name: "T'Challa"
    },
    {
        Alias: "Black Widow",
        Name: "Natasha Romanoff"
    },
    {
        Alias: "Captain America",
        Name: "Steve Rogers"
    },
    {
        Alias: "Doctor Strange",
        Name: "Stephen Strange"
    },
    {
        Alias: "Hawkeye",
        Name: "Clint Barton"
    },
    {
        Alias: "Hulk",
        Name: "Bruce Banner"
    },
    {
        Alias: "Iron Man",
        Name: "Tony Stark"
    },
    {
        Alias: "Power Man",
        Name: "Luke Cage",
    },
    {
        Alias: "Moon Knight",
        Name: "Steven Grant"
    },
    {
        Alias: "Captain Marvel",
        Name: "Carol Danvers"
    },
    {
        Alias: "Scarlet Witch",
        Name: "Wanda Maximoff"
    },
    {
        Alias: "Spider-Man",
        Name: "Peter Parker"
    },
    {
        Alias: "Thor",
        Name: "Thor Odinson"
    },
    {
        Alias: "Wasp",
        Name: "Janet van Dyne"
    }
]
//driver function used for display and passing values.
function findHero() {
   //get the values from the page. no need to change.
    let searchterm = document.getElementById("heroAlias").value;

    //implement the heroSearch function
    let hero = heroSearch(searchterm, marvelHeroes);
    
    //used for display. no need to change.
    if (hero==undefined || Object.keys(hero).length === 0){
        alert("Hero not found. Try a different name");
        return;
    }
    
    let msg = `${hero.Alias}'s real name is ${hero.Name}`;
    //display your message
    document.getElementById("results").innerHTML = msg;

}

//takes an array of strings and returns the longest one. 
function heroSearch(searchterm, marvelHeroes) {
    // convert to lowercase
    searchterm = searchterm.toLowerCase();
    // remove white space and non-alphanumeric characters
    searchterm = searchterm.replace(/[^a-z0-9]/g,"");
    
    let heroLowerCase = "";
    let resultObj = {};

    //loop over each hero object and see if matches search term
    marvelHeroes.forEach(element => {
        // simplify object alias
        heroLowerCase = element.Alias.toLowerCase();
        heroLowerCase = heroLowerCase.replace(/[^a-z0-9]/g,"");

        if (heroLowerCase == searchterm) {
            resultObj = element;
        }

    });

    return resultObj;
}