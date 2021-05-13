class HighlightColorInputButton extends ToolButton {
    constructor(container) {
        super({
            element: 'Input',
            container: container,
            attrs: {
                class: 'button s-size color-input',
                type: 'color',
                id: 'highlightColorInputBtn',
                value: '#ffe600'
            }
        })
    }
}   