//Menjumlahkan data pada array // input        // result
/*[1,2,3,4,5]     // 15
[1,2]           // 3
[5]             // 5
[]              // array kosong*/
/*let total = [0];
for (let i=1;i<=5;i++){
    total +=i;
    console.log(total)
    }

let total2 = 1+2+3+4+5;
console.log();*/

function penjumlahan(Array){
    if (Array.length===0){
        return "array kosong";
    }
    let total3=0;
    for (let i = 0; i <Array.length;i++){
        total3 +=Array[i];
    }
    return total3;
}
console.log(penjumlahan([1,2,3,4,5]));