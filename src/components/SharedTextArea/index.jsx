import "./styles.css";


export function SharedTextArea({handleSaveText, value}) {

    function autoSize(event) {
        const textArea = event.target;

        textArea.style.cssText = 'height:auto;'
        textArea.style.cssText = 'height:' + (textArea.scrollHeight) + 'px';
    }

    return (
        <textarea onInput={autoSize}
            placeholder="Add something"
            rows={1}
            onChange={handleSaveText}
            value={value}>
        </textarea>
    )
}