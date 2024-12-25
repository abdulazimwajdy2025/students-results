
// بيانات الطلاب
const students = [
    { name: "محمد أحمد", id: "12345", grade: 95 },
    { name: "سارة محمد", id: "67890", grade: 88 },
    { name: "علي إبراهيم", id: "11223", grade: 76 },
];

// البحث عن النتيجة
function checkResult() {
    const studentId = document.getElementById("studentId").value.trim();
    const resultDiv = document.getElementById("result");

    // البحث في البيانات
    const student = students.find((s) => s.id === studentId);

    if (student) {
        resultDiv.innerHTML = `الطالب: ${student.name} <br> الدرجة: ${student.grade}`;
    } else {
        resultDiv.innerHTML = "لم يتم العثور على نتيجة لهذا الرقم.";
    }
}
