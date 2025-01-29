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
                // بناء الجداول بناءً على المرحلة الدراسية
                let insideTotalHtml = '';
                let outsideTotalHtml = '';
                let maxTotal = 0;

                if (student.gradeLevel === 'primary 3') {
                    // مواد داخل المجموع للصف الثالث الابتدائي
                    insideTotalHtml += `
                        <tr><th>(100) لغة عربية</th><td>${student.arabic}</td></tr>
                        <tr><th>(100) رياضيات</th><td>${student.math}</td></tr>
                        <tr><th>(100) إنجليزي حكومي</th><td>${student.english}</td></tr>
                    `;
                    maxTotal = 300;

                    // مواد خارج المجموع للصف الثالث الابتدائي
                    outsideTotalHtml += `
                        <tr><th>(100) متعدد التخصصات</th><td>${student.dis || '--'}</td></tr>
                        <tr><th>(100) تربية دينية</th><td>${student.deen || '--'}</td></tr>
                        <tr><th>(100) مستوى إنجليزي</th><td>${student.eng || '--'}</td></tr>
                        <tr><th>تربية بدنية</th><td>${student.pe || '--'}</td></tr>
                        <tr><th>توكاتسو</th><td>${student.tok || '--'}</td></tr>
                    `;
                } else {
                    // مواد داخل المجموع للصفوف الرابع والخامس والسادس
                    insideTotalHtml += `
                        <tr><th>(100) لغة عربية</th><td>${student.arabic}</td></tr>
                        <tr><th>(100) رياضيات</th><td>${student.math}</td></tr>
                        <tr><th>(100) إنجليزي حكومي</th><td>${student.english}</td></tr>
                        <tr><th>(100) دراسات</th><td>${student.social}</td></tr>
                        <tr><th>(100) علوم</th><td>${student.scienc}</td></tr>
                    `;
                    maxTotal = 500;

                    // مواد خارج المجموع للصفوف الرابع والخامس والسادس
                    outsideTotalHtml += `
                        <tr><th>(100) مهارات</th><td>${student.scal || '--'}</td></tr>
                        <tr><th>(100) تربية دينية</th><td>${student.deen || '--'}</td></tr>
                        <tr><th>(100) مستوى إنجليزي</th><td>${student.eng || '--'}</td></tr>
                        <tr><th>تربية بدنية</th><td>${student.pe || '--'}</td></tr>
                        <tr><th>توكاتسو</th><td>${student.tok || '--'}</td></tr>
                        <tr><th>(100) كمبيوتر</th><td>${student.ict || '--'}</td></tr>
                        <tr><th>تربية فنية</th><td>${student.art || '--'}</td></tr>
                        <tr><th>تربية موسيقية</th><td>${student.mu || '--'}</td></tr>
                    `;
                }

                // عرض النتيجة في الـ HTML
                resultDiv.innerHTML = `
                    <h2>مبروك النجاح</h2>
                    <table>
                        <tr style="background-color: #FFD700;"><th>الاسم</th><td>${student.name}</td></tr>
                        <tr style="background-color: #98FB98;"><th>المرحلة</th><td>${student.gradeLevel}</td></tr>
                        ${insideTotalHtml}
                        <!--<tr style="background-color: #ADD8E6;"><th>المجــــــموع</th><td>${student.total} / ${maxTotal}</td></tr>-->
                        ${outsideTotalHtml}
                    </table>
                    <button onclick="window.print()">طباعة النتيجة</button>
                `;
            } else {
                resultDiv.innerHTML = '<p>لم يتم العثور على نتيجة لهذا الرقم أو قد تكون النتيجة محجوبة. راجع إدارة المدرسة.</p>';
            }
        });
    })
    .catch(error => {
        console.error('خطأ في تحميل البيانات:', error);
    });
