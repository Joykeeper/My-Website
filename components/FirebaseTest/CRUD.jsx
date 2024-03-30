'use client'

import {ref, set, get, update, remove, child, getDatabase} from "firebase/database";
import { useState } from "react";

const FirebaseCrud = () => {
    let [username, setUsername] = useState('');
    let [fullname, setFullName] = useState('');

    let insertData = () => {
        set(ref(getDatabase(), 'User/' + username), {
            fullname: fullname
        });
    }

    let selectData = () => {
        const dbref = ref(getDatabase());

        get(child(dbref, "User/" + username)).then(snapshot=>{
            setFullName(snapshot.val().fullname)
        })
    }

    return(
        <>
            <label>Username</label>
            <input type="text" value={username} onChange={e=>{setUsername(e.target.value)}}/>

            <button onClick={insertData}>Insert</button>
            <button onClick={selectData}>Select</button>
        </>
    )   
}

export default FirebaseCrud