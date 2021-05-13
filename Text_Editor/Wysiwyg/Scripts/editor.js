class Editor extends BaseCustomControl {
    constructor(container) {
        super({
            element: Editor,
            container: container,
            attrs: {
                contentEditable: true,
                id: 'editor'
            }
        })
    }
}