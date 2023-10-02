

const Timer = () => {
    const [time, setTime] = useState(0)
    return (
        <div>
            <div>{time}</div>
        </div>
    );
};

export { Timer };