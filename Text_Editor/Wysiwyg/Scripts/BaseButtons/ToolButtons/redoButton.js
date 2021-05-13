class RedoButton extends ToolButton {
    constructor(container) {
        super({
            element: RedoButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-redo',
                title: 'Redo',
                id: 'redoBtn'
            },
            command: 'redo'
        })
    }
}   