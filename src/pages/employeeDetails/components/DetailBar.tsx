import IconButton from "../../../components/button/IconButton";
import './DetailBar.css'

export default function DetailBar({path}: {path: string}) {
  return (
    <>
      <div className="detailsBar">
        <div>
          <h4>Employee Details</h4>
        </div>
        <div className="detailsBarEndItems">
          <IconButton
            tag="Edit"
            navPath={path}
            imagePath="/src/assets/edit.png"
          />
        </div>
      </div>
    </>
  );
}
