import mongoose from "mongoose";
import infoSchema from "../schema/InfoSchema";

const info = mongoose.models.info || new mongoose.model('info',infoSchema);
export default info