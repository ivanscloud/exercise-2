//fungsi untuk mengambil nilai
function getValue(){
  n1 = document.getElementsByName('angka1')[0].value;
  n2 = document.getElementsByName('angka2')[0].value;
  n1 = parseInt(n1);
  n2 = parseInt(n2);
}

// Penambahan
function tambah() {
  getValue();
  hasil = n1 + n2;
  document.getElementsByName('hasil')[0].value = hasil;
}

// Pengurangan
function kurang() {
  getValue();
  hasil = n1 - n2;
  document.getElementsByName('hasil')[0].value = hasil;
}

// Perkalian
function kali() {
  getValue();
  hasil = n1 * n2;
  document.getElementsByName('hasil')[0].value = hasil;
}

//Pembagian
function bagi() {
  getValue();
  hasil = n1 / n2;
  document.getElementsByName('hasil')[0].value = hasil;
}

// Modulus
function mod() {
  getValue();
  hasil = n1 % n2;
  document.getElementsByName('hasil')[0].value = hasil;
}