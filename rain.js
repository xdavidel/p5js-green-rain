function Rain() {
    this.x = random(0, width);
    this.y = random(-500, -100);
    this.z = random(0, 20);

    this.dropSpeed = map(this.z, 0, 20, 4, 10);
    this.len = map(this.z, 0, 20, 10, 20);

    this.update = () => {
        this.y += this.dropSpeed;

        if (this.y > height) {
            this.y = random(-200, -100);
            this.dropSpeed = map(this.z, 0, 20, 4, 10);
        }
    }

    this.show = () => {
        var thickness = map(this.z, 0, 20, 0.3, 1.5);
        strokeWeight(thickness);
        stroke(0, 204, 10);
        line(this.x, this.y, this.x, this.y + this.len);
    }
}