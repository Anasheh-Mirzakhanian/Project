class ToolBar extends BaseBar {
    constructor(container) {
        super({
            element: ToolBar,
            container: container,
            types: [
                BoldButton, ItalicButton, UnderlineButton, StrikeThroughButton,
                SubScriptButton, SuperScriptButton,
                FontColorInputButton, FontColorButton, HighlightColorInputButton, HighlightColorButton,
                AlignLeftButton, AlignCenterButton, AlignRightButton,
                RedoButton, UndoButton
            ]
        })
    }
}