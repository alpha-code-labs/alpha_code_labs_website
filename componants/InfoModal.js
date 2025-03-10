'use client'
import { Button, Divider, Grid, Modal, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';


const InfoModal = ({ open, setOpen }) => {
    const [info, setInfo] = useState(
        {
            name: '',
            phone: '',
            gender: '',
            age: '',
        }
    );

    const infoHandler = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })

    };
    console.log(info)
    const handleClose = () => {
        setOpen(false)
    };

    const submitHandler=async()=>{
        try{
            const res = await axios.post('/api/info',info);
            console.log(res)
            if(res.data.message='Saved Your Details'){
                alert(res.data.message)
                setOpen(false)
            }else{
                alert(res.data.message)
            }

        }catch(err){
            console.log(err);
            alert(err.massage);
        }

    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'black' }}
            >
                <Grid container sx={{ height: 'fit-content', width: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} sx={{ borderRadius: '10px', bgcolor: 'white' }}>
                        <Grid container sx={{ p: '10px' }}>
                            <Grid item xs={12} sx={{ p: '8px', }}>
                                <Typography sx={{ fontSize: '28px', color: '#212121' }}>Interest Form</Typography>
                            </Grid>
                            <Divider sx={{ bgcolor: 'grey', mt: '10px', width: '100%' }} />


                            <Grid container sx={{ mt: '2px', p: '10px' }}>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#424242' }}>Name</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '5px' }} >

                                    <TextField placeholder='Name..' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='name' value={info.name} />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '15px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#424242' }}>Phone No</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '5px' }} >
                                    {/* <TextField placeholder='Full Name..' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={UserInputDetails} name='fullName' value={addUserDtails.fullName} /> */}
                                    <TextField placeholder='Phone No..' type='number' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='phone' value={info.phone} />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '15px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#424242' }}>Gender</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '5px' }} >
                                    {/* <TextField placeholder='Full Name..' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={UserInputDetails} name='fullName' value={addUserDtails.fullName} /> */}
                                    <TextField placeholder='Gender..' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='gender' value={info.gender} />

                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'light', alignItems: 'center', mt: '15px' }}>
                                    <Typography sx={{ fontSize: '17px', mr: '5px', color: '#424242' }}>Age</Typography>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '5px' }} >
                                    {/* <TextField placeholder='Full Name..' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={UserInputDetails} name='fullName' value={addUserDtails.fullName} /> */}
                                    <TextField placeholder='Age..' type='number' fullWidth size='small' sx={{ fontSize: '15px' }} onChange={infoHandler} name='age' value={info.age} />

                                </Grid>
                                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', mt: '20px', pb: '10px' }}>
                                    {/* <Button variant='contained' disabled={btn} sx={{ fontSize: '15px' }} onClick={submitNewUserHandler}>Add User</Button> */}
                                    <Button variant='contained' sx={{ fontSize: '17px', bgcolor: 'black', color: 'white', textTransform: 'capitalize' }} onClick={submitHandler}>Submit</Button>

                                </Grid>

                            </Grid>
                            <Divider sx={{ bgcolor: 'grey', mt: '10px', width: '100%' }} />
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', p: '10px' }}>
                                <Typography sx={{ fontSize: '23px', color: '#212121', cursor:'pointer'}} onClick={handleClose}>Close</Typography>


                            </Grid>












                        </Grid>

                    </Grid>
                </Grid>

            </Modal>
        </>
    )
}

export default InfoModal