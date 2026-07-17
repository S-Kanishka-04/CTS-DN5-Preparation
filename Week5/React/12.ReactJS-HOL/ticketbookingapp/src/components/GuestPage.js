function GuestPage() {
    return (
        <div>
            <h2>Welcome Guest</h2>

            <h3>Flight Details</h3>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Time</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>AI202</td>
                        <td>Chennai</td>
                        <td>Delhi</td>
                        <td>10:30 AM</td>
                    </tr>

                    <tr>
                        <td>6E450</td>
                        <td>Chennai</td>
                        <td>Mumbai</td>
                        <td>2:00 PM</td>
                    </tr>
                </tbody>
            </table>

            <br />

            <p>Please login to book your ticket.</p>

        </div>
    );
}

export default GuestPage;