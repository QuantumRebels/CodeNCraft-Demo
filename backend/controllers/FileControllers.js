import { files } from "../models/file.models";

const createfile = async (req, res) => {
  const { Title, Description, filetype, sourcedept, Initiator, ImageUrl } =
    req.body;
  console.log(req.body);

  try {
    const file = await files.create({
      FileName: Title,
      FileDescription: Description,
      FileType: filetype,
      SourceDept: sourcedept,
      InitiatorName: Initiator,
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
    const {id}=req.params
    try {
        const file=await files.findById(id)
        if(file){
            file.status="Approved"
            res.json(file)
        }
    }catch(error){
        console.error(error)
        res.status(500).json("Server Error")
    }
}

const updateFile=async(req,res)=>{
    const {id}=req.params
    const { Title, Description, filetype, sourcedept, Initiator, ImageUrl } = req.body;

}
