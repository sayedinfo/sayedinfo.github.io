
export const SkillList = ({ data }) => {
  return (
    <div className="flex items-center flex-wrap gap-5">
      {data.map((item) => (
        <div className={`${item.focusable ? "focused-skill skill-item" : "skill-item"}`}
          key={item.name}
        >
          {item.focusable ? (
            <div className="skill-item-text">{item.name}</div>
          ) : (
            <span>{item.name}</span>
          )}
        </div>
      ))}
    </div>
  )
}
