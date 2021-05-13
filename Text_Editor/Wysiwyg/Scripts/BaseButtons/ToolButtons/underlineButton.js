class UnderlineButton extends ToolButton {
    constructor(container) {
        super({
            element: UnderlineButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-underline',
                title: 'Underline (Ctrl+U) \nUnderline your text.',
                id: 'underlineBtn'
            },
            command: 'underline'
        })
    }
}