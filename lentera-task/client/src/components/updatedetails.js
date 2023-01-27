import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './comp.css';
import img1 from './add.jpg';
import { useParams } from 'react-router-dom';

export default function Updatedetails() {

    const { id } = useParams();

    const [firstname, setFirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [gender, setgender] = useState('');
    const [dob, setdob] = useState('');
    const [qualification, setqualification] = useState('');
    const [address, setaddress] = useState('');

    useEffect(() => {
        fetch("http://localhost:3002/update/" + id + "")
            .then(Response => Response.json())
            .then(function (res) {
                setFirstname(res[0].firstname);
                setlastname(res[0].lastname);
                setmobile(res[0].mobile);
                setemail(res[0].email);
                setgender(res[0].gender);
                setdob(res[0].dob);
                setqualification(res[0].qualification);
                setaddress(res[0].address);
            })
            .catch(function (error) {
                alert(error);
                window.location.href = "/";
            })
    }, [])


    const handlesubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var value = { headers: { "enctypr": "multipart/form-data" } };



        await axios.put("http://localhost:3002/updatedata/" + id + '', key, value)
            .then(function (res) {
                if (res.data.status === 'error') {
                    alert("error");
                    window.location.href = "/";
                }
                else if (res.data.status === 'success') {
                    alert('Data successfully update');
                    window.location.href = "/";
                }
            })
            .catch(function (error) {
                alert(error);
                window.location.href = "/";
            })
    }

    return (
        <>
            <div>
                <div className=' p-2 container-fluid'>
                    <div className='row'>
                        <div className=' bg p-4 col-lg-12'>
                            <h1 className='text-center mt-2'>Teachers Management Details</h1>
                        </div>
                    </div>
                    <div className='back'>
                    <img src={img1} className="background" />
                    </div>
                    <form onSubmit={handlesubmit}>
                        <div className='row mt-5'>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>First Name:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='firstname' name='firstname' className='form-control text-center' value={firstname} onChange={(a) => setFirstname(a.target.value)} />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Last Name:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='lastname' name='lastname' className='form-control text-center' value={lastname} onChange={(a) => setlastname(a.target.value)} />
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Mobile Number:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='mobile' name='mobile' className='form-control text-center' value={mobile} onChange={(a) => setmobile(a.target.value)} />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Email Id:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='email' name='email' className='form-control text-center' value={email} onChange={(a) => setemail(a.target.value)} />
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Gender:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='gender' name='gender' className='form-control text-center' value={gender} onChange={(a) => setgender(a.target.value)} />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Date-of-Birth:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="date" id='dob' name='dob' className='form-control text-center' value={dob} onChange={(a) => setdob(a.target.value)} />
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Qualification:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='qualification' name='qualification' className='form-control text-center' value={qualification} onChange={(a) => setqualification(a.target.value)} />
                            </div>
                            <div className='col-lg-2'>
                                <h5 className='text-center'>Address:</h5>
                            </div>
                            <div className='col-lg-3'>
                                <input type="text" id='address' name='address' className='form-control text-center' value={address} onChange={(a) => setaddress(a.target.value)} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'></div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-lg-5'></div>
                            <div className='col-lg-2'>
                                <button type='submit' name='submit' id='submit' value='submit' className=' text-center btn btn-danger col-lg-12'>Update</button>
                            </div>
                            <div className='col-lg-5'></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}