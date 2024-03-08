import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req, res) {
    const data = await req.json();
    console.log(data);
    const { name, email, text } = data;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        service: "gmail",
        auth: {
            user: `${process.env.EMAIL_USER}`,
            pass: `${process.env.EMAIL_PASS}`,
        },
    });

    // Email content
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "amansinghmarch16@gmail.com", // Replace with your email
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${text}`,
    };
    try {
        // Send email
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error submitting form' });
    }
    return NextResponse.json({ message: 'Form submitted successfully!' })
}