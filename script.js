
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
                resultDiv.innerHTML = `
                    <h2>نتيجة الطالب</h2>
                    <table>
                        <tr><th>الاسم</th><td>${student.name}</td></tr>
                        <tr><th>المرحلة</th><td>${student.gradeLevel}</td></tr>
                        <tr><th>عربي</th><td>${student.arabic}</td></tr>
                        <tr><th>علوم</th><td>${student.science}</td></tr>
                        <tr><th>حساب</th><td>${student.math}</td></tr>
                        <tr><th>إنجليزي</th><td>${student.english}</td></tr>
                        <tr><th>دراسات</th><td>${student.social}</td></tr>
                    </table>
                    <button onclick="window.print()">طباعة النتيجة</button>
                `;
            } else {
                resultDiv.innerHTML = '<p>لم يتم العثور على نتيجة لهذا الرقم.</p>';
            }
        });
    })
    .catch(error => {
        console.error('خطأ في تحميل البيانات:', error);
    });
