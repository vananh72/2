//b1:in bang nhan
const getMultiply = (number) => {
    console.log('In bang nhan:')
    for(let i=1; i<=10; i++){
        console.log(number, 'x', i, '=', number*i)
    }
}
//b2:in cac so chan tu 1 den n
const checkEven = (n) => {
    if(n<1 || n>30) console.log('Nhap lai n')
    else {
        console.log('So chan tu 1 den', n, ':')
        for(let i=1; i<=n; i++){
            if(i%2==0) console.log(i)
        }
    }
    
}
//b3:tinh tong tu 1 den n
const getSum = (n) => {
    if(n<1 || n>30) console.log('Nhap lai n')
    else {
        let s=0
        for(let i=1; i<=n; i++) s+=i
        console.log('Tong tu 1 den', n, ':', s)
    }
}
//b4:tinh giai thua
const getFactorial = (n) => {
    if(n<1 || n>30) console.log('Nhap lai n')
    else {
        let t=1
        for(let i=1; i<=n; i++) t*=i
        console.log('Giai thua cua', n, ':', t)
    }
}
//b5:So chan trong mang
const getArrEven = arr => {
    let count=0
    for(let i=1; i<arr.length; i++){
        if(arr[i] % 2 == 0)count++;
    }
    return count
}
//b6:Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp
const getAlphabet = arr => {
    let newARRay = []
    for(let i=0; i<arr.length; i++){
        if(newARRay.indexOf(arr[i]) == -1)
            newARRay.push(arr[i])
    }
    return newARRay
}
//b7:
// Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array sau:

// const studentNames = [
//     { id: 1, name: 'Nguyễn Thị Tèo' },
//     { id: 2, name: 'Phạm Văn Bưởi' },
//     { id: 3, name: 'Hoàng Văn Nam' },
//     { id: 4, name: 'Vũ Ngọc Duy' },
//     { id: 5, name: 'Nguyễn Minh Nhật' },
//     { id: 6, name: 'Phí Duy Quân' },
//     { id: 7, name: 'Trần Minh Minh' }
// ]
// const studentScores = [
//     { id: 1, score: 9.2 },
//     { id: 2, score: 2.3 },
//     { id: 3, score: 3.7 },
//     { id: 4, score: 6.9 },
//     { id: 5, score: 5.2 },
//     { id: 6, score: 9.6 },
//     { id: 7, score: 6.1 }
// ]
// Yêu cầu mảng cần tạo phải là:

// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]

const studentNames = [
    { id: 1, name: 'Nguyễn Thị Tèo' },
    { id: 2, name: 'Phạm Văn Bưởi' },
    { id: 3, name: 'Hoàng Văn Nam' },
    { id: 4, name: 'Vũ Ngọc Duy' },
    { id: 5, name: 'Nguyễn Minh Nhật' },
    { id: 6, name: 'Phí Duy Quân' },
    { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
    { id: 1, score: 9.2 },
    { id: 2, score: 2.3 },
    { id: 3, score: 3.7 },
    { id: 4, score: 6.9 },
    { id: 5, score: 5.2 },
    { id: 6, score: 9.6 },
    { id: 7, score: 6.1 }
]
const getStudent = (studentNames, studentScores) => {
    for(let i=0; i<studentNames.length; i++){
        studentNames[i].score = studentScores[i].score
    }
    return studentNames
}

//b8
// const students = [
//     { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//     { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//     { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//     { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//     { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//     { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]
// Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất

// Với format đầu ra dạng:

// return {
//     theBest: { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//     theBad: { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 }
// }

const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
const getMinMax = (students) => {
    const theBest = []
    const theBad = []
    let minScore = students[0].score
    let maxScore = students[0].score
    for(let i=0; i < students.length; i++){
        if(minScore > students[i].score) minScore = students[i].score
        if(maxScore < students[i].score) maxScore = students[i].score
    }
    for(let i=0; i < students.length; i++){

        if(students[i].score == minScore){
            theBad.id = students[i].id
            theBad.name = students[i].name
            theBad.score = students[i].score
        }
    }
    for(let i=0; i < students.length; i++){

        if(students[i].score == maxScore){
            theBest.id = students[i].id
            theBest.name = students[i].name
            theBest.score = students[i].score
        }
    }
    console.log(theBad)
    console.log(theBest)
}
