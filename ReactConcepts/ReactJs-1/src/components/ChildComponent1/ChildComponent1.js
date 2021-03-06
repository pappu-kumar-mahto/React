import React from 'react';
import './ChildComponent1.css'
import GrandChildComponent1 from "./GrandChildComponent1/GrandChildComponent1";


const ChildComponent1 = () => {
    return (
        <div
            className='ChildComponent1'
        >
            <h2>
                Child Component 1
            </h2>
            <GrandChildComponent1
                title="Heading 1"
                description="This is description for 1st grandChild."
                bgColor="red"
            />
            <GrandChildComponent1
                title="Heading 2"
                bgColor="green"
                txtColor="white"
            />
           
        </div>
    )
}

// const ChildComponent1 = () => {
//     return (
//         <div
//             className='ChildComponent1'
//             style={{ backgroundColor: "#eee", color: "red" }} // Inline Styling
//         >
//             <h2>
//                 Child Component 1
//             </h2>
//             <GrandChildComponent1/>
//             <GrandChildComponent1 />
           
//         </div>
//     )
// }
// const ChildComponent1 = () => {
//     let mainDivStyle = { backgroundColor: "#eee", color: "red" } //Internal Styling
//     return (
//         <div
//             className='ChildComponent1'
//             style={mainDivStyle}
//         >
//             <h2>
//                 Child Component 1
//             </h2>
//             <GrandChildComponent1/>
//             <GrandChildComponent1 />
           
//         </div>
//     )
// }


export default ChildComponent1