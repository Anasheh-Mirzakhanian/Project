class Wysiwyg extends BaseCustomControl {
    constructor({ container } = { container : document.body }) {
        super({
                element: Wysiwyg,
                container: container,
                types: [ToolBar, Editor]
            })
    }
}