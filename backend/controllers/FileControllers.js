import { files } from "../models/file.models.js";

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
    const {id}=req.params
    const {name,dept}=req.body;
    try {
        const file=await files.findById(id)

        console.log(file)
        if(file){
            file.status=`Requested By ${name} (${dept})`
            res.json(file)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json("Server Error")
    }
}

const approvefile=async(req,res)=>{
    const {id}=req.body
    console.log(id)
    try {
        const file=await files.findByIdAndUpdate(id,{status:"Approved"})
        console.log(file)
        
    }catch(error){
        console.error(error)
        res.status(500).json("Server Error")
    }
}
const rejectfile=async(req,res)=>{
    const {id}=req.params
    console.log(id)
    try {
        const file=await files.findByIdAndUpdate(id,{status:"Rejected"})
        console.log(file)
        
    }catch(error){
        console.error(error)
        res.status(500).json("Server Error")
    }
}

const updateFile=async(req,res)=>{
    const {id}=req.params
    const { Title, Description, filetype, sourcedept, Initiator, ImageUrl } = req.body;
    console.log(req.body)

}

export default {createfile,requestfile,approvefile,updateFile,getfiles,rejectfile}