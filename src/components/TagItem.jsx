import { Icon } from "@iconify/react";

function TagItem({ label, value, onRemove }) {
  return (
    <div className="tag-item">
      <span>{label}</span>
      <span
        style={{ cursor: "pointer", marginLeft: 5 }}
        onClick={() => onRemove(value)}
      >
        <Icon icon="maki:cross" />
      </span>
    </div>
  );
}

export default TagItem;
