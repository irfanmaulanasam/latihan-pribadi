console.log('mengurut huruf dengan cara manual')
console.log('============================')
var name = 'Hacktiv8';
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
console.log(name[5])
console.log(name[6])
console.log(name[7])
console.log('looping menggunakan angka untuk melihat index')
console.log('=============================================')
for(var i = 0 ; i <= 7 ; i ++ ){
    console.log(i)
}
console.log('')
console.log('mengurut huruf dengan looping')
console.log('===============================')
for(var i = 0 ; i < name.length ; i ++ ){
    console.log(name[i])
}
console.log('membalik urutan dengan looping')
console.log('================================')

for(i = name.length -1 ; i >= 0 ; i-- ){
    console.log(name[i])
}