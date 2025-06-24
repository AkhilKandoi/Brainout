const add = document.getElementById('add')
const sub = document.getElementById('sub')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const main = document.getElementById('mainarea')



add.addEventListener('click', () => {
    let numbers = [];
    let total = 0;


    main.innerText = 'Add the following number:'
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const num = Math.floor(Math.random() * 90) + 10;
                numbers.push(num)
                total += num
                main.innerText = num
                if (i == 4) {
                    setTimeout(() => {
                        main.innerText = 'Enter your answer:'
                        createInput(total)
                    }, 1000)
                }

            }, i * 1000)
        }
    }, 2000)



})

sub.addEventListener('click', () => {
    let numbers = [];
    let total = 0;


    main.innerText = 'Subtract the following number:'
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const num = Math.floor(Math.random() * 90) + 10;
                numbers.push(num)
                total -= num
                main.innerText = num
                if (i == 4) {
                    setTimeout(() => {
                        main.innerText = 'Enter your answer:'
                        createInput(total)
                    }, 1000)
                }

            }, i * 1000)
        }
    }, 2000)
})

multiply.addEventListener('click', () => {
    let numbers = [];
    let total = 1;


    main.innerText = 'Multiply the following number:'
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const num = Math.floor(Math.random() * 10) + 1;
                numbers.push(num)
                total *= num
                main.innerText = num
                if (i == 4) {
                    setTimeout(() => {
                        main.innerText = 'Enter your answer:'
                        createInput(total)
                    }, 1000)
                }

            }, i * 1000)
        }
    }, 2000)
})

divide.addEventListener('click', () => {
    let numbers = [];

    main.innerText = 'divide the following number:'
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const num = Math.floor(Math.random() * 90) + 10;
                numbers.push(num)
                main.innerText = num
                if (i == 4) {
                    setTimeout(() => {
                        let total = numbers[0];
                        for (let j = 1; j < numbers.length; j++) {
                            total /= numbers[j];
                        }
                        main.innerText = 'Enter your answer:'
                        createInput(total)
                    }, 1000)
                }

            }, i * 1000)
        }
    }, 2000)
})

function createInput(total) {
    const input = document.createElement('input')
    input.type = 'number'
    input.placeholder = 'Enter your answer'
    input.style.marginRight = '10px';
    input.style.paddingLeft = '10px';
    input.style.height = '30px'
    input.style.borderRadius = '5px'

    const button = document.createElement('button');
    button.id = 'submitAnswer';
    button.innerText = 'Submit';
    button.style.height = '30px'
    button.style.borderRadius = '5px'
    button.addEventListener('click', () => {
        const userVal = parseInt(input.value, 10);
        if (userVal === total) {
            main.innerText = "✅ Correct!";
        } else {
            main.innerText = `❌ Wrong. Correct answer was ${total}`;
        }
    });

    main.appendChild(input)
    main.appendChild(button)

}