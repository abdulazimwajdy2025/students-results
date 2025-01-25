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
        <tr><th>دراسات</th><td>${student.social || 'غير متوفر'}</td></tr>
        <tr><th>علوم</th><td>${student.scienc || 'غير متوفر'}</td></tr>
        <tr><th>لغة انجليزية حكومي</th><td>${student.english || 'غير متوفر'}</td></tr>
        <tr><th>المجــــــموع</th><td>${student.total || 'غير متوفر'}</td></tr>
        <tr><th>مستوى انجليزي</th><td>${student.eng || 'غير متوفر'}</td></tr>
        <tr><th>تربية دينية</th><td>${student.deen || 'غير متوفر'}</td></tr>
        <tr><th>متعدد التخصصات</th><td>${student.dis || 'غير متوفر'}</td></tr>
        <tr><th>توكاتسو</th><td>${student.tok || 'غير متوفر'}</td></tr>
        <tr><th>تربية بدنية</th><td>${student.pe || 'غير متوفر'}</td></tr>
        <tr><th>كمبيوتر</th><td>${student.ict || 'غير متوفر'}</td></tr>
        <tr><th>مهارات</th><td>${student.scal || 'غير متوفر'}</td></tr>
        <tr><th>تربية فنية</th><td>${student.art || 'غير متوفر'}</td></tr>
        <tr><th>تربية موسيقيه</th><td>${student.mu || 'غير متوفر'}</td></tr>
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
