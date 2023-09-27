const NewsListItem = ({item}) => {
    return (
        <div>
            <h3><strong>{item.title}</strong> </h3>
            <div>{item.feed} </div>
        </div>
    )
}

export default NewsListItem;