//Menjalankan fungsi secara otomatis saat halaman web selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    //Tangkap elemen penampung data di HTML
    const cvContainer = document.getElementById('cv-data-container');

    //Mencegah cache browser agar selalu mengambil data JSON terbaru
    const noCacheUrl = 'cv.php?t=' + new Date().getTime();

    //Melakukan request AJAX
    fetch(noCacheUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Gagal terhubung ke server');
            }
            return response.json(); 
        })
        .then(data => {
            let htmlContent = ``;

            //Skills
            htmlContent += `<h3>Skills & abilities</h3><ul>`;
            data.skills.forEach(skill => {
                htmlContent += `<li>${skill}</li>`;
            });
            htmlContent += `</ul>`;

            //Experience
            htmlContent += `<h3>Experience</h3>`;
            data.experience.forEach(exp => {
                htmlContent += `
                    <div class="exp-item">
                        <div class="exp-header">
                            <span class="exp-title">${exp.title}</span>
                            <span class="exp-period">${exp.period}</span>
                        </div>
                        <ul>
                `;
                exp.responsibilities.forEach(task => {
                    htmlContent += `<li>${task}</li>`;
                });
                htmlContent += `</ul></div>`;
            });

            //Tampilan
            cvContainer.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error:', error);
            cvContainer.innerHTML = `<p style="color: red; text-align: center;">Gagal memuat data CV dari server.</p>`;
        });
});

