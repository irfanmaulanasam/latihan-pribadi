/*
 Buatlah sebuah algoritma atau pseudocode untuk menghitung tarif tol dengan ketentuan sebagai berikut
  1. Tol dalamkota berlaku tarif flat sesuai tipe kendaraan sebagai berikut
    - sedan, minibus, van Rp. 9.500,00
    - bus, trek, mobilbox Rp. 11.000,00
    - trek gandeng Rp. 15.000,00
  2. Tol antar kota berlaku tarif flat sesuai tipe kendaraan sebagai berikut
    - sedan, minibus, van Rp. 11.500,00
    - bus, trek, mobilbox Rp. 13.000,00
    - trek gandeng Rp. 18.000,00
*/
Tahun Kabisat
   STORE = tarif tol
   If kendaraan (sedan, minibus van) come in tol dalamkota =Rp. 9.500,00
   else if
   kendaraan (sedan, minibus, van) come in tol antar kota =Rp. 11.500,00

   If kendaraan (bus, trek, mobilbox) come in tol dalamkota = Rp. 11.000,00
   else if
   kendaraan (bus, trek, mobilbox) come in tol antar kota =Rp. 13.000,00

   If kendaraan (trek gandeng) come in tol dalamkota = Rp. 15.000,00
   else if
   kendaraan (trek gandeng) come in tol antar kota =Rp. 18.000,00
end IF
   display = tarif tol (kendaraan)
