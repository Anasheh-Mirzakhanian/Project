class AlignLeftButton extends ToolButton {
    constructor(container) {
        super({
            element: AlignLeftButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-align-left',
                title: 'Align Left (ctrl+L) \nAlign content with the left \nmargin. \n\nLeft alignment is commonly used \nfor body text and makes the \ndocument easier to read.',
                id: 'justifyLeftBtn'
            },
            command: 'justifyLeft'
        })
    }
}   