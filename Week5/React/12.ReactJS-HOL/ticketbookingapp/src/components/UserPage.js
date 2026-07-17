function UserPage() {
    return (
        <div>

            <h2>Welcome User</h2>

            <h3>Ticket Booking</h3>

            <form>

                <label>Name :</label>

                <input type="text" />

                <br /><br />

                <label>Flight :</label>

                <input type="text" />

                <br /><br />

                <button>Book Ticket</button>

            </form>

        </div>
    );
}

export default UserPage;