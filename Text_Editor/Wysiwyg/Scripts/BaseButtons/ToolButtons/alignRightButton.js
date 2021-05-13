class AlignRightButton extends ToolButton {
    constructor(container) {
        super({
            element: AlignRightButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-align-right',
                title: 'Align Right (ctrl+R) \nAlign content with the right margin. \n\nRight alignment is used for small \nsections of content, such as text in a \nheader or footer.',
                id: 'justifyRightBtn'
            },
            command: 'justifyRight'
        })
    }
}   