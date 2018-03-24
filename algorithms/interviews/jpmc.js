function validateNumber(numStr) {
    let num = numStr.split(",");
    let valid = true;
    num.forEach((chunk, idx) => {
       if(idx === 0 && !(chunk.length <= 3)) {
          valid = false;
       } else if (chunk.length < 3) {
           valid = false;
       }
    });
    return valid;
}


//returns true:
// 5
// 8,509
// 41,900
// ["41", "900"]

//returns false:
// 65,23

var siteData = {
    users: [
        {
            id: 68237946,
            birthMonth: 5,
            vip: "true"
        },
        {
            id: 23949894,
            birthMonth: 2,
            vip: "false"
        },
        {
            id: 65524624,
            birthMonth: 11,
            vip: "false"
        },
        {
            id: 16728547,
            birthMonth: 9,
            vip: "true"
        },
        ...
    ]
}

//Returns an array of all eligible user ids
//Eligibility rules:
// 1) User was born in the current month
// 2) User has vip account status
function findEligibleUsers(data, currentMonth) {
    let eligible = data.users.filter(user => user.birthMonth === currentMonth && user.vip === "true");
    return eligible.map(user => user.id);
}

findEligibleUsers(siteData, 11)
