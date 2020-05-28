import * as React from 'react';

const DebugComponent: React.FC<{data: any}> = (props) => {
    // attempting to debug in this component does not seem possible.
    React.useEffect(() => {
        debugger;
    });
    console.log("hello world", JSON.stringify(props.data));
    return <>Hello world from pilet</>;
}

export default DebugComponent;