var jp = require('jsonpath');

 //192.168.1.36
const Home = () => {
   const sampleData = "";

    const handleFormatClick = () => {
        const outputArea = document.querySelector(".large-area--output");
        const formatted = JSON.stringify(JSON.parse(outputArea.value), null, 4);
        outputArea.value = formatted;
    }

    const handleFormatClickForRequest = () => {
        const inputArea = document.querySelector(".large-area--input");
        const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4);
        inputArea.value = formatted;
    }


    const handleEvaluateClick = () => {
        const inputArea = document.querySelector(".large-area--input");
        const inputField = document.querySelector(".longInput");
        const outputArea = document.querySelector(".large-area--output");

        const formatted = JSON.parse(inputArea.value);
        const query = inputField.value;

        var evaluatedValue = jp.query(formatted, query);
        const result = JSON.stringify(evaluatedValue);
        if (result.length === 2 && result.includes("[]")) {
            outputArea.value = "No Response. Please check your query";
        } else {
            outputArea.value = result;
            handleFormatClick();
        }
    }

    return (
        <div class="container">
            <textarea className="large-area large-area--input" placeholder={sampleData}></textarea>
            <textarea readOnly class="large-area large-area--output" placeholder="Your JSON will appear here..."></textarea>
            <input id="inputfield" className="longInput" placeholder="$.phoneNumbers[:1].type"></input>
            <div class="controls"> <button onClick={handleEvaluateClick} className="controls__button controls__button--evaluate">Evaluate Your Query</button></div>
            <div class="controls"> <button onClick={handleFormatClickForRequest} className="controls__button controls__button--format">Format Your Request</button></div>
        </div>
    );
}

export default Home;