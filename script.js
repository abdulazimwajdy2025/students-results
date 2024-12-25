
fetch('students.json')
    .then(response => response.json())
    .then(data => {
        const searchButton = document.getElementById('search-button');
        const searchInput = document.getElementById('search-input');
        const resultDiv = document.getElementById('result');

        searchButton.addEventListener('click', () => {
            const id = searchInput.value.trim();
            const student = data.find(s => s.id === id);
            if (student) {
                resultDiv.innerHTML = `اسم الطالب: ${student.name} <br> الدرجة: ${student.grade}`;
            } else {
                resultDiv.innerHTML = 'لم يتم العثور على نتيجة لهذا الرقم.';
            }
        });
    })
    .catch(error => {
        console.error('خطأ في تحميل البيانات:', error);
    });
