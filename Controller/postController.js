const Post = require("../Model/postModel")

const postController = {
    getpost : async (req, res)=>{
        const posts = await Post.find({createdBy : req.id}).populate('createdBy');
        res.send(`Post that you have created ${posts}`)
    },

    create : async (req, res) =>{
        const post = await Post.create({
            createdBy : req.id,
            message : req.body.message
        })

        res.json(post);
    },

    update : async (req, res)=>{
        const id = req.body.id;
        try {
            await Post.findByIdAndUpdate(id, req.body);
            res.json({"message": "Post Updated Successfully"})
        } catch (error) {
            res.json({"message": "Error in updating the Post"})
        }
        
    },

    delete : async (req, res)=>{
        const postid = req.body.id;
        try {
            await Post.findByIdAndDelete(postid);
            res.json({"message": "Post deleted Successfully"})
        } catch (error) {
            res.json({"message": "Error in deleting the post"})
        }  
    }


}

module.exports = postController;