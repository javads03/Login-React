import "./IconButton.css";
import { useNavigate } from "react-router-dom";

export default function IconButton({
  tag,
  navPath,
  imagePath,
}: {
  tag: string;
  navPath: string;
  imagePath: string;
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="create">
        <div className="circle">
          <img
            src={imagePath}
            onClick={() => {
              navigate(navPath, {});
            }}
          />
        </div>
        <div className="tag">{tag}</div>
      </div>
    </>
  );
}
