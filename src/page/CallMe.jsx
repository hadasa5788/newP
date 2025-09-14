import React, { useState } from 'react'

const CallMe = () => {

    const [text, setText] = useState(""); // משתנה state ששומר את הטקסט


const handleFormSumbit=(e)=>{
    e.preventDefault();
    e.stopPropagation();
alert("The form was sent successfully.")
}
const handleChange=(e)=>{
setText(e.target.value);
};

  return (
    <div> 
 <form onSubmit={handleFormSumbit}> 
<input
 placeholder='enter name'
 type="text"
 value={text}
  onChange={handleChange}
/>
<button type='submit'>Submit</button>
</form>
<p>{text}</p>
    </div>
  )
}

export default CallMe