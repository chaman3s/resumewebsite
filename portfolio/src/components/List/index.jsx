export default function List({items, style}) {
    return(
        <ul className={style}>
                {items.map((ele,index)=>(
                    <li key={index} ><a id={`#${ele.id}`}>{ele.item}</a></li>
                
                ))}
        </ul>
    )
};
