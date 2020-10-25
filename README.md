Bài 1
In một bảng nhân của một số bất kỳ với các số từ 1 tới 10 và hiển thị kết quả. Ví dụ: Bài 1

Bài 2
Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In các số chẵn từ 1 đến n Vd n = 6: in ra: 2 4 6

Bài 3
Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n

vd nhập vào 6: Tổng = 1 + 2 + 3 + 4 + 5 + 6 = 21

Bài 4
Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 In ra n! (giai thừa của n)

Bài 5
Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn

Vd: param là [1, 2, 3, 6, 2, 9, 0] thì return 4 vì có 4 số chẵn

Bài 6
Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp

Vd params:

['A', 'C', 'A', 'A', 'B', 'D', 'B']
Thì return:

return ['A', 'C', 'B', 'D']
Bài 7
Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array sau:

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
Yêu cầu mảng cần tạo phải là:

const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
Bài 8
Cho array dưới đây là danh sách các students

const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất

Với format đầu ra dạng:

return {
    theBest: { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    theBad: { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 }
}