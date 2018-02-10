var rain = [];

function setup() {
    createCanvas(300, 300);
    for (var i = 0; i < 300; i++) {
        rain.push(new Rain());
    }
}

function draw() {
    background(51);

    for (var i in rain) {
        rain[i].update();
        rain[i].show();
    }
}