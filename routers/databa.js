const { model, set } = require("mongoose");
const {
  SectionModel,
  commentsModel,
  CourseModel,
  ContentModel,
  pointsModel,
  controlv,
  CouponGen,
} = require("./../models/Database");

const express = require("express");
const routes = express.Router();
/** creation */
routes.route("/createsection").post(async (req, res) => {
  try {
    const content = req.body.content ;
    const data = new SectionModel({
      ...req.body,
    });
    const conten = await data.save();

    await ContentModel.findByIdAndUpdate(
      { _id: content},
      {
        $push: {
          sections: conten._id,
        },
      },
      { new: true, useFindAndModify: false }
    );

    res.status(200).json(conten);
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error)
  }
});



routes.route("/generatecoupons").post(
  async(req,res)=>{

try{
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var randomname=["","SANA","CODED","KOBBY","THEHUB","MYSHARE","MESHARE","UG","THECONNECT"]
let generatecount=1;

if(req.body.count){
  generatecount=req.body.count;

}


for(let i=0; i<generatecount; i++){
 
  var pickname=randomname[getRandomNumber(1,randomname.length)]
  const mycoupon=pickname+ getRandomNumber(1000,50000);
  const coupon=new CouponGen({
    name:mycoupon,
    ...req.body
  });
  

  
 await coupon.save()


}


const mycoupons=await  CouponGen.find();
res.status(200).json(mycoupons);



}
catch(error){

  res.status(500).json({msg:error})
  console.log(error);


}

  }
)

routes.route("/getcoupons").get(
  async(req,res)=>{

try{
const coupon=await CouponGen.find();
console.log("mycoupons")
if(coupon){
  res.status(200).json(coupon);
}

if(!coupon){

  res.status(404).json({msg: "Coupons not found"});
}
}
catch(error){

  res.status(500).json({msg:error})


}

  }
)

routes.route("/getcoupon").get(
  async(req,res)=>{

try{

const coupon=await CouponGen.findOne({"name":req.body.name});

if(coupon){
  res.status(200).json(coupon);
}

if(!coupon){

  res.status(404).json({msg: "Coupon not found"});
}
}
catch(error){

  res.status(500).json({msg:error})


}

  }
)


routes.route("/applycoupon").patch(
  async(req,res)=>{

try{
  const couponone=await CouponGen.findOne({"name":req.body.name});
  if(
    couponone 
  ){
    const _id=couponone._id
    const coupon=await CouponGen.findByIdAndUpdate({_id},{
      "$set":{
        expired:true

      }
    },{new:true})
    res.status(200).json(coupon)
  }
  else{
    res.status(400).json({msg:"coupon not found"})
  }
}
catch(error){
  res.status(500).json({msg:error})
}

  }
)
routes.route("/deletecoupon/:id").delete(
  async(req,res)=>{


try{

  console.log(req.params);
  const couponone=await CouponGen.findOne({"name":req.params.id});
  if(
    couponone 
  ){
    const _id=couponone._id
    const coupon=await CouponGen.findByIdAndDelete({_id});
    res.status(200).json({msg:"coupon deleted"})
  }
  else{
    res.status(400).json({msg:"coupon not found"});
  }

}
catch(error){
  res.status(500).json({msg:error})
}
  }
)



















routes.route("/createcontent").post(async (req, res) => {
  try {
    const course = req.body.course;
    const data = new ContentModel({
      ...req.body,
    });
    const content = await data.save();

    await CourseModel.findByIdAndUpdate(
      { _id: course },
      {
        $push: {
            contents: content._id
        },
      },
      { new: true, useFindAndModify: true }
    );
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});
routes.route("/coursepoint").post(async (req, res) => {
  try {
    const course = req.body.course;

    const data = new pointsModel({
      ...req.body,
    });
    const content = await data.save();
    await CourseModel.findByIdAndUpdate(
      { _id: course },
      {
        $push: {
          expections: content._id,
        },
      },
      { new: true, useFindAndModify: true }
    );
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

routes.route("/addcomment").post(async (req, res) => {
  try {
    const course = req.body.course;
    const data = new commentsModel({
      ...req.body,
    });
    const content = await data.save();
    await CourseModel.findByIdAndUpdate(
      { _id: course },
      {
        $push: {
          comments: content._id,
        },
      },
      { new: true, useFindAndModify: true }
    );
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

routes.route("/addcourse").post(async (req, res) => {
  try {
    const data = new CourseModel({
      ...req.body,
    });
    const content = await data.save();
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

/** get queries  all */

routes.route("/getsections").get(async (req, res) => {
  try {
    const data = await SectionModel.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

routes.route("/getcontents").get(async (req, res) => {
  try {
    const data = await ContentModel.find({})
      .populate("sections")
      .populate("contents");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

routes.route("/getcourses").get(async (req, res) => {
  try {
    const data = await CourseModel.find({})
      .populate("students")
      .populate("expections")
      .populate({ path: "contents", populate: { path: "sections" } })
      .populate("comments");

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error });
 console.log(error);
  }
});

routes.route("/getcomments").get(async (req, res) => {
  try {
    const data = await CourseModel.find({}).populate("courses");

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

/**get one queries */

routes.route("/getsection/:id").get(async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await SectionModel.findOne({_id});
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

routes.route("/getcontent/:id").get(async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await ContentModel.findOne({_id})
      .populate("sections")
      .populate("course");
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

routes.route("/getcourse/:id").get(async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await CourseModel.findOne({_id})
      .populate("students")
      .populate("expections")
      .populate({ path: "contents", populate: { path: "sections" } })
      .populate("comments");

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error });
    console.log(error);
  }
});

routes.route("/getcomment/:id").get(async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await commentsModel.findOne({_id})
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});


/** modify */

routes.route("/modifysection/:id").patch(async (req, res) => {
    try {
      const _id = req.params.id;
      const data = await SectionModel.findByIdAndUpdate({_id},{
        $set:{
            ...req.body
        }
      },{new: true});
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  });
  
  routes.route("modifycontent/:id").patch(async (req, res) => {
    try {
      const _id = req.params.id;
      const data = await ContentModel.findByIdAndUpdate({_id},{
        $set:{
            ...req.body
        }
      },{new: true});
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  });
  
  routes.route("/modifycourse/:id").patch(async (req, res) => {
    try {
      const _id = req.params.id;
      const data = await CourseModel.findByIdAndUpdate({_id},{
        $set:{
            ...req.body
        }
      },{new: true});
  
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  });
  

  /** delete queries */
  routes.route("/deletecomment/:id").delete(async (req, res) => {
    try {
      const _id = req.params.id;
      const data = await commentsModel.findByIdAndDelete(_id)
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  });
  


  
routes.route("/deletesection/:id").delete(async (req, res) => {
    try {
      const _id = req.params.id;
      const data = await SectionModel.findByIdAndDelete({_id})
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  });
  
  routes.route("/deletecontent/:id").delete(async (req, res) => {
    try {
      const _id = req.params.id;
      const data = await ContentModel.findByIdAndDelete({_id})
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ msg: error });
      console.log(error);
    }
  });
  
  routes.route("/deletecourse/:id").delete(async (req, res) => {
    try {
      const _id = req.params.id;
      const data = await CourseModel.findByIdAndDelete({_id})
  
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json({ msg: error });
    }
  });



  routes.route("/mangecontrolv").post(
    async(req,res)=>{
      try{

        const addcontrols=new controlv(
        {  ...req.body}
        )


        const data=await addcontrols.save();
        res.status(200).json(data)

      }

      catch(error){
        res.status(400).json({msg:"Unsuccessful"})
        console.log(error);

      }
    }
  )

routes.route("/updatecontrols/:id")
.patch(async(req,res)=>{
  try{

    const data=await controlv.findByIdAndUpdate({_id:req.params.id},{

      "$set":{
        ...req.body
      }
    },{new:true})



    res.status(200).json(data);

  }




  catch(error){

res.status(400).json({msg:"Unsuccessful"})

  }
})




routes.route("/getaccess").get(
  async(

req,res

  )=>{
    try{


    const control=await controlv.find({});
    res.status(200).json(control);

    }catch(err){

res.status(400).json(err);

    }
  }
)
module.exports = routes;