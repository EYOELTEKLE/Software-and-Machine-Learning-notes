/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    const lastSeen = new Map()
    const firstSeen = new Map()
    const totalOccurence = new Map()
    let minLength = Infinity;
    let maxOccur = -Infinity
    for (let [i, item] of nums.entries()) {
        if (!(totalOccurence.has(item))) {
            totalOccurence.set(item, 1)
            firstSeen.set(item, i)
            lastSeen.set(item, i)
        }
        else {
            totalOccurence.set(item, totalOccurence.get(item) + 1)
            lastSeen.set(item, i)
            if (totalOccurence.get(item) > maxOccur) {
                maxOccur = totalOccurence.get(item)
                let length = lastSeen - firstSeen == 0 ? 1 : lastSeen.get(item) - firstSeen.get(item) + 1
                minLength = length
            }
            if (totalOccurence.get(item) == maxOccur) {
                maxOccur = totalOccurence.get(item)
                let length = lastSeen - firstSeen == 0 ? 1 : lastSeen.get(item) - firstSeen.get(item) + 1
                minLength = Math.min(minLength, length)
            }

        }
    }
    return minLength == Infinity ? 1 : minLength;

};
