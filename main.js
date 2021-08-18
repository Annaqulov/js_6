let users = {

}
for (let i = 0; i < 5; i++) {
    var user1 = prompt(`ismingizni kiriting?`)
    var age1 = +prompt(`yoshingizni kiriting?`)
    var reading = prompt(`Qayerda o'qiysiz?`)
    var province = prompt(`Qaysi viloyatda to'g'ilgansiz`)
    users[i + 1] ={
        name: user1,
        age: age1,
        read: reading,
        provinc: province
    }
}
for (const key in users) {
     //Annaqulov Mamadiyor//
    console.log(`Foydalanvchi: ${key}`);
    console.log(`Ismi: ${users[key].name}`);
    console.log(`Yoshi: ${users[key].age} da`);
    console.log(`O'qish joyi: ${users[key].read}`);
    console.log(`To'gilgan viloyati: ${users[key].provinc}`);
}

function cardObj() {
    let rand = randomNumbers(1, 2)
    const priceList = {
        1: {
            'Lavash ': {
                info: 'big cheese',
                price: 15000
            },
            'Hot-dog ': {
                info: "mini",
                price: 15000
            },
            'Cola ': {
                info: '1.5 L',
                price: 9000
            },
        },
        2: {
            'Sushi ': {
                info: 'max-roll',
                price: 32000
            },
            'Soya ': {
                info: '200ml',
                price: 5000
            },
        }
    }

    return priceList[rand]
}
obj = cardObj()
let order = ''
let sum = 0
const delivery = 9000 
for (const key in obj) {
    for (const keys in obj[key])
        if (keys == 'info') {
            order += key + obj[key][keys] + ", "
        } else if (keys == 'price') {
        sum += obj[key][keys]
    }
}
console.log(`Sizning buyurtmangiz: ${order}| yetkazib berish xizmati bilan bo'lgan narx ${sum+delivery} yetkzib narxi (${delivery}) sum`);

function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}