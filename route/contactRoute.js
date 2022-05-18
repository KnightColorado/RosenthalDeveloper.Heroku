const router = require('express').Router()
const nodemailer= require('nodemailer')

router.post('/contact',(req,res)=>{
    let data = req.body
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg:"Please fill all the fields"})
    }
        let stmpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth:{
                user:'reactcoder2022@gmail.com',
                pass: 'I Cleared App Specific Password Before Setting To Public Github For Secuirty of App-Michael'
            }
        })
        let mailOptions ={
            from: data.email,
            to:'reactcoder2022@gmail.com',
            subject: `message from ${data.name}`,
            html: `
            
            <h3>Informations</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            </ul>
            <h3>Mesage</h3>
            <p>${data.message}</p>
            `
        }
        stmpTransporter.sendMail(mailOptions,(error)=>{
            try {
                if(error) return res.status(400).json({msg: 'Please fill all the fields'})
                res.status(200).json({msg: 'Thank you for contacting Michael!'})
            } catch (error) {
                if(error)return res.status(500).json({msg: "There is a server error"})
            }
        })
    
})
module.exports = router