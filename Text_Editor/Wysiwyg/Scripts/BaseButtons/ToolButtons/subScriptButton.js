class SubScriptButton extends ToolButton {
    constructor(container) {
        super({
            element: SubScriptButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-subscript',
                title: 'Subscript (Ctrl+=) \nType very small letters just below \nthe line of text.',
                id: 'subscriptBtn'
            },
            command: 'subscript'
        })
    }
}   