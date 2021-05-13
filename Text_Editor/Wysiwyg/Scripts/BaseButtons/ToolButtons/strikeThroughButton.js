class StrikeThroughButton extends ToolButton {
    constructor(container) {
        super({
            element: StrikeThroughButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-strikethrough',
                title: 'Strikethrough \nCross something out by drawing a\nline through it.',
                id: 'strikethroughBtn'
            },
            command: 'strikethrough'
        })
    }
}   