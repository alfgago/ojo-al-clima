
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
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}
