import{ body, validationResult} from 'express-validator'



export const registerValidation =
[
        body("email")
        .exists().withMessage("email is required")
        .isEmail().withMessage("invalid emil addredd"),

        body("phone")
        .exists().withMessage("phone no is required")
        .isMobilePhone("en-IN").withMessage("invalid phone no"),

        body('password')
        .exists().withMessage('password is required')
        .trim().isLength({ min:6 }).withMessage("atleaset 6 char"),

        (req,res,next) => {
            const errors = validationResult(req)
            if(!errors.isEmpty()){

                return res.status(400).json({
                    message:"Inavlid request",
                    errors: errors.array()
                })

            }
            next()
        }

]

   

    
    