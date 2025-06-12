// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks>=42) { 
        return (blocks -42)
    } else {
        return (42 -blocks)
    }
}
function distanceFromHqInFeet() {
    return (distanceFromHqInBlocks(blocks) * 264)
}
function distanceTravelledInFeet(Start, End) {
    if(Start>End) {
        return ((Start - End) * 264)
    } else {
        return ((End - Start) * 264)
    }
}
function calculatesFarePrice() {
    if (distanceTravelledInFeet(Start, End)>2500) {
        return ('cannot travel that far')
    } else if (distanceTravelledInFeet(Start ,End)>2000) {
        return ($25)
    } else if (distanceTravelledInFeet(Start , End)>400) {
        return ((distanceTravelledInFeet(Start , End) - 400) * 0.02)
    } else {
        return (0)
    }
}
