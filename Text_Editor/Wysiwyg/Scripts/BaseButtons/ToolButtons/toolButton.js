class ToolButton extends BaseButton {
    constructor({ element, container, attrs, command }) {
        super({
            element: element,
            container: container,
            attrs: attrs
        });

        this.element.addEventListener('mousedown', (e) => {
            e.preventDefault();
            this.container.container.editor.element.focus();
            document.execCommand(command);

            this.ActiveBtn();
        });

        document.addEventListener('selectionchange', () => {
            this.ActiveBtn();
        });
    }
}

ToolButton.prototype.ActiveBtn = () => {
    let buttonArr = ["bold", "italic", "underline", "strikethrough", "subscript", "superscript", "justifyLeft", "justifyCenter", "justifyRight"];

    for (let i = 0; i < buttonArr.length; i++) {
        let buttonType = buttonArr[i];
        let btnId = buttonType + 'Btn';

        document.queryCommandState(buttonType) ? document.getElementById(btnId).classList.add('on') : document.getElementById(btnId) && document.getElementById(btnId).classList.remove('on');
    }
}