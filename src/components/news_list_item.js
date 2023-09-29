const NewsListItem = ({item}) => {
    return (
        <div className="newslist">
            <h3><strong>{item.title}</strong> </h3>
            <div>{item.feed} </div>
        </div>
    )
}

export default NewsListItem;