class SlzGame {
    constructor(id) {
        this.id = id;
        this.$slz_game = $('#' + id);
        this.menu = new SlzGameMenu(this);
        this.playground = new SlzGamePlayground(this);

        this.start();
    }

    start() {
    }
}
