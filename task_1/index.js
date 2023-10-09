import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

const decodeArray = (array, cipher) => {
    const ans = [];
    const uniq = [];
    array.forEach(object => {
        let tempObj = {...object};
        for (let [key, val] of Object.entries(object)) {
            if (cipher[val] || cipher[val] === '') {
                tempObj[key] = cipher[val]
            } else {
                if (/Id$/.test(key)) {
                    uniq.push(key)
                }
            }
        }
        ans.push(tempObj);
    })

    return ans.concat([...new Set(uniq)]);
}
const decoded = decodeArray(encoded, translations)


console.log(decoded)
//Возможно я не так понял задание в части уникальных ID...выдает четыре поля..по трем полям вопросов нет - их значения отсутствуют в объекте translations,
// а вот поле platformId часто имеет значение 0, но есть объект, где у этого поля значение, которого нет в translations - 145868..поэтому код его отлавливает и выводит как уникальное...