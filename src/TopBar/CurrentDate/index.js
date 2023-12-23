import './CurrentDate.css';

function CurrentDate() {
    const date = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return <span id="current-date">{formattedDate}</span>;
}

export { CurrentDate };