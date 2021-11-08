import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import ('./Customer.css')

const Customer = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/customer',data)
        .then(res => {
           if(res.data.insertedId){
               alert('added successfully'); 
               reset();
           }
        })
    };
    return (
        <div className="add-service ">
            <h4 className="text-center fw-bold text-primary mb-3">please fillap this form</h4>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <input className="py-3" {...register("Name")}  placeholder="Name"/><br/>
                <input className="py-3" {...register("position")}  placeholder="position"/><br/>
                <input className="py-3" {...register("describtion")}  placeholder="describtion"/><br/>
                <input className="py-3" type="number"{...register("Price")} placeholder="Price" /><br/>
                <input className="py-3" {...register("img")} placeholder="ImgUrl" /><br/>
                <input className="btn btn-primary" type="submit" />
                </form>
            </div>
    );
};

export default Customer;