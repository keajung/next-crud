import mongoose, {Schema} from "mongoose"; //Schema use for provide type of data

//create parameter "postSchema"
const postSchema = new Schema(
    {
        title: String,
        img: String,
        content: String
    },
    {
        timestamps: true //auto fill timestamps everytime we add data.
    }
)
//create parameter "Post"
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post; //use for add data or update data