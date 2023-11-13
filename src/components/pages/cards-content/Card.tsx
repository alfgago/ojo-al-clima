
export const Card = ({
  title,
  suffix,
  description
}: any) => {
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <h4>
          {title}
          <span>
            {suffix}
          </span>
        </h4>
        <div className="card-description" dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  )
}
