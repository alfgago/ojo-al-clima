
export const Card = ({
  title,
  suffix,
  description,
  delay
}: any) => {
  return (
    <div className="card-container" data-aos="fade-up" data-aos-delay={delay}>
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
