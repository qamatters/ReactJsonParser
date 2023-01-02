var jp = require('jsonpath');

const Home = () => {
    const handleFormatClick = () => {
        const outputArea = document.querySelector(".large-area--output");
        const formatted = JSON.stringify(JSON.parse(outputArea.value), null, 4);
        outputArea.value = formatted;
    }

    const handleEvaluateClick = () => {
        const inputArea = document.querySelector(".large-area--input");
        const inputField = document.querySelector(".longInput");
        const outputArea = document.querySelector(".large-area--output");
    
        const formatted = JSON.parse(inputArea.value);
        // console.log("json is :" + formatted);
        const query = inputField.value;
        // console.log("query is:" + query);

        var evaluatedValue =  jp.query(formatted, query);
        const result = JSON.stringify(evaluatedValue);
        outputArea.value = result;
    }

    return (
        <div class="container">
            <textarea className="large-area large-area--input" placeholder="Enter your JSON here..."></textarea>
            <textarea readOnly class="large-area large-area--output" placeholder="Your JSON will appear here..."></textarea>
            <input id="inputfield" className="longInput" placeholder="$.phoneNumbers[:1].type"></input>
            <div class="controls"> <button onClick={handleEvaluateClick} className="controls__button controls__button--evaluate">Evaluate Your Query</button></div>
            <div class="controls"> <button onClick={handleFormatClick} className="controls__button controls__button--format">Format Your Response</button></div>
        </div>
    );
}

export default Home;