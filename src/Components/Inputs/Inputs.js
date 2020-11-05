import React, {useState} from 'react'
import Search from '../Search/Search';

const Inputs = () => {

    const [title, setTitle] = useState("");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div>
            <form action="">
                <input type="text" value={title} onChange={handleTitle}/>
            </form>
            <Search title={title}/>
        </div>
    )
}

export default Inputs
