class HighlightColorButton extends ToolButton {
    constructor(container) {
        super({
            element: HighlightColorButton,
            container: container,
            attrs: {
                class: 'button s-size fas fa-highlighter',
                title: 'Text Highlight Color \nMake your text pop by highlighting\nit in a bright color.',
                id: 'hiliteColorBtn'
            },
            command: 'hiliteColor'
        });

        this.element.addEventListener('mousedown', () => { this.ChooseColor(this.container.highlightColorInputButton.element);})
    }
}   

HighlightColorButton.prototype.ChooseColor = (input) => {
    input.click();

    input.addEventListener('change', function () {
        var chosenColor = input.value;
        document.execCommand('hiliteColor', false, chosenColor);
    })
}