const flowers = [
    {
        id: 1,
        color: "blue",
        species: "flowerus azurus",
        price: 0.99
    },
    {
        id: 2,
        color: "red",
        species: "rosus reddus",
        price: 12.49
    }
]

const addFlower = (flowerObject) => {
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */
    // get max current id of flowers array
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxID = currentLastFlower.id

    // increment max id by 1 for new flower in array

    const idForNewFlower = maxID + 1

    // Add the id property to new flower object

    flowerObject.id = idForNewFlower

    // Push flower object to the array

    flowers.push(flowerObject)

}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code


    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
    for (const flower of flowers) {
        if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)
        }
    }

    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

