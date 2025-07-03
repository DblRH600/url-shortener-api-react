// Stats Card Component

function StatsCard ({ image, alt, title, description, className}) {

    return (
        <div className={`stats-card | ${className}`}>
            <div className="img">
                <img src={image} alt={alt} />
            </div>

            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default StatsCard