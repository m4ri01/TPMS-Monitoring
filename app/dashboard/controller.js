
module.exports = {
    index: async(req,res)=>{
        try {
            res.render('dashboard/index');
        } catch (error) {
            console.log(error);
        }
    }
}