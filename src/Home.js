var jp = require('jsonpath');

//192.168.1.36
const Home = () => {

    const sampleData = 
        {
            "store": {
                "book": [
                    {
                        "category": "reference",
                        "author": "Nigel Rees",
                        "title": "Sayings of the Century",
                        "price": 8.95
                    }, {
                        "category": "fiction",
                        "author": "Evelyn Waugh",
                        "title": "Sword of Honour",
                        "price": 12.99
                    }, {
                        "category": "fiction",
                        "author": "Herman Melville",
                        "title": "Moby Dick",
                        "isbn": "0-553-21311-3",
                        "price": 8.99
                    }, {
                        "category": "fiction",
                        "author": "J. R. R. Tolkien",
                        "title": "The Lord of the Rings",
                        "isbn": "0-395-19395-8",
                        "price": 22.99
                    }
                ],
                "bicycle": {
                    "color": "red",
                    "price": 19.95
                }
            }
        }
    ;

    const sampleDataValue = JSON.stringify(sampleData, null, 4);

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
        console.log("evaluated value:" + evaluatedValue);
        const result = JSON.stringify(evaluatedValue);

        console.log("result :" + result);

        if (result.length === 2 && result.includes("[]")) {
            outputArea.value = "No Response. Please check your query";
        } else {
            outputArea.value = result;
            handleFormatClick();
        }
    }

    return (
        <div class="container">
            <textarea className="large-area large-area--input">{sampleDataValue}</textarea>
            <textarea readOnly class="large-area large-area--output" placeholder="Your JSON will appear here..."></textarea>
            <table>
                <thead>
                    <tr>
                        <th align="left">JsonPath</th>
                        <th align="left">Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left">$.store.book[*].author</td>
                        <td align="left">The authors of all books</td>
                    </tr>
                    <tr>
                        <td align="left">$..author</td>
                        <td align="left">All authors</td>
                    </tr>
                    <tr>
                        <td align="left">$.store.*</td>
                        <td align="left">All things, both books and bicycles</td>
                    </tr>
                    <tr>
                        <td align="left">$.store..price</td>
                        <td align="left">The price of everything</td>
                    </tr>
                    <tr>
                        <td align="left">$..book[2]</td>
                        <td align="left">The third book</td>
                    </tr>
                    <tr>
                        <td align="left">$..book[(@.length-1)]</td>
                        <td align="left">The last book via script subscript</td>
                    </tr>
                    <tr>
                        <td align="left">$..book[-1:]</td>
                        <td align="left">The last book via slice</td>
                    </tr>
                    <tr>
                        <td align="left">$..book[:2]</td>
                        <td align="left">All books from index 0 (inclusive) until index 2 (exclusive)</td>
                    </tr>
                    <tr>
                        <td align="left">$..book[1:2]</td>
                        <td align="left">All books from index 1 (inclusive) until index 2 (exclusive)</td>
                    </tr>
                    <tr>
                        <td align="left">$..book[-2:]</td>
                        <td align="left">Last two books</td>
                    </tr>
                    <tr>
                        <td align="left">$..book[2:]</td>
                        <td align="left">All books from index 2 (inclusive) to last</td>
                    </tr>
                    <tr>
                        <td align="left">$..book[?(@.isbn)]</td>
                        <td align="left">All books with an ISBN number</td>
                    </tr>
                    <tr>
                        <td align="left">$.store.book[?(@.price &lt; 10)]</td>
                        <td align="left">All books in store cheaper than 10</td>
                    </tr>
                    <tr>
                        <td align="left">$..book[?(@.price==8.95)]</td>
                        <td align="left">Filter all books that cost 8.95</td>
                    </tr>
                    <tr>
                    <td align="left"><code>$..book[?(@.price&lt;30 &amp;&amp; @.category=="fiction")]</code> </td>
                        <td align="left">Filter all fiction books cheaper than 30</td>
                    </tr>
                    <tr>
                        <td align="left">$..*</td>
                        <td align="left">Give me every thing</td>
                    </tr>
                    <tr>
                        <td align="left">$..book.length</td>
                        <td align="left">The number of books</td>
                    </tr>
                </tbody>
            </table>
            <input id="inputfield" className="longInput" placeholder="Enter your query here..."></input>
            <div class="controls"> <button onClick={handleEvaluateClick} className="controls__button controls__button--evaluate">Evaluate Your Query</button></div>
            <div class="controls"> <button onClick={handleFormatClickForRequest} className="controls__button controls__button--format">Format Your Request</button></div>

        </div>
    );
}

export default Home;