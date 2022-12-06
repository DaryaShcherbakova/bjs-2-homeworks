function compareArrays(arr1, arr2) {
    let result = arr1.every((item, index) => item === arr2[index] && arr1.length === arr2.length);
  return result ;
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(itemGender => itemGender.gender === gender).map(itemAge => itemAge.age).reduce((acc, item, index, users) => {
        acc += item;
        if (index === users.length - 1) {
        return acc / users.length;
    }
    return acc;
}, 0)
    return result;

    }


    

  
