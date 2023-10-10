function validateForm() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var alamat = document.getElementById('alamat').value;

    if (nama.trim() === '' || email.trim() === '' || alamat.trim() === '') {
        alert('Semua kolom harus diisi');
    } else {
        alert('Form pendaftaran berhasil dikirim:\nNama: ' + nama + '\nEmail: ' + email + '\nAlamat: ' + alamat);
    }
}