import express from 'express';
import FileControllers from '../controllers/FileControllers.js';

const FileRouter=express.Router();

FileRouter.post('/create',FileControllers.createfile)

FileRouter.get('/getallfiles',FileControllers.getfiles)

FileRouter.post('/request',FileControllers.requestfile)

FileRouter.post('/reject',FileControllers.rejectfile)

FileRouter.post('/approve',FileControllers.approvefile)

FileRouter.post('/update',FileControllers.updateFile)

FileRouter.get('/details',FileControllers.details)

export default FileRouter;