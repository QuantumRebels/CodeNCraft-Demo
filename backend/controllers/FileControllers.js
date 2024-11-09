import { files } from "../models/file.models.js";
import { Messages } from "../models/messages.models.js";

const createfile = async (req, res) => {
  const { fileName,
    fileDescription,
    fileType, sourcedept, InitiatorName,ImageUrl } =
    req.body;
  console.log(req.body);

  try {
    const file = await files.create({
      FileName: fileName,
      FileDescription: fileDescription,
      FileType: fileType,
      SourceDept: sourcedept,
      InitiatorName: InitiatorName,
      AtatchedDocs: ImageUrl,
      Location: sourcedept,
    });
    if(file){
        res.json("File Created Successfully")
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server Error");
  }
};

const getfiles=async(req,res)=>{
    try {
        const file=await files.find()
        if(file){
            res.json(file)
        }else{
            res.status(404).json("No File Found")
        }
    } catch (error) {

        console.error(error)
    }
}

const requestfile=async(req,res)=>{
   
    const {id,currentuser,dept}=req.body;
    try {
        const file=await files.findByIdAndUpdate(id,{Status:"Requested",RequestedBy:`${currentuser}(${dept})`})

        
    } catch (error) {
        console.error(error)
        res.status(500).json("Server Error")
    }
}

const approvefile=async(req,res)=>{
    const {fileid,currentUser,Department}=req.body
    console.log(fileid)
    try {
        const file=await files.findByIdAndUpdate(fileid,{Status:"Approved",Location:`${currentUser}(${Department})`})
        console.log(file)
        
    }catch(error){
        console.error(error)
        res.status(500).json("Server Error")
    }
}
const rejectfile=async(req,res)=>{
    const {id,currentUser,Department,FileName}=req.body
    console.log(req.body)
    console.log(id)
    try {
        const message=await Messages.create({
            FileName:FileName,
            Name:currentUser,
            Department:Department,
            Message:"File has been rejected",
            
        })
        const file=await files.findByIdAndDelete(id)
        
        
        
    }catch(error){
        console.error(error)
        res.status(500).json("Server Error")
    }
}

const updateFile=async(req,res)=>{
    const {id}=req.body
    const { Title, Description, filetype, sourcedept, Initiator, ImageUrl } = req.body;
    console.log(req.body)

}

const details=async(req,res)=>{
    const {id}=req.body
    try {
        const file=await files.findById(id)
        res.json(file)
    } catch (error) {
        console.error(error)
    }
}

export default {createfile,requestfile,approvefile,updateFile,getfiles,rejectfile,details}