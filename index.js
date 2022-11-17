

const myButton = document.getElementById('btn').addEventListener('click', function () {
    // console.log('btn is clicked');
});

function myBtn() {
    let secTime = document.getElementById('seconds');
    let minTime = document.getElementById('minutes');
    let hrsTime = document.getElementById('hours');

    let second = 0;
    let min = 0;
    let hrs = 0;
    setInterval(() => {
        if (second == 5) {
            second = 0;
        }
        second++;
        secTime.innerHTML = second;

        if (second == 5) {
            min++
        }
        minTime.innerHTML = min;

        if (min == 5) {
            min = 0;
            hrs++;
        }
        hrsTime.innerHTML = hrs;

    }, 1000)
}


