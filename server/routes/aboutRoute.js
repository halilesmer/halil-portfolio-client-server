import express from "express";
import mongoose from "mongoose";
import Data from "../db/dataModelAbout.js";
const router = express.Router();

//get all datas from database
router.get('/', async (req, res) => {
    try {
        const datas = await Data.find()

        res.status(200).json(datas)

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

//get single data from database
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: 'About Data is not valid' })
        }

        const data = await Data.findById(id);
        if (!data) return;

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: 'About Data not found' });
    }

})

//creat a data
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const createData = await Data.create(data);
        res.status(201).json(createData);

    } catch (error) {
        console.log(error.message);
        res.json({ message: 'Create the About message failed' })
    }
})
//update a data
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: 'About Data is not valid' })
        }
        
        const { title, content, creator, image } = req.body;
        const updateData = await Data.findByIdAndUpdate(
            id,
            { title, content, creator, image, _id: id },
            { new: true }
        );
        //if (!updateData) return;

        res.status(200).json(updateData);
    } catch (error) {
        console.log(error.message);
        res.json({ message: 'About Update failed' })
    }
})

//delete a data
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)) 
        res.status(404).json({message: 'Data ID is not valid!'})

        await Data.findByIdAndDelete(id);

        res.status(200).json({message: 'About Data has been deleted!'})
    } catch (error) {
        console.log(error.message);
        res.json({ message: 'About Data delete failed!' })
    }
})

export default router
/* router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ message: 'Data is not valid' })
        }

        const data = await Data.findById(id);
        if (!data) return;

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: 'Data not found' });
    }

}) */