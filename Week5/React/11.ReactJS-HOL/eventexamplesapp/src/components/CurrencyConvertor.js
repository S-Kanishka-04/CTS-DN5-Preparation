import React, { useState } from "react";

function CurrencyConvertor() {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const euro = amount / 90;

        setCurrency(euro.toFixed(2));

        alert("Converted Successfully");
    };

    return (
        <div>

            <h1 style={{ color: "green" }}>
                Currency Convertor!!!
            </h1>

            <form onSubmit={handleSubmit}>

                <label>Amount</label>

                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <br /><br />

                <label>Currency</label>

                <input
                    type="text"
                    value={currency}
                    readOnly
                />

                <br /><br />

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>
    );

}

export default CurrencyConvertor;