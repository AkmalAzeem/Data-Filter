let superheroes = [
    {
        id: 1,
        name: "Superman",
        age: 42,
        planet: "Krypton",
        group: "Justice League"
    },

    {
        id: 2,
        name: "thor",
        age: 1500,
        planet: "Asgard",
        group: "Avengers"
    },

    {
        id: 3,
        name: "Star Lord",
        age: 36,
        planet: "Earth",
        group: "Guardians of the galaxy"
    },

    {
        id: 4,
        name: "Iron Man",
        age: 45,
        planet: "Earth",
        group: "Avengers" 
    },

]


/* loops */



function createrows(supes)

{

    document.getElementById("data").innerHTML= "";
    supes.forEach(function(superheroes,index){


        let tr = document.createElement("tr");
        
        let Notd1 = document.createElement("td");
        Notd1.append(superheroes.id);
        
        let Notd2 = document.createElement("td")
        Notd2.append(superheroes.name);
        
        let Notd3 = document.createElement("td")
        Notd3.append(superheroes.age);
        
        let Notd4 = document.createElement("td")
        Notd4.append(superheroes.planet);
        
        let Notd5 = document.createElement("td")
        Notd5.append(superheroes.group)
        
        tr.append(Notd1);
        tr.append(Notd2);
        tr.append(Notd3);
        tr.append(Notd4);
        tr.append(Notd5);
        
        document.getElementById("data").append(tr);
        
        })

}

createrows(superheroes);


function searchName(sName){

    let filteredArrays = superheroes.filter(function(superheroes, index){
        return superheroes.name.toUpperCase(). includes(sName.toUpperCase());
    })

    createrows(filteredArrays);

    
}

