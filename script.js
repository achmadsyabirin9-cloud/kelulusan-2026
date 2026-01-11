// Data Siswa (Ganti bagian ini dengan data dari Excel Anda)
const dataSiswa = [
    {
    "NAMA": "Achmad syabirin",
    "NISN": "123456",
    "STATUS": "LULUS"
  },
  {
    "NAMA": "Ita",
    "NISN": "654321",
    "STATUS": "TIDAK LULUS"
  }
];

function cekKelulusan() {
    const namaInput = document.getElementById('inputNama').value.toUpperCase();
    const nisnInput = document.getElementById('inputNisn').value;
    const resultDiv = document.getElementById('result');
    const resultContent = document.getElementById('resultContent');

    // Validasi Input Kosong
    if (namaInput === "" || nisnInput === "") {
        alert("Silakan masukkan Nama dan NISN terlebih dahulu!");
        return;
    }

    // Cari data yang cocok
    const siswa = dataSiswa.find(s => s.nama === namaInput && s.nisn === nisnInput);

    // Tampilkan Hasil
    resultDiv.classList.remove('hidden');
    document.querySelector('.card').classList.add('hidden');

    if (siswa) {
        let statusClass = siswa.status === "LULUS" ? "lulus" : "tidak-lulus";
        resultContent.innerHTML = `
            <h4>Hasil Pencarian:</h4>
            <p>Nama: <b>${siswa.nama}</b></p>
            <p>NISN: <b>${siswa.nisn}</b></p>
            <hr style="margin: 15px 0">
            <p>Dinyatakan:</p>
            <h2 class="${statusClass}">${siswa.status}</h2>
        `;
    } else {
        resultContent.innerHTML = `
            <h4 style="color: #e74c3c">Data Tidak Ditemukan</h4>
            <p>Mohon periksa kembali Nama dan NISN yang Anda masukkan.</p>
        `;
    }
}

function resetForm() {
    document.getElementById('result').classList.add('hidden');
    document.querySelector('.card').classList.remove('hidden');
    document.getElementById('inputNama').value = "";
    document.getElementById('inputNisn').value = "";
}