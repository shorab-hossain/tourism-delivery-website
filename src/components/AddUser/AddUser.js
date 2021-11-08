import React,{useRef} from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = e =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = {name, email};
        fetch('https://sheltered-spire-72785.herokuapp.com/user',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.insertedId){
                alert('successfully added the user')
                e.target.reset();

            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2 className="text-center">Add a New Tour</h2>
            <form className="my-5 d-flex justify-content-center" onSubmit={handleAddUser}>
                <input placeholder="Your name" className="mr-3"  type="text" ref={nameRef}/><br/>
                <input placeholder="Your email" className="ms-3 me-3" type="email" ref={emailRef}/>
                <input className="btn btn-warning py-2 px-3" type="submit" value="add" />
            </form>
        </div>
    );
};

export default AddUser;