import { mongoose } from 'mongoose';

interface ISignature{
    name: string;
    image: string;
    date: Date;
}

export interface ISetting {
    _id: mongoose.Types.ObjectId;
    invoiceLogo?: string,
    signature?: ISignature,
    userId: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const signatureSchema = new mongoose.Schema<ISignature>({
    name:{type:String,default:null},
    image:{type:String,default:null},
},{
    _id:false
})

const settingSchema = new mongoose.Schema<ISetting>({
    invoiceLogo:{type:String,default:null},
    signature:{type:signatureSchema,default:null},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
},{
    timestamps:true
})

const SettingModel = mongoose.models.Setting || mongoose.model("Setting",settingSchema);

export default SettingModel;
