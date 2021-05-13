class ItalicButton extends ToolButton {
    constructor(container) {
        super({
            element: ItalicButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-italic',
                title: 'Italic (Ctrl+I) \nItalicize your text.',
                id: 'italicBtn'
            },
            command: 'italic'
        })
    }
}