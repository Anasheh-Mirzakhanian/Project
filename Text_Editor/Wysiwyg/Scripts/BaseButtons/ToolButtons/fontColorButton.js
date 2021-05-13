class FontColorButton extends ToolButton {
    constructor(container) {
        super({
            element: FontColorButton,
            container: container,
            attrs: {
                class: 'button s-size fas fa-eye-dropper',
                title: 'Font Color\nChange the color of your text.',
                id: 'fontColorBtn'
            },
            command: 'foreColor'
        });

        this.element.addEventListener('mousedown', () => { this.ChooseColor(this.container.fontColorInputButton.element); })
    }
}

FontColorButton.prototype.ChooseColor = (input) => {
    input.click();

    input.addEventListener('change', function () {
        var chosenColor = input.value;
        document.execCommand('foreColor', false, chosenColor);
    })
}