class SuperScriptButton extends ToolButton {
    constructor(container) {
        super({
            element: SuperScriptButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-superscript',
                title: 'Superscript (Ctrl+Shift++) \nType very small letters just above \nthe line of text.',
                id: 'superscriptBtn'
            },
            command: 'superscript'
        })
    }
}   