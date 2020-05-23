console.log('hello')
const divScreen = document.querySelector("#screen");
const btnCreateNumber = document.querySelector("#creatNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");



let n = 0;
let queue = [];
btnCreateNumber.onclick = () => {
    n += 1;
    //queue.push(n);
    queue.push.call(queue, n); //压进去
    spanNewNumber.innerText = n;
    spanQueue.innerText = JSON.stringify(queue);
};


btnCallNumber.onclick = () => {
    if (queue.length === 0) {
        alert("没人喊个啥");
        return;

    }

    //const m = queue.shift();
    const m = queue.shift.call(queue); //挤出来
    divScreen.innerText = `请${m}号就餐`;
    spanQueue.innerText = JSON.stringify(queue); //将字符串装换为数组
};