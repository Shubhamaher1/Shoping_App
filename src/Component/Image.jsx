function Image(props) {
  // console.log(props.ele);
  return (
    <div className="itm">
      <img src={props.ele.image}></img>
      <div className="title">{props.ele.title}</div>
      <div className="flex-contsiner">
        <div className="price-block">
          <div className="title">price: {props.ele.price}</div>
          <div className="title">Catagery :{props.ele.category}</div>
        </div>
        <a href={props.ele.image} className="view-btn" target="_blank">
          View More
        </a>
      </div>
    </div>
  );
}
export default Image;
