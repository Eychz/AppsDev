
const SkillBar = ({ skill, percentage, color = '#4caf50' }) => {
  return (
    <div className="skill-box">
      <span className="title">{skill}</span>
      <div className="skill-bar">
        <span
          className="skill-fill"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        >
          <span className="tooltip">{percentage}%</span>
        </span>
      </div>
    </div>
  );
};

export default SkillBar;
