// import React, { useState } from 'react';

// export default function Register() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     return (
//         <div>
//             <h1>Manager Log In</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     <p>Email</p>
//                     <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
//                 </label>
//                 <label>
//                     <p>Password</p>
//                     <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
//                 </label>
//                 <div>
//                     <button type="submit">Submit</button>
//                     <span className={msgClass}>{message}</span>
//                 </div>
//             </form>
//         </div>
//     )
// }