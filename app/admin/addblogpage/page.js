'use client'
import Footer from '@/componants/Footer';
import Header from '@/componants/Header';
import { Box, Button, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddBlogs = () => {
    const [deepTech, setDeepTech] = useState([]);

    const [data, setData] = useState({
        title: '',
        image: '',
        category: '',
        description: '',
        link1: '',
        link2: '',
        link3: '',
        link4: '',
        link5: '',
        para1: '',
        para2: '',
        para3: '',
        para4: '',
        para5: '',

    });


    const addBlogHandler = (e) => {
        if (e.target.name == 'image') {
            const { name, files } = e.target;
            setData({ ...data, image: files[0] })
        } else {
            const { name, value } = e.target;
            setData({ ...data, [name]: value })
        }
    };
    console.log(data)
    const submitBlogHandler = async () => {
        if (data.title && data.image && data.description && data.category && data.link1 && data.link2 && data.link3 && data.link4 && data.link5 && data.para1 && data.para2 && data.para3 && data.para4 && data.para5) {
            const formData = new FormData;
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('category', data.category);
            formData.append('link1', data.link1);
            formData.append('link2', data.link2);
            formData.append('link3', data.link3);
            formData.append('link4', data.link4);
            formData.append('link5', data.link5);
            formData.append('image', data.image);
            formData.append('para1', data.para1);
            formData.append('para2', data.para2);
            formData.append('para3', data.para3);
            formData.append('para4', data.para4);
            formData.append('para5', data.para5);
            try {
                const res = await axios.post('/api/blogdata', formData);
                console.log('res', res)
                if (res.data.message = 'Blog Add Successfully') {
                    alert(res.data.message);
                    setData(
                        {
                            title: '',
                            image: '',
                            category: '',
                            description: '',
                            link1: '',
                            link2: '',
                            link3: '',
                            link4: '',
                            link5: '',
                            para1: '',
                            para2: '',
                            para3: '',
                            para4: '',
                            para5: '',
                        }
                    );
                    fetchBlogData();
                };
            } catch (err) {
                console.log(err);
                alert(err.message);
            }
        }

    }

    // console.log(data);

    const fetchBlogData = async () => {
        try {
            const getBlogData = await axios.get('/api/blogdata');
            // console.log('check blog data',getBlogData);
            if (getBlogData.data.message = 'Data Fetch Successfully') {
                setDeepTech(getBlogData.data.resp);
            }
            if (getBlogData.data.message == 'Failed To Fetch Data') {
                alert(err.message)

            }


        } catch (err) {
            console.log(err);
            alert(err.message);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);


    const deleteHandler = async (id) => {
        console.log('check id ', id)
        try {
            const deleteBlog = await axios.delete(`/api/deleteblog/${id}`);
            console.log(deleteBlog);
            if (deleteBlog.data.message = 'Blog Deleted Successfully') {
                alert(deleteBlog.data.message)
                fetchBlogData();
            }

        } catch (err) {
            console.log(err);
            alert(err.message);
        }

    }
    // console.log(deepTech)




    return (
        <>
            <Header />
            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
                <Grid item xs={6} sx={{ bgcolor: 'lightgrey', borderRadius: '10px', mb: '60px' }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ p: '10px' }}>
                            <Typography sx={{ fontSize: '35px', fontWeight: '800', textAlign: 'center', }}>Add New Blogs</Typography>

                        </Grid>


                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Title :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                <TextField placeholder='Title..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='title' value={data.title} />
                            </Grid>

                        </Grid>
                        <Grid container sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12}>
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Image :</Typography>

                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} >

                                <Box sx={{ border: '1px solid white', p: '5px', bgcolor: 'white', borderRadius: '2px' }}>

                                    <input type='file' onChange={addBlogHandler} name='image' />

                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container sx={{ p: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Category :</Typography>

                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                <FormControl fullWidth size='small' sx={{ bgcolor: 'white' }}>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        onChange={addBlogHandler}
                                        name='category'
                                        value={data.category}


                                    >
                                        <MenuItem value={'Deep Tech Studio'}>Deep Tech Studio</MenuItem>
                                        <MenuItem value={'Gaming Studio'}>Gaming Studio</MenuItem>
                                        <MenuItem value={'Ai'}>Ai</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Description :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                <TextareaAutosize placeholder='Description..'
                                    sx={{ fontSize: '14px', color: 'red', width: '500px', height: '300px', overflow: 'auto', }}
                                    maxRows={100}
                                    size='small'
                                    fullWidth
                                    onChange={addBlogHandler} name='description' value={data.description}


                                />
                            </Grid>

                        </Grid>
                        {/* likn 1 */}
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Link1 :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                <TextField placeholder='link1..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='link1' value={data.link1} />
                                
                            </Grid>

                        </Grid>
                        {/* para1  */}
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Para1 :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                {/* <TextField placeholder='para1..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='para1' value={data.para1} /> */}
                                <TextareaAutosize placeholder='para1..'
                                    sx={{ fontSize: '14px', color: 'red', width: '500px', height: '300px', overflow: 'auto', }}
                                    maxRows={100}
                                    size='small'
                                    fullWidth
                                    onChange={addBlogHandler} name='para1' value={data.para1}


                                />
                            </Grid>
                            

                        </Grid>

                        {/* likn 2 */}
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Link2 :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                <TextField placeholder='link2..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='link2' value={data.link2} />
                            </Grid>

                        </Grid>
                        {/* para2  */}
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Para2 :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                {/* <TextField placeholder='para2..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='para2' value={data.para2} /> */}
                                <TextareaAutosize placeholder='para2..'
                                    sx={{ fontSize: '14px', color: 'red', width: '500px', height: '300px', overflow: 'auto', }}
                                    maxRows={100}
                                    size='small'
                                    fullWidth
                                    onChange={addBlogHandler} name='para2' value={data.para2}


                                />
                            </Grid>

                        </Grid>

                        {/* likn 3 */}
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Link3 :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                <TextField placeholder='link3..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='link3' value={data.link3} />
                            </Grid>

                        </Grid>
                        {/* para3  */}
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Para3 :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                {/* <TextField placeholder='para3..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='para3' value={data.para3} /> */}
                                <TextareaAutosize placeholder='para3..'
                                    sx={{ fontSize: '14px', color: 'red', width: '500px', height: '300px', overflow: 'auto', }}
                                    maxRows={100}
                                    size='small'
                                    fullWidth
                                    onChange={addBlogHandler} name='para3' value={data.para3}


                                />
                            </Grid>

                        </Grid>

                        {/* likn 4 */}
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Link4 :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                <TextField placeholder='link4..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='link4' value={data.link4} />
                            </Grid>

                        </Grid>
                        {/* para4  */}
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Para4 :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                {/* <TextField placeholder='para4..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='para4' value={data.para4} /> */}
                                <TextareaAutosize placeholder='para4..'
                                    sx={{ fontSize: '14px', color: 'red', width: '500px', height: '300px', overflow: 'auto', }}
                                    maxRows={100}
                                    size='small'
                                    fullWidth
                                    onChange={addBlogHandler} name='para4' value={data.para4}


                                />
                            </Grid>

                        </Grid>

                        {/* likn 5 */}
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Link5 :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                <TextField placeholder='link5..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='link5' value={data.link5} />
                            </Grid>

                        </Grid>
                        {/* para5  */}
                        <Grid container sx={{ p: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item lg={3} md={3} sm={12} xs={12} >
                                <Typography sx={{ fontSize: { lg: '16px', md: '15px', sm: '14px', xs: '14px' }, textAlign: { lg: 'right', md: 'right', sm: 'left', xs: 'left' }, mr: '10px' }}>Para5 :</Typography>
                            </Grid>
                            <Grid item lg={7} md={7} sm={12} xs={12} sx={{ color: 'red' }}>
                                {/* <TextField placeholder='para5..' sx={{ fontSize: '14px', color: 'red', bgcolor: 'white' }} size='small' fullWidth onChange={addBlogHandler} name='para5' value={data.para5} /> */}
                                <TextareaAutosize placeholder='para5..'
                                    sx={{ fontSize: '14px', color: 'red', width: '500px', height: '300px', overflow: 'auto', }}
                                    maxRows={100}
                                    size='small'
                                    fullWidth
                                    onChange={addBlogHandler} name='para5' value={data.para5}


                                />
                            </Grid>

                        </Grid>



                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '20px', pb: '20px' }}>
                            <Button variant='contained' sx={{ textTransform: 'capitalize', p: '6px 40px', fontSize: '18px' }} onClick={submitBlogHandler}  >Submit</Button>

                        </Grid>

                    </Grid>


                </Grid>


            </Grid>

            <Grid container>
                <Grid item xs={12}>
                    <TableContainer component={Paper} sx={{ mb: '50px' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ bgcolor: 'grey' }}>
                                <TableRow >
                                    <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>S.No</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }} >Blog Category</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Title</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Description</TableCell>
                                    <TableCell align="center" sx={{ fontSize: '15px', fontWeight: '800' }}>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {
                                    deepTech.map((ele, index) => {
                                        return (
                                            <TableRow key={index} >
                                                <TableCell align="center" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{index + 1}</TableCell>
                                                <TableCell align="center" sx={{ fontSize: '14px', cursor: 'pointer', fontWeight: 'bold' }} >{ele.category}</TableCell>
                                                <TableCell align="center" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{ele.title}</TableCell>
                                                <TableCell align="center" sx={{ fontSize: '14px', fontWeight: 'bold' }}>{ele.description.slice(0, 10)}</TableCell>
                                                <TableCell align="center" >

                                                    <Button variant='contained' color='error' sx={{ fontSize: '10px' }} onClick={() => { deleteHandler(ele._id) }}>Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }

                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default AddBlogs