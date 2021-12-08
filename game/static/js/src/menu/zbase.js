class SlzGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="slz-game-menu">
    <div class="slz-game-menu-field">
        <div class="slz-game-menu-field-item slz-game-menu-field-item-single-mode">
            单人模式
        </div>
        <br>
        <div class="slz-game-menu-field-item slz-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class="slz-game-menu-field-item slz-game-menu-field-item-settings">
            设置
        </div>
    </div>
</div>
`);
        this.root.$slz_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.slz-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.slz-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.slz-game-menu-field-item-settings');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi_mode.click(function(){
            console.log("click multi mode");
        });
        this.$settings.click(function(){
            console.log("click settings");
        });
    }

    show() {    // 显示menu界面
        this.$menu.show();
    }

    hide() {    // 关闭menu界面
        this.$menu.hide();
    }

}
