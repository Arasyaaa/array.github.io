// var mobil = [
// {
//     merek: 'Avanza',
//     pintu: 4,
//     lokasi: 'Tamhel'
// },
// {
//     merek: 'Pajero',
//     pintu: 4,
//     lokasi: 'Saung'
// },
// {
//     merek: 'jazz',
//     pintu: 2,
//     lokasi: 'Warpel'
// },
// {
//     merek: 'Fortuner',
//     pintu:  4,
//     lokasi: 'Gatot'
// },
// {
//     merek: 'Mobilio',
//     pintu:  4,
//     lokasi: 'kuning'
// }

// ];

// let b = parseInt(prompt("Jumlah Pintu: "));
// const merekpintu = merek.filter((merek) => merek.pintu === b);
// console.log(merekpintu);
// document.write(merekpintu);



var mobil = [
    {
        merek: `toyota`,
        nama: `sedan`,
        pintu: 3
    },
    
    {
        merek: `nissan`,
        nama: `livina`,
        pintu: 2
    },
    {
        merek: `bmw`,
        nama: `sedan`,
        pintu: 2
    },
    {
        merek: `Ferrari`,
        nama: `sport`,
        pintu: 2
    },
    
    ];
    
    let b = parseInt(prompt("Jumlah Pintu: "));
    const mobilpintu = mobil.filter((mobil) => mobil.pintu === b);
    console.log(mobilpintu);
    document.write(mobilpintu);