// Exercise 1:
const isEqual = (arr1, arr2) => {
    arr1.sort()
    arr2.sort()
    if (arr1.length == arr2.length && JSON.stringify(arr1) === JSON.stringify(arr2)) return true;
    else return false
}

// Exercise 2:
const flattenArr = arr => {
    const changeString = arr.toString().replaceAll(',', '')
    return changeString.split('')
}

// Exercise 3:
const chunkArr = (arr, size) => {
    newArr = []
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size))
    }

    return newArr
}

// Exercise 4:
const findRepeatArr = arr => {
  const notRepeatArr = []
  const repeatArr = []
  for (let i = 0; i < arr.length; i++) {
    if(notRepeatArr.indexOf(arr[i]) === -1){
      notRepeatArr.push(arr[i])
    } else {
      if (repeatArr.indexOf(arr[i]) === -1) {
        repeatArr.push(arr[i])
      }
    }
  }

  return repeatArr
}

const intersectionArr = (arr1, arr2, arr3 = []) => {
  const allArr = [ ...arr1, ...arr2, ...arr3]
  return findRepeatArr(allArr)
}

// Exercise 5:
const checkTime = date => {
  const saleTime = new Date(2020, 10, 30, 12, 30, 32)
  if (date.getTime() <= saleTime.getTime()) return true;
  else return false
}

// Exercise 6:
const checkEmail = email => {
  const regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.]+)\.({a-z\.])$/g
  return regetEmail.test(email)
}
const checkUserName = user => {
  const regexUserName = /^([a-z0-9_]){2,10}$/g
  if (user.indexOf(__) !== -1) return false
  else return regexUserName.test(user)
}
