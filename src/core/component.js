export class Component {
    constructor(id) {
        this.$element = document.getElementById(id)
        this.init()
    }

    init() {

    }

    onHide() {

    }

    onShow() {

    }

    hide() {
        this.$element.classList.add('hide');
        this.onHide();
    }

    show() {
        this.$element.classList.remove('hide')
        this.onShow();
    }
}