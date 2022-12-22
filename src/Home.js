var jp = require('jsonpath');

const Home = () => {

    const inputArea = document.querySelector(".large-area--input");
    const outputArea = document.querySelector(".large-area--output");
    const inputField = document.querySelector(".longInput");

    const handleFormatClick = () => {
        const formatted = JSON.stringify(JSON.parse(outputArea.value), null, 4);
        outputArea.value = formatted;
    }

    const handleEvaluateClick = () => {
        const formatted = JSON.parse(inputArea.value);
        console.log("json is :" + formatted);
        const query = inputField.value;
        console.log("query is:" + query);

        var evaluatedValue =  jp.query(formatted, query);
        console.log(JSON.stringify(evaluatedValue));
        outputArea.value = JSON.stringify(evaluatedValue);
    }

    return (
        <div class="container">
            <textarea class="large-area large-area--input" placeholder="Enter your JSON here..."></textarea>
            <textarea readonly class="large-area large-area--output" placeholder="Your JSON will appear here..."></textarea>
            <input id="inputfield" class="longInput" placeholder="$.phoneNumbers[:1].type"></input>
            <div class="controls"> <button onClick={handleEvaluateClick} class="controls__button controls__button--evaluate">Evaluate Your Query</button></div>
            <div class="controls"> <button onClick={handleFormatClick} class="controls__button controls__button--format">Format Your Response</button></div>
        </div>
    );
}

export default Home;