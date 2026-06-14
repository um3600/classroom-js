// var classroom = [
//     ["A1", "A2", "A3"],
//     ["B1", "B2", "B3"],
//     ["C1", "C2", "C3"]
// ];

// function selectedSeat() {
//     var seats = "";

//     for (var i = 0; i < classroom.length; i++) {
//         var row = classroom[i];
//         var rowline = "";

//         for (var j = 0; j < row.length; j++) {
//             rowline += row[j] + " ";
//         }

//         seats += rowline + "\n";
//     }

//     return seats;
// }

// for (var i = 0; i >= 0; i++) {
//     var selectedOption = prompt(
//         `Please select one of the following options:
// 0. Exit.
// 1. Book your seat`
//     );

//     if (selectedOption === 0) {
//         break
//     } else if (selectedOption === 1) {
//         console.log(printseats());


//         var r = +prompt("Slect Row");
//         var c = +prompt("Slect Colum");

//  if (!classroom[r - 1] || !classroom[r - 1][c - 1]) {
//             console.log("Wrong input");
//         } else {
//             if (classroom[r - 1][c - 1] === "X ") {
//                 console.log("Already booked");
//             } else {
//                 classroom[r - 1][c - 1] = "X ";
//                 console.log(printSeats());
//             }
//         }
//     } else {
//         console.log("Wrong input");
//     }
// }


var classroom = [
    ["A1", "A2", "A3"],
    ["B1", "B2", "B3"],
    ["C1", "C2", "C3"]
];

function printSeats() {
    var seats = "";

    for (var i = 0; i < classroom.length; i++) {
        var row = classroom[i];
        var rowLine = "";

        for (var j = 0; j < row.length; j++) {
            rowLine += row[j] + "\t";
        }

        seats += rowLine + "\n";
    }

    return seats;
}

while (true) {
    var selectedOption = +prompt(
        "Please select one of the following options:\n" +
        "0. Exit\n" +
        "1. Book your seat"
    );

    if (selectedOption === 0) {
        console.log("Program exited.");
        break;
    }

    else if (selectedOption === 1) {
        console.log(printSeats());

        var r = +prompt("Select Row (1-3)");
        var c = +prompt("Select Column (1-3)");

        if (
            !classroom[r - 1] ||
            !classroom[r - 1][c - 1]
        ) {
            console.log("Wrong input");
        } else {
            if (classroom[r - 1][c - 1] === "X") {
                console.log("Already booked");
            } else {
                classroom[r - 1][c - 1] = "X";
                console.log("Seat booked successfully!\n");
                console.log(printSeats());
            }
        }
    }

    else {
        console.log("Wrong input");
    }
}   
