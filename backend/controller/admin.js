
    let Review=require('../model/data');

    exports.getDetail=async(req,res,next)=>{
        try{
            let data=await Review.findAll();
            res.status(200).json({userdetail:data})
        }
        catch(err){
            console.log('failed to load user')
            res.status(500).json({error:err})
        }
        
    }

    exports.addReview=async (req,res,next)=>{
        try{
            let name=req.body.name;
            let pros=req.body.pros;
            let cos=req.body.cos;
            let rate=req.body.rate;
            

            // console.log(name)
            // console.log(pros);
            // console.log(cos);
            
            

            let data= await Review.create({
                name:name,
                pros:pros,
                cos:cos,
                rate:rate
            })
            res.status(200).json({userdetail:data})
            // res.redirect('/')

        }
        catch(err){ 
            console.log('failed to add user',err)
            res.status(500).json({error:'internal server error'})
        }
    }



    exports.singleData = async (req, res, next) => {
        // console.log('Request Query:', req.query);

        let name = req.query.name;

        try {
            let reviews = await Review.findAll({
                where: {
                    name: name
                }
            });
            if (reviews.length === 0) {
                return res.status(404).json({ error: 'Company not found' });
            }

            let totalRating = 0;
            for (let review of reviews) {
                totalRating += review.rate;
            }
            let averageRating = totalRating / reviews.length;

            let roundedAverageRating = averageRating.toFixed(1)

            let response = {
                data: reviews,
                averageRating: roundedAverageRating
            };
            

            res.status(200).json(response);
        } catch (err) {
            console.log('Error fetching data for company:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

