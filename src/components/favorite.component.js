import { Component } from '../core/component';
import { apiService } from '../services/api.service';
import { renderPost } from '../templates/post.template';

export class FavoriteComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$element.addEventListener('click', linkClickHandler.bind(this));
    }

    onShow() {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        const html = renderList(favorites);
        this.$element.insertAdjacentHTML('afterbegin', html);
    }

    onHide(){
        this.$element.innerHTML = '';
    }
}

async function linkClickHandler() {
    event.preventDefault();

    if(event.target.classList.contains('js-link')) {
        const postId = event.target.dataset.id;
        this.$element.innerHTML = '';
        this.loader.show();
        const post = await apiService.fetchPostById(postId);
        this.loader.hide();
        this.$element.insertAdjacentHTML('afterbegin', renderPost(post, {withButton: false}));
    }
}

function renderList(list = []) {
    if (list && list.length) {
        return `
            <ul>
                ${list.map(li => `<li><a href="#" class="js-link" data-id="${li.id}">${li.title}</a></li>`).join(' ')}
            </ul>
        `
    }

    return `<p class="center">Вы пока ничего не добавили</p>`
}