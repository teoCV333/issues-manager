import './TopBar.css';
import { CurrentDate } from './CurrentDate';
import { UserName } from "./UserName";
import { ButtonSession } from "./ButtonSession";

function TopBar() {
    return (
      <div class="top-bar">
        <div className="left-section">
          <CurrentDate />
        </div>
        <div className="right-section">
          <UserName />
          <ButtonSession />
        </div>
      </div>
    );
}

export { TopBar };