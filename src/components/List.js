function List({ items }) {
    return (
        <ul>
            {items.map((item) => (
                <li key= { item.field } >
                    <span className='ItemField'>{item.field}: </span>
                    <span className='ItemValue'>{item.value}</span>
                </li >
             ))
}
        </ul>
    );
}

export default List;