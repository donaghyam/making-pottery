const buyClay = () => {
    const clay = {}
    return clay
}

const clay = buyClay()

const makePottery = (clayObject) => {
    clayObject.shape = "Bowl"
    return clayObject
}

const bowl = makePottery(clay)

const bisqueFire = (clayObject) => {
    clayObject.readyForGlazing = true 
    return clayObject
}

const clayFired = bisqueFire(bowl)

const glazePottery = (clayObject) => {
    if (clayObject.readyForGlazing === true) {
        clayObject.glazing = "Midnight blue"
        return clayObject
    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
}

const glazedBowl = glazePottery(clayFired)

const finalFiring = (clayObject, kilnTemp) => {
    if (kilnTemp > 1200) {
        clayObject.cracked = true
    } else {
        clayObject.cracked = false
    }
    return clayObject
}

const finishedBowl = finalFiring(glazedBowl, 1100)
console.log(finishedBowl)
