import userModel from "../models/user.model.js";

export async function register(req, res) {

    const { email,phone, password} = req.body

    const errors = []

    if(!email){
        errors.push({
            field:"email",
            message:"Email is not found"
        })
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!(emailRegex.test(email))){
        errors.push({
            field:"email",
            message:"Email format is wrong"
        })
    }

    if(!phone){
        errors.push({
            field:"phone",
            message:"phone no is not found"
        })
    }

    const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;

    if(!indianPhoneRegex.test(phone)){
        errors.push({
            field:"phone",
            message:"phone no is not valid"
        })
    }

    if(!password || !password.trim()){
        errors.push({
            field:"password",
            message:"password is not found"
        })
    }

    if(password.trim().length<6){
        errors.push({
            field:"passowrd",
            message:"password must contain atleast 6 characters"
        })
    }

    if(errors.length>0){
        return res.status(400).json({
            message:"invalid request",
            errors
        })
    }

    const user = await userModel.create({

        email,
        phone,
        password: password

    })

    return res.status(201).json({

        data :{

            email,
            phoen,
            id: user._id

        }

    })
    
}