import style from "./tags.module.scss";

const Tags = ({ text, textColor, boxColor, className, padding }) => {
  return (
    <div className={`${style.tags} ${className}`}>
      <div
        className={`${style.tagsText} `}
        style={{
          backgroundColor: boxColor && boxColor,
          padding: padding && padding,
        }}
      >
        <p style={{ color: textColor && textColor }}>{text}</p>
      </div>
    </div>
  );
};

export default Tags;
