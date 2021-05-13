class FontColorInputButton extends ToolButton {
    constructor(container) {
        super({
            element: 'Input',
            container: container,
            attrs: {
                class: 'button s-size color-input',
                type: 'color',
                id: 'fontColorInputBtn',
                value: '#ff0000'
            }
        })
    }
}   