function Slide(props) {
    return (
      <div className="slide-container" data-cy="slide">
        <h3 data-cy="title">{props.title}</h3>
        <p data-cy="description">{props.description}</p>
      </div>
    )
  }
  
  export default Slide;