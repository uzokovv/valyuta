const dollar = document.querySelector('select');
const inp = document.querySelector('input');
const p = document.querySelector('.natija')
const button = document.querySelector('button')
// console.log(dollar.value, inp);

async function api() {
    await fetch('https://cbu.uz/uz/arkhiv-kursov-valyut/json/')
        .then(response => response.json())
        .then(data =>
            data.map(item => {
                dollar.innerHTML +=
            `
                <option value="${item.Ccy}">${item.Ccy}</option>
            `
            settin(item.Ccy, item.Rate)
        })
    )
}

api()
function settin(sumName, narx) {
    button.addEventListener('click', () => {
        let summa = dollar.value
    
        if (summa == sumName) {
            let result = (inp.value * narx).toFixed(2);
            p.textContent = `${result} sum`;
        }
    });
}


