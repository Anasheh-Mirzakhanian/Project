class BoldButton extends ToolButton {
    constructor(container) {
        super({
            element: BoldButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-bold',
                title: 'Bold (Ctrl+B)\nMake your text bold.',
                id: 'boldBtn'
            },
            command: 'bold'
        })
    }
}