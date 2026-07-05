const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')


const Lost = require('./models/lostSchema')
const User = require('./models/userSchema')
const Found = require('./models/foundSchema')
const Admin=require('./models/adminSchema')
const upload=require('./upload')
const ClaimRequest=require("./models/claimSchema")
const FoundReport = require("./models/foundReportSchema");

require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json()) 
app.use("/uploads",express.static("uploads"));

const PORT = process.env.PORT || 3000
const dbUrl=process.env.MONGODB_URL

async function main(){
    await mongoose.connect(dbUrl)
}
main()
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:', err)
})


//lost item table

app.post('/lost',upload.single("image"),async(req,res)=>{
    try {
        const{name,description,location,date,contactInfo,userid}=req.body

        const lost=new Lost({name,description,location,date,contactInfo,userid,
            image:req.file?
            `/uploads/${req.file.filename}`:""
        })
        await lost.save()
        res.status(201).json({message:"Product added",data:lost})
    } catch (error) {
        console.error(error)
        res.status(500).json({Error:error.message})
    }
})

app.get('/lost',async(req,res)=>{
    try {
        const things=await Lost.find()
        res.status(200).json({message:"Product details recieved",data:things})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
})

app.get('/lost/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const lostItem = await Lost.findById(id);

        if (!lostItem) {
            return res.status(404).json({
                message: "Lost item not found"
            });
        }

        res.status(200).json({
            message: "Lost item fetched successfully",
            data: lostItem
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }
});

app.patch('/lost/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const{name,description,location,date,imageurl,contactInfo}=req.body
        const lost=await Lost.findByIdAndUpdate(id,{name,description,location,date,imageurl,contactInfo},{new:true})
        if(!lost){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product updated",data:lost})
    }
        catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

app.delete('/lost/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const lost=await Lost.findByIdAndDelete(id)
        if(!lost){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product deleted",data:lost})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})
//Found Item table

app.post('/found', async (req, res) => {


    try {
        const {
            name,
            description,
            location,
            date,
            imageurl,
            contactInfo,
            verifyquestion,
            userid
        } = req.body;


        const found = new Found({
            name,
            description,
            location,
            date,
            contactInfo,
            verifyquestion,
            userid
        });

        await found.save();

        res.status(201).json({
            message: "Product added",
            data: found
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/found/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const thing=await Found.findById(id)
        if(!thing){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product details recieved",data:thing})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
})

app.get('/found', async(req,res)=>{
    try {

        const things = await Found.find()

        res.status(200).json({
            message:"Product details received",
            data:things
        })

    } catch(error) {
        console.log(error)

        res.status(500).json({
            error:error.message
        })
    }
})

app.patch('/found/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const{name,description,location,date,imageurl,contactInfo,question,userid}=req.body
        const found=await Found.findByIdAndUpdate(id,{name,description,location,date,imageurl,contactInfo,question,userid},{new:true})
        if(!found){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product updated",data:found})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

app.delete('/found/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const found=await Found.findByIdAndDelete(id)
        if(!found){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product deleted",data:found})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

//User table-signup

app.post('/signup',async(req,res)=>{ 
    try {
        const{username,email,password}=req.body
        const existinguser=await User.findOne({email:email.toLowerCase()});
        if(existinguser)
        {
            return res.status(400).json({
                message:"Email already registered"
            });
        }

        const user=new User({username,email:email.toLowerCase(),password})
        await user.save()
        res.status(201).json({message:"User added",data:user})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

// login
app.post('/login',async(req,res)=>{ 
    try {
        const{email,password}=req.body
        const user=await User.findOne({email:email.toLowerCase()});
        if(!user)
        {
            return res.status(404).json({
                message:"User not found"
            });
        }
        if(user.password!==password)
        {
            return res.status(401).json({
                message:"Incorrect password"
            });
        }

        res.status(200).json({message:"Login Successfull",data:user})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

app.get('/users',async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).json({message:"User details recieved",data:users})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
})

app.delete('/users/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const user=await User.findByIdAndDelete(id)
        if(!user)
        {
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"User deleted",data:user})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
})

// Admin table
app.post('/adminlogin',async(req,res)=>{
    const {username,password}=req.body
    const admin=await Admin.findOne({
        username,password
    })
    if(!admin){
        return res.status(401).json({
            message:"Invalid Credentials"
        })
    }
    res.status(201).json({
        message:"Login Successfull"
    })
})

// Claim request
app.post('/claimrequest',async(req,res)=>{
    try {
        const {foundItemId,claimantId,answer}=req.body;
        const founditem=await Found.findById(foundItemId)
        if(!founditem){
            return res.status(404).json({
        message:"Found item not found"
    });
    }
    const request=new ClaimRequest({
        foundItemId,claimantId,foundOwnerId:founditem.userid,answer
    })
    await request.save();
    res.status(201).json({
        message:"Claim request sent successfully",data:request
    })

    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
})

app.get("/claimrequest/:founderid", async (req, res) => {
    try {

        const { founderid } = req.params;

        const requests = await ClaimRequest.find({
            founderid: founderid
        })
        .populate("claimantId")
        .populate("founditemId");

        res.status(200).json({
            message: "Claim requests fetched successfully",
            data: requests
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }
});

app.get("/claimrequest/item/:foundItemId", async (req, res) => {
    try {

        const { foundItemId } = req.params;

        const requests = await ClaimRequest.find({
            foundItemId: foundItemId
        }).populate("claimantId");

        res.status(200).json({
            message: "Claim requests fetched successfully",
            data: requests
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }
});

// Accept API
app.put("/claimrequest/accept/:id", async (req, res) => {

    try {

        const request = await ClaimRequest.findByIdAndUpdate(
            req.params.id,
            {
                status: "Accepted"
            },
            {
                new: true
            }
        );

        if (!request) {
            return res.status(404).json({
                message: "Claim request not found"
            });
        }

        await Found.findByIdAndUpdate(
            request.foundItemId,
            {
                claimed: true
            }
        );

        res.status(200).json({
            message: "Claim accepted successfully",
            data: request
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});

// Reject API
app.put("/claimrequest/reject/:id", async (req, res) => {

    try {

        const request = await ClaimRequest.findByIdAndUpdate(
            req.params.id,
            {
                status: "Rejected"
            },
            {
                new: true
            }
        );

        if (!request) {
            return res.status(404).json({
                message: "Claim request not found"
            });
        }

        res.status(200).json({
            message: "Claim rejected successfully",
            data: request
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});

// My Claims
app.get("/myclaims/:claimantId", async (req, res) => {

    try {

        const claims = await ClaimRequest.find({
        claimantId: req.params.claimantId
    }).populate({
        path: "foundItemId",
        populate: {
        path: "userid",
        select: "username"
    }
});

        console.log(JSON.stringify(claims, null, 2));
        res.status(200).json({
            message: "Claims fetched successfully",
            data: claims
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});

// foundreport
app.post("/foundreport", async (req, res) => {

    try {

        const {
            lostItemId,
            senderId,
            name,
            description,
            contactInfo
        } = req.body;

        // Check if lost item exists
        const lostItem = await Lost.findById(lostItemId);

        if (!lostItem) {
            return res.status(404).json({
                message: "Lost item not found"
            });
        }

        // Prevent duplicate reports
        const existingReport = await FoundReport.findOne({
            lostItemId,
            senderId
        });

        if (existingReport) {
            return res.status(400).json({
                message: "You have already reported this item."
            });
        }

        const report = new FoundReport({

            lostItemId,
            senderId,
            receiverId: lostItem.userid,   // Use userId if that's what your schema has

            name,
            description,
            contactInfo,

            status: "Pending"

        });

        await report.save();

        res.status(201).json({
            message: "Report sent successfully.",
            data: report
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});

app.get("/foundreports/:receiverId", async (req, res) => {

    try {

        const reports = await FoundReport.find({
            receiverId: req.params.receiverId
        })
        .populate("senderId", "username email")
        .populate("lostItemId", "name description location image");

        res.status(200).json({
            message: "Reports fetched successfully",
            data: reports
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});

app.get("/foundreports/item/:lostItemId", async (req, res) => {

    try {

        const reports = await FoundReport.find({
            lostItemId: req.params.lostItemId
        }).populate("senderId", "username email");

        res.status(200).json({
            message: "Reports fetched successfully",
            data: reports
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});

// ACCEPT
app.put("/foundreport/accept/:id", async (req, res) => {

    try {

        const report = await FoundReport.findByIdAndUpdate(

            req.params.id,

            {
                status: "Accepted"
            },

            {
                new: true
            }

        );

        res.status(200).json({
            message: "Report accepted",
            data: report
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});

// REJECT
app.put("/foundreport/reject/:id", async (req, res) => {

    try {

        const report = await FoundReport.findByIdAndUpdate(

            req.params.id,

            {
                status: "Rejected"
            },

            {
                new: true
            }

        );

        res.status(200).json({
            message: "Report rejected",
            data: report
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});


app.listen(PORT,()=>{
    console.log("Server has started...")   
})

