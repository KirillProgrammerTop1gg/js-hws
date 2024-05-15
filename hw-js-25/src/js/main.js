// task 1
import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import { alert, notice, info, success, error } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
 
defaultModules.set(PNotifyMobile, {});
const infoEl = document.querySelector('#key');
const newButEl = document.querySelector('#new_but');
const keys = ['6', 'b', 'j', 'i', 'd', '9', '\\', 'Tab', '`', 'Backspace'];
let currentKeyIndex = 0;
const showKey = () => infoEl.innerHTML = `Please press: ${keys[currentKeyIndex]}`;

showKey();
document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key == keys[currentKeyIndex]) {
        success({
            text: "You press correct key!!!",
            delay: 500
        });
        currentKeyIndex++;
        if (currentKeyIndex >= 10) {
            success({
                text: "You win!!!!!!!",
                delay: 1000
            });
            
        }
        else {
            showKey();
        }
    }
    else {
        error({
            text: "You press not correct key:(",
            delay: 500
        });
        showKey();
    }
});

newButEl.addEventListener('click', () => {
    currentKeyIndex = 0;
    info({
        text: "New game started",
        delay: 1000
    });
    showKey()
});
// task 2
import Chart from 'chart.js/auto';
const ctx = document.querySelector('#sales-chart');
const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
const salesChart = new Chart(ctx, {
    type: 'line',
    data: chartData,
});
