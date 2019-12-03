import { Component } from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        if (localStorage.getItem('visited')) {
            this.hide();
        }
        const $elementButton = this.$element.querySelector('.js-header-start')
        $elementButton.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true));
    this.hide();
}