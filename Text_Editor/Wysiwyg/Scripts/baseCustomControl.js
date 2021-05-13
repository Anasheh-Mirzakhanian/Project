class BaseCustomControl {
    constructor(options) {
        this.options = {
            element: null,
            container: document.body,
            attrs: null,
            cap: '',
            event: '',
            function: null,
            types: null
        };

        Object.assign(this.options, options);

        this.element = document.createElement(this.options.element.name ? this.options.element.name : this.options.element);
        this.container = this.options.container;

        this.container instanceof HTMLElement && this.container.append(this.element);
        this.container.element instanceof HTMLElement && this.container.element.append(this.element);

        this.options.attrs && Reflect.ownKeys(this.options.attrs).forEach(attr =>
            this.element.setAttribute(attr, this.options.attrs[attr])
        );

        this.options.cap && (this.element.innerText = this.options.cap);

        this.options.event && this.options.functor && this.element.addEventListener(this.options.event, this.options.functor);

        if (this.options.types) {
            for (let type of this.options.types) {
                this[type.name[0].toLowerCase() + type.name.slice(1)] = new type(this);
            }
        }
    }
}