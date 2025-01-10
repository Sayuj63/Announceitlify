const sgMail = require('@sendgrid/mail');
const csv = require('csv-parser');
const fs = require('fs');
require('dotenv').config();

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(studentData) {
    const msg = {
        to: studentData.email,
        from: process.env.SENDER_EMAIL,
        subject: 'Your Exam Results',
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>Hello ${studentData.name}!</h2>
                <p>Here are your exam results:</p>
                <ul>
                    <li>Subject 1: ${studentData.subject1}</li>
                    <li>Subject 2: ${studentData.subject2}</li>
                    <li>Subject 3: ${studentData.subject3}</li>
                </ul>
                <p>Best regards,<br>School Team</p>
            </div>
        `
    };

    try {
        await sgMail.send(msg);
        console.log(`✅ Email sent to ${studentData.email}`);
    } catch (error) {
        console.log(`❌ Error: ${error.message}`);
    }
}

function processAndSendEmails() {
    fs.createReadStream('students_results.csv')
        .pipe(csv())
        .on('data', async (student) => {
            await sendEmail(student);
        })
        .on('end', () => {
            console.log('All emails processed!');
        });
}

// Run the script
processAndSendEmails(); 
