(function () {

    var computers = [
        {"name": "Apple", "ram": 24},
        {"name": "Compaq", "ram": 4},
        {"name": "Acer", "ram": 16}
    ];

    var allComputersCanRunProgram = true;
    var onlySomeComputersCanRunProgram = false;

    for (var i = 0; i < computers.length; i++) {
        var computer = computers[i];
        if (computer.ram < 16) {
            allComputersCanRunProgram = false;
            //console.log(allComputersCanRunProgram)
        } else {
            onlySomeComputersCanRunProgram = true;
            //console.log(onlySomeComputersCanRunProgram);
        }
    };


    var listComputersEvery = (computers) => {
        return computers.every((computer) => {
            // Todos sao maiores que 16? true or false?
            return computer.ram > 16
        }); 
    };
    //console.log(listComputersEvery(computers));

    var listComputersSome = (computers) => {
        return computers.some((computer) => {
            // Alguns sao maiores que 16? true or false?
            return computer.ram < 16
        }); 
    };
    //console.log(listComputersSome(computers));

    var names = [
        "Alexandria",
        "Matthew",
        "Joe"
    ];

    var namesSmallEvery = (names) => {
        // Todos os nomes tem mais que 4 caracteres? True or false?
        return names.every((name) => {
            return name.length > 4;
        });
    };
    //console.log(namesSmallEvery(names));

    var namesSmallSome = (names) => {
        // Alguns  nomes tem mais que 4 caracteres? True or false?
        return names.some((name) => {
            return name.length > 4;
        });
    };
    //sconsole.log(namesSmallSome(names));
    

    names.some((name) => {
        //return console.log(name.length > 4);
    });
    

})();