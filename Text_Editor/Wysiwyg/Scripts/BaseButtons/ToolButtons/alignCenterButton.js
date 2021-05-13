class AlignCenterButton extends ToolButton {
    constructor(container) {
        super({
            element: AlignCenterButton,
            container: container,
            attrs: {
                class: 'button s-size fa fa-align-center',
                title: 'Center (ctrl+E)\nCenter your content on the page. \n\nCenter alignment gives documents \na formal apperance and is often \nused for cover pages, quotes, and \nsometimes headings.',
                id: 'justifyCenterBtn'
            },
            command: 'justifyCenter'
        })
    }
}   