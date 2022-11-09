const SingleCard = ({data}) => {
    // console.log(data)
    let d =data.recipe;
    return (
        <div className="card">
            <div className="imageContainer">
                <img src={d.image} alt="reciepe_poster" />
            </div>
            <p>{d.label}</p>
        </div>
    )
}

export default SingleCard;