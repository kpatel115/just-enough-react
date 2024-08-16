import React, { useState } from 'react';

function Sparkle() {
    const [sparkle, setSparkle] = useState('');
    return (
    <div>
        <button type='button' onClick={() => setSparkle(sparkle + '\u2728') }>Add Sparkle</button>
        <p>{sparkle}</p>
    </div>
    )
};

export default Sparkle;