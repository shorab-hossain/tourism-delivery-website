import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Booking = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const [tour, setTour] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const url =`https://sheltered-spire-72785.herokuapp.com/tour/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data=>setTour(data))
    },[])
    console.log(tour);
    const onSubmit = data => {
        console.log(data)
        data.status="Pending"
        fetch('https://sheltered-spire-72785.herokuapp.com/user',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            console.log(id)
            if(data.insertedId){
                alert('Booking Information Added Successfully')
                reset()
            }
        })
    }



    return (
        <div className="mb-3 bg-dark">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row mt-2 ms-5">
                <div  className="col-md-6 text-light">
                    <div>
                        <img style={{width:'300px'}} className="image"  src={tour.img} alt="" />
                        <h4>{tour.country}</h4>
                        <h4>{tour.price} Price</h4>
                        <h4 style={{width:"300px"}}>{tour.description} </h4>

                    </div>
                </div>
                <div className="col-md-6">
                <div className="booking">
            <h2 className=" text-light mb-4">Booking Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input className="my-2 p-3 px-5 me-2" {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />
      <input className="my-2 p-3 px-5" type="text" {...register("country")} placeholder="country" defaultValue={tour.country} /><br/>
      <input className="my-2 p-3 px-5 me-2" type="email" {...register("email")} placeholder="Email" defaultValue={user.email} />
      <input className="my-2 p-3 px-5" type="number" placeholder="Price" {...register("price")} defaultValue={tour.price} />
      <input className="my-2 p-3 px-5 me-2" type="text" {...register("address")} placeholder="Address" required />
      <input className="my-2 p-3 px-5 me-2" type="number" {...register("phone")} placeholder="Phone number" required />
      <input className="my-2 p-3 px-5" type="date" {...register("date")} placeholder="date" required /><br/>
      <input  className="btn btn-primary mb-2" type="submit" value="Submit" />

    </form>
        </div>

                </div>
            </div>
        </div>
    );
};

export default Booking;