import * as React from 'react';
import { useState } from "react";

const Cb = () => {
    const [showElement, setShowElement] = useState(false);
    return (
        <div classname="Cb">
            <div classname="container">
                <label>
                    <input type="checkbox" data-testid="cbShowHide" checked="{showElement}" onchange={e => setShowElement(e.target.checked)} />
                    <span>Show/Hide Box</span>
                </label>
                {showElement && <div classname="box" data-testid="box">This is testing application.</div>}
            </div>
        </div>
    );
}
export default Cb;