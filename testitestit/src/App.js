import * as React from 'react';
import { useState } from "react";

function App() {
    const [showElement, setShowElement] = useState(false);
    return (
        <div className="App">
            <div className="container">
                <label>
                    <input type="checkbox" data-testid="cbShowHide" checked="{showElement}" onChange={e => setShowElement(e.target.checked)} />
                    <span>Show/Hide Box</span>
                </label>
                {showElement && <div className="box" data-testid="box">klikattu</div>}
            </div>
        </div>
    );
}
export default App;