const bcryt = require("bcrypt");
const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  content: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contents",
    },
  
});

const contentSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  abstract: {
    type: String,
    required: true,
  },
  sections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sections",
    },
  ],
  course:{
    type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
  }
});

const pointSchema = mongoose.Schema({
  name: {
    type: String,
  },
  point: {
    type: Number,
    required: true,
  },
});

const CourseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,

  },
  maincategory:{
    type: String

  },
  subcategory:
  {

    type: String
  },
  detail:{
    type: String,
    
  },
  file:{
    type: String
  },
  key:{
    type: String
  },
  abstract: {
    type: String,
    required: true,
  },
  contents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contents",
    },
  ],
  expections:{
      type: String,
     
    },
  
  rating: {
    type: Number,
    default: 0,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  feature:{
    type:Number,
    default: 0,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
},{timestamps: true});



const commentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"users"
    },
    text: {
      type: String,
    },
    rate: {
      type: Number,
    },
    course: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "courses",
        },
      

  },
  { timestamps: true }
);


const couponSchma=mongoose.Schema({
  name:{

    type:String,
  },

  amount:{
    type:String,

  },
  expired:{
    type:Boolean,
    default:false,

  }


})


const sitecontrols=mongoose.Schema({

vpnaccess:{
  type:Number,
  default:1

}
,
topads:{
  type:String
},
adscount:{
type:Number
}
})

const SectionModel = mongoose.model("sections", sectionSchema);
const ContentModel = mongoose.model("contents", contentSchema);
const pointsModel = mongoose.model("points", pointSchema);
const commentsModel = mongoose.model("comments", commentSchema);
const CourseModel = mongoose.model("courses", CourseSchema);
const controlv=mongoose.model("controlv",sitecontrols);
const CouponGen=mongoose.model("coupons",couponSchma);


module.exports={
    SectionModel,
    ContentModel,
    pointsModel,
    commentsModel,
    CourseModel
    ,controlv,
    CouponGen
}