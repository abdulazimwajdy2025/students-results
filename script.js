fetch('students.json')
    .then(response => response.json())
    .then(data => {
        const searchButton = document.getElementById('search-button');
        const searchInput = document.getElementById('search-input');
        const resultDiv = document.getElementById('result');

        searchButton.addEventListener('click', () => {
            const id = Number(searchInput.value.trim()); // تحويل الرقم إلى Number
            const student = data.find(s => s.id === id); // البحث باستخدام ===
            if (student) {
                resultDiv.innerHTML = `
                    <h2>مبروك النجاح</h2>
                    <table>
                        <tr><th>الاسم</th><td>${student.name}</td></tr>
                        <tr><th>المرحلة</th><td>${student.gradeLevel}</td></tr>
                        <tr><th>لغة عربية</th><td>${student.arabic}</td></tr>
                        <tr><th>رياضيات</th><td>${student.math}</td></tr>
                        <tr><th>لغة انجليزية حكومي</th><td>${student.english}</td></tr>
                        <tr><th>المجــــــموع</th><td>${student.total}</td></tr>
                        <tr><th>تربية دينية</th><td>${student.deen}</td></tr>
                        <tr><th>متعدد التخصصات</th><td>${student.dis}</td></tr>
                        <tr><th>توكاتسو</th><td>${student.tok}</td></tr>
                        <tr><th>تربية بدنية</th><td>${student.pe}</td></tr>
                    </table>
                    <button onclick="window.print()">طباعة النتيجة</button>
                `;
            } else {
                resultDiv.innerHTML = '<p>لم يتم العثور على نتيجة لهذا الرقم او قد تكون النتيجة محجوبة راجع ادارة المدرسة.</p>';
            }
        });
    })
    .catch(error => {
        console.error('خطأ في تحميل البيانات:', error);
    });
