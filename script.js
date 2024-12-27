
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
                    <p>اسم الطالب: ${student.name}</p>
                    <p>المرحلة: ${student.gradeLevel}</p>
                    <p>المواد:</p>
                    <ul>
                        <li>عربي: ${student.arabic}</li>
                        <li>علوم: ${student.science}</li>
                        <li>حساب: ${student.math}</li>
                        <li>إنجليزي: ${student.english}</li>
                        <li>دراسات: ${student.social}</li>
                    </ul>
                    <button onclick="window.print()">طباعة النتيجة</button>
                `;
            } else {
                resultDiv.innerHTML = 'لم يتم العثور على نتيجة لهذا الرقم.';
            }
        });
    })
    .catch(error => {
        console.error('خطأ في تحميل البيانات:', error);
    });
