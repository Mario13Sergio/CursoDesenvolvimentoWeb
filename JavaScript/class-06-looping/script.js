// >>>>>>>>> LOOPINGS <<<<<<<<<<<

// DO - WHILE

// let count = 10 //flag
// let count = 0 //flag

// while (count <= 10) {
//         if (count > 2 && count < 8) {
//             count ++
//             // continue
//             break
//         }
//             if (count % 2 == 0) {
//         console.log(count)
//     }
//     count++ // container
// }
// do {
//     if (count > 2 && count < 8) {
//         count ++
//         // continue
//         break
//     }
//         if (count % 2 == 0) {
//     console.log(count)
// }
// count++ // container
// }while (count <= 10)

// console.log("Running...")


// FOR

for (let count = 0; count <= 10; count++) { // increment factor
        if (count > 2 && count < 8) {
            // count++ // Caution, two increments!
            continue
            // break
        }

        if (count % 2 == 0) {
            console.log(count)
        }
}
