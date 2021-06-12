//1. Write a JavaScript function to check whether an `input` is an array or not Test Data :

function is_array(input) {
    if (input.constructor === Array) {
        return true;
    }
    return false;
}

console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));


//2. Write a JavaScript function to clone an array

function array_Clone(arr) {
    return [...arr]
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

/** 3. Write a JavaScript function to get the first element of an array.
Passing a parameter 'n' will return the first 'n' elements of the array.**/

function first(arr, n = 0) {
    if (arr.length === 0) {
        return [];
    }
    if (n == 0) {
        return arr[0];
    }
    var res = []
    for (var i = 0; i < n; i++){
        if (i == arr.length) break;
        res.push(arr[i]);
    }

    return res
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));


//4. Write a simple JavaScript program to join all elements of the following array into a string.

function joinArr(arr) {
    var i = 1;
    while (i) {
        console.log(arr.join(","));
        console.log(arr.join("-"));
        console.log(arr.join("+"));
        console.log(arr.join("*"));

        i -= 1;
    }
}

joinArr( ["Red", "Green", "White", "Black"])

//5. Write a JavaScript program to find the most frequent item of an array
function mostFrequentEl(arr) {
    count = {}
    for (var i = 0; i < arr.length; i++){
        if (arr[i] in count) {
            count[arr[i]] += 1
        }
        else {
            count[arr[i]] = 1
        }
    }
    res = 0
    for (key in count) {
        res = Math.max(res, count[key])
    }

    return res
}

console.log(mostFrequentEl([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));