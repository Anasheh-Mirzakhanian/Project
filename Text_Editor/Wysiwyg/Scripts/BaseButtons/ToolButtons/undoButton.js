class UndoButton extends ToolButton {
    constructor(container) {
        super({
            element: UndoButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-undo',
                title: 'Undo',
                id: 'undoBtn'
            },
            command: 'undo'
        })
    }
}   