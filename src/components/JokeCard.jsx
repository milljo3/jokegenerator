function JokeCard({joke}) {
    return (
        <div className="joke-card">
            <p className="setup">{joke.setup}</p>
            <p className="punchline">{joke.punchline}</p>
        </div>
    )
}

export default JokeCard;