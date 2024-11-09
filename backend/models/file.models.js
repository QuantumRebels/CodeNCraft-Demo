import mongoose from "mongoose";

const FileSchema = new mongoose.Schema(
  {
    FileName: {
      type: String,
      required: true,
    },
    FileDescription: {
      type: String,
      required: true,
    },
    FileType: {
      type: String,
      required: true,
    },
    SourceDept: {
      type: String,
      required: true,
      default: null,
    },
    To: {
      type: String,
    //   required: true,
      default: null,
    },
    InitiatorName: {
      type: String,
      required: true,
      default: null,
    },
    AtatchedDocs: {
      type: String,
      default: null,
    },
    Status: {
      type: String,
      default: "pending",
    },
    Location: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export const files = new mongoose.model("files", FileSchema);
