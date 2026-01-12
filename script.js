// PASTIKAN NAMA DI SINI HURUF KAPITAL SEMUA
// Tambahkan properti 'peringkat' pada setiap data siswa
const dataSiswa = [
    { nama: "BUDI SANTOSO", nisn: "1234567890", status: "LULUS", peringkat: "5" },
    { nama: "SITI AMINAH", nisn: "0987654321", status: "LULUS", peringkat: "2" },
    { nama: "ANDI WIJAYA", nisn: "1122334455", status: "TIDAK LULUS", peringkat: "-" }
];

function cekKelulusan() {
    // .trim() menghapus spasi yang tidak sengaja terketik di awal/akhir
    const namaInput = document.getElementById('inputNama').value.toUpperCase().trim();
    const nisnInput = document.getElementById('inputNisn').value.trim();
    
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');

    if (namaInput === "" || nisnInput === "") {
        alert("Silakan masukkan Nama dan NISN!");
        return;
    }

    // Cari data
    const siswa = dataSiswa.find(s => 
        s.nama === namaInput && s.nisn === nisnInput
    );

    resultDiv.classList.remove('hidden');
    document.querySelector('.card').classList.add('hidden');

    if (siswa) {
        let statusClass = siswa.status === "LULUS" ? "lulus" : "tidak-lulus";
        
        // Bagian HTML di bawah ini telah ditambahkan baris "Peringkat Eligible"
        resultContent.innerHTML = `
            <h4>Hasil Pencarian:</h4>
            <div style="text-align: left; margin: 15px 0; line-height: 1.8;">
                <p>Nama: <b>${siswa.nama}</b></p>
                <p>NISN: <b>${siswa.nisn}</b></p>
                <p>Peringkat Eligible: <b style="color: #180adb;">${siswa.peringkat}</b></p>
            </div>
            <hr style="margin: 15px 0; border: 0; border-top: 1px solid #eee;">
            <p>Dinyatakan:</p>
            <h2 class="${statusClass}">${siswa.status}</h2>
        `;
    } else {
        resultContent.innerHTML = `
            <h4 style="color: #e74c3c">Data Tidak Ditemukan</h4>
            <p>Pastikan Nama & NISN sesuai dengan data sekolah.</p>
            <p style="font-size: 11px; color: gray; margin-top: 10px;">
                Tips: Coba ketik nama dengan huruf kapital semua.
            </p>
        `;
    }
}

function resetForm() {
    document.getElementById('result').classList.add('hidden');
    document.querySelector('.card').classList.remove('hidden');
    document.getElementById('inputNama').value = "";
    document.getElementById('inputNisn').value = "";
}