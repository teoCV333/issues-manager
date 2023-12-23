import { ButtonSession } from './ButtonSession';
import { CurrentDate } from './CurrentDate';
import './TopBar.css';
import { UserName } from './UserName';

function TopBar() {
    return (
      <div class="top-bar">
        <div className="left-section">
            <CurrentDate/>
        </div>
        <div className="right-section">
            <UserName/>
            <ButtonSession/>
        </div>
      </div>
    );
}

export { TopBar };