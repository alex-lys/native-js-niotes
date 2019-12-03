import { Component } from '../core/component';
import { Form } from '../core/form';
import { Validator } from '../core/validator';
import { apiService } from '../services/api.service';

export class CreateComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$element.addEventListener('submit', submitHandler.bind(this));
        this.form = new Form(this.$element, {
            title: [Validator.required],
            fulltext: [Validator.required, Validator.minLength(10)]
        });
    }
}

async function submitHandler(event) {
    event.preventDefault();

    if (this.form.isValid()) {
        const formData = {
            type: this.$element.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.value()
        }
        
        await apiService.createPost(formData);

        this.form.clear();
        console.log(formData);
    }
}