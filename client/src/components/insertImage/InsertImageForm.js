import React, { useState } from 'react'
import { Form, Button, } from 'react-bootstrap'
import FileBase64 from 'react-file-base64';
import *  as api from '../../axios/index.js';
// import { useNavigate } from 'react-router-dom';

export const InsertImageForm = (value) => {
    const [projectsData, setProjectsData] = useState({
        title: '',
        description: '',
        link: '',
        git: '',
        img: '',
    })

    // const navigate = useNavigate();
    return (<>

        <Form onSubmit={(e) => {
            e.preventDefault();
            api.createImage(projectsData);
            // navigate('/');
        }}>
            <Form.Group>
                <h1>Create a Memory</h1>
            </Form.Group>
            <Form.Group>
                <Form.Label>Title: </Form.Label>
                <Form.Control
                    name='title'
                    type="text"
                    onChange={(e) => setProjectsData({ ...projectsData, title: e.target.value })} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Description: </Form.Label>
                <Form.Control
                    name='description'
                    type='text'
                    onChange={(e) => setProjectsData({ ...projectsData, description: e.target.value })}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link : </Form.Label>
                <Form.Control
                    name='link'
                    type="text"
                    onChange={(e) => setProjectsData({ ...projectsData, link: e.target.value })} />
            </Form.Group>
            <Form.Group>
                <Form.Label>GitHub : </Form.Label>
                <Form.Control
                    name='git'
                    type="text"
                    onChange={(e) => setProjectsData({ ...projectsData, git: e.target.value })} />
            </Form.Group>

            <Form.Group>
                <FileBase64
                    type='file'
                    multiple={false}
                    onDone={({ base64 }) => {
                        setProjectsData({ ...projectsData, img: base64 })
                    }}
                />
            </Form.Group>

            <Button className='my-3 col-12' type='submit' >Submit</Button>

        </Form>
    </>
    )
}

