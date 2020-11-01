// Bài 1
// Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp
//Cách 1
const getArr = (string, numberrepeat) => {
    const arr = []
    for (let i = 0; i < numberrepeat; i++) {
        arr.push(string)
    }
    return arr
}

//Cách 2
const getArrway = (string, numberrepeat) => {
    const arr = []
    let i = 0
    while (i < numberrepeat) {
        arr.push(string)
        i++
    }
    return arr
}

// Bài 2
// Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse()
const reverseArr = arr => {
    const newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

// Bài 3
// Xóa đi các giá trị được xem là sai
const deleteValue = arr => arr.filter(element => element)

// Bài 4
// Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
const getObj = data =>{
    const obj = {}
    data.forEach(arr => {
        obj[arr[0]] = arr[1]
    });
    return obj
}

// Bài 5
// Sắp xếp mảng tăng dần
const sortArr = arr => arr.sort()

// Bài 6
// Kiểm tra input đầu vào có phải là object hay không?
const checkObj = obj => {
    if (Array.isArray(obj) || typeof obj!== 'object') {
        return false
    } else {
        return true
    }
}

// Bài 7
// Viết 1 hàm trả về các key (của 1 object) khác các key truyền vào 
const getKey = (obj, arr) => {
    arr.forEach (i => {
        for (let key in obj) {
            if (key == i) {
                delete(obj[key])
            }
        }
    })
    return obj
}

// Bài 8
// Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa
const deleteItemArr = arr => {
    if (arr.length < 5) return
    arr.splice(1, 2)
    return arr
}

// Bài 9
// Viết hàm nhập vào 1 array có cấu trúc như ví dụ sau:

// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]
// Hãy tạo 1 array mới, với cấu trúc sau:

// ['Pass', 'Fail', 'Fail', 'Pass', 'Pass', 'Fail', 'Pass']
// Điều kiện Pass:

// Điểm trên 5.0 và không có chữ Duy là tên đệm
const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const findStudent = students => {
    const studentPass = []
    students.forEach(student => {
        if (student.score < 5 || student.name.indexOf('Duy') >= 3 && student.name.indexOf('Duy') <= 7) {
            studentPass.push('Fail')
        } else {
            studentPass.push('Pass')
        }
    })
    return studentPass
}

//  Bai 10 
const studentstwo = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const getStudentScore = studentstwo => {
    const studentPass = []
    studentstwo.forEach(student => {
        const scoreInt = Number.parseInt(student.score)
        const scoreFloat = (student.score - scoreInt) * 10
        let sum = Math.round(scoreFloat) + scoreInt
        if (sum >= 10) {
            sum = sum - 10
        }
        if (sum > 5) {
            studentPass.push(student)
        }
    })
    return studentPass
}
