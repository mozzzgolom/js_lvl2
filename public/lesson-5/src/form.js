class FeedBackForm {
    // _ininstanceName = ''

    constructor(instanceName) {
        this._ininstanceName = instanceName
        this.render()
    }

    validator(data, type) {
        console.log(type)
        switch (type) {
            case 'name':
                const Name = /^[a-zA-Zа-яА-Я]+$/gu
                if (Name.test(data)) {
                    console.log('Name is valid!');
                } else {
                    console.log('Имя должно содержать только буквы!')
                }
                break;
            case 'phone':
                const Phone = /^\+7\(\d\d\d\)\d\d\d-\d\d\d\d$/g
                if (Phone.test(data)) {
                    console.log('Phone is valid!');
                } else {
                    console.log('Телефон должен быть в формате +7(000)000-0000')
                }
                break;
            case 'email':
                const Email = /^\S+@\S+\.\S+$/g
                if (Email.test(data)) {
                    console.log('Email is valid!');
                } else {
                    console.log('Электронная почта должна быть в формате username@domain.com')
                }
                break;
        }
    }
    render() {
        const placeToRender = document.querySelector('.feedback')
        if (placeToRender) {
            const block = document.createElement('form')
            block.setAttribute('action', '#')
            block.innerHTML = `
            <input class="input_el" type=\"text\" placeholder="Введите имя" onchange=\"${this._ininstanceName}.validator(this.value, \'name\')\"><br>
            <input class="input_el" type=\"text\" placeholder="Введите номер телефона" onchange=\"${this._ininstanceName}.validator(this.value, \'phone\')\"><br>
            <input class="input_el" type=\"text\" placeholder="Введите Email" onchange=\"${this._ininstanceName}.validator(this.value, \'email\')\")><br>
            `
            // const btn = new Button('отправить', this.addToCart.bind(this))
            // btn.render(block)
            placeToRender.appendChild(block)
        }
    }
}

const feedBack = new FeedBackForm('feedBack')
