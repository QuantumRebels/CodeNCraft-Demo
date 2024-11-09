import express from 'express';
import FileControllers from '../controllers/FileControllers.js';

const FileRouter=express.Router();

FileRouter.post('/create',FileControllers.createfile)

FileRouter.get('/getallfiles',FileControllers.getfiles)

FileRouter.patch('/request',FileControllers.requestfile)

FileRouter.patch('/reject',FileControllers.rejectfile)

FileRouter.put('/approve',FileControllers.approvefile)

FileRouter.patch('/update',FileControllers.updateFile)

export default FileRouter;