import { License, RankedLicense, TestLicense } from "./model/license";

const isLicenseValid = (license: TestLicense): boolean => {
    // Gross oversimplification assuming all fields given are required
    return Object.values(license).every(value => {
        return value != "" && value != null;
    });
};

// params:
// testLicense: license to find potential matches for
// realLicenses: some list of licenses (comes from a db somewhere)
// weights: key value pair for field and how much it's worth relative to other fields
const findSimilarLicenses = (
    testLicense: TestLicense, 
    realLicenses: License[],
    weights: {[key: string]: number}
): RankedLicense[] => {
    if (!isLicenseValid(testLicense)) {
        throw Error("Invalid license information")
    }

    const rankedMatches: RankedLicense[] = realLicenses.map(license => {
        const similarityScoresByField = Object.keys(weights).map((field) => {
            // In a world where this isn't a short exercise:
            // we have specific matching algorithms by data type (date, numbers, etc)
            // but for now everything can just be a string
            return similarity(testLicense[field].toString(), license[field].toString());
        });

        return {
            id: license.id,
            confidence: weightedAverage(similarityScoresByField, Object.values(weights))
        };
    });

    return rankedMatches
        .sort((a, b) => a.confidence < b.confidence ? 1 : -1)
        .splice(0, 5);
};

const LicenseLookup = {
    findSimilarLicenses,
    isLicenseValid
};

export default LicenseLookup;

// https://www.30secondsofcode.org/js/s/weighted-average
// why reinvent the wheel
const weightedAverage = (nums: number[], weights: number[]): number => {
    const [sum, weightSum] = weights.reduce(
        (acc: number[], w, i) => {
            acc[0] = acc[0] + nums[i] * w;
            acc[1] = acc[1] + w;
            return acc;
        },
        [0, 0]
    );
    return sum / weightSum;
};

// Thank you overlord1234
// https://stackoverflow.com/a/36566052
function similarity(s1: string, s2: string): number {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength.toString());
}

function editDistance(s1: string, s2: string) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
        if (i == 0)
            costs[j] = j;
        else {
            if (j > 0) {
                var newValue = costs[j - 1];
                if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                    costs[j]) + 1;
                costs[j - 1] = lastValue;
                lastValue = newValue;
            }
        }
    }
    if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}