// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(object) {
    
    const answer = object.userRole == 'ADMIN' ? true : false;
    console.log(answer);
    return answer;
    // if (userRole == 'ADMIN') {
    //     console.log(true)
    // }

    // else {
    //     console.log(false)
    // }
}
isAdmin({
    firstName: 'Eileen',
    lastName: 'Smith',
    userRole: 'ADMIN'
})

// ----------------------------------------------------------------------------------------------------------------

function getEmail(object) {
    const ans = object.firstName.toLowerCase() + '.' + object.lastName.toLowerCase() + '@codeimmersives.com';
    console.log(ans);
    return ans;
}
getEmail({
    firstName: 'Brian',
    lastName: 'Carela'
})

// ----------------------------------------------------------------------------------------------------------------

function getPlaylistLength(object) {

    amount = 0;

    for(i = 0; i < object.songs.length; i++) {
        amount += 1;
    }
    return amount;
}
getPlaylistLength({
    name: 'hits',
    songs: ['The Distance', 'Ruby Tuesday', 'Old Town Road (remix)']
})

// ----------------------------------------------------------------------------------------------------------------

function getHardestHomework(object) {

    // let short = Number.MAX_VALUE;
    // let answer = '';

    // // console.log(object.name);
    // // return object.name

    // // for(let objects of object) {
    // //     if (objects.averageScore < short) {
    // //         answer = objects.name;
    // //     }
    // // }
    // // return answer;

    // // for(let property in object) {
    // //     // console.log(property, object[property]);
    // //     console.log(property.averageScore);
    // // }

    // // for(i = 0; i < object.length; i++) {
    // //     console.log(object.averageScore[i]);
    // //     // if (i < max) {
    // //     //     max = object.averageScore[i];
    // //     //     console.log(max)
    // //     // }
    // // }

    // for(i = 0; i < object.length; i++) {
    //     const item = object[i];

    //     if (item.averageScore < short) {
    //         answer = item.name;
    //     }
    // }
    // console.log(answer)
    // return answer;

    if (object.length > 0) {
        let empty = [];
        for (let i = 0; i < object.length; i++) {
            empty.push(object[i].averageScore)
        }

        let lowest = Math.min(...empty);

        for (const ans of object) {
            if (ans.averageScore === lowest) {
                return ans.name;
            }
        }
    }

    else {
        return '';
    }

    // if (object.length === 0) {
    //     return '';
    // }

    // let hardest = object[0];

    // for (const homework of object) {
    //     if (object.averageScore < hardest.averageScore) {
    //         hardest = homework
    //     }
    // }
    // return hardest.name

}
getHardestHomework([
    { name: 'homework 1', averageScore: 99 },
    { name: 'homework 2', averageScore: 100 },
    { name: 'homework 3', averageScore: 10 },
    { name: 'homework 4', averageScore: 1 },
    { name: 'homework 5', averageScore: 5 },
])

// ----------------------------------------------------------------------------------------------------------------


function createPhonebook(names, number) {
    
    let phone = {};

    for (i = 0; i < names.length; i++) {
        phone[names[i]] = number[i]; 
    }

    return phone;
}



// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};