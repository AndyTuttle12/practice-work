function isSingle(part1, part2, shuffled) {
    var part1Index = 0;
    var part2Index = 0;
    var part1MaxIndex = part1.length - 1;
    var part2MaxIndex = part2.length - 1;

    for (var i = 0; i < shuffled.length; i++) {
        var card = shuffled[i];

        if (part1Index <= part1MaxIndex &&
                card === part1[part1Index]) {
            part1Index++;

        } else if (part2Index <= part2MaxIndex &&
                card === part2[part2Index]) {
            part2Index++;

        } else {
            return false;
        }
    }
    return true;
}

// Practice on a simple shuffle algorythm.

