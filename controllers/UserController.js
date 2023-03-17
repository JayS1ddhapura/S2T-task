// Importing models and libraries

const UserModel = require('../models/UserModel')
const socketio = require('socket.io')
require('dotenv').config()
const wdio = require('webdriverio');

// Twilio Initialisation
const { TWILIO_AUTHTOKEN, TWILIO_AUTHSID } = process.env
const twilioClient = require('twilio')(TWILIO_AUTHSID, TWILIO_AUTHTOKEN);

// getting data based on phone number based on Twilio Lookup
exports.getInfo = async (req, res) => {
    try {
        const { body } = req;
        const contact = body.contact;
        if (!contact) {
            return res.status(400).send({ status: 400, message: "Please provide a phone number.", data: [] })
        }

        // fetching data from twilio lookup API
        const fetchedData = await twilioClient.lookups.v2.phoneNumbers(contact)
            .fetch({ type: ['carrier'] })
        console.log(fetchedData)
        const { callerName, phoneNumber, countryCode } = fetchedData

        // storing the data in database
        const userData = await UserModel.create({
            name: callerName,
            phoneNumber,
            countryCode
        })
        await userData.save()
        console.log(userData)
        res.status(200).send({ status: 200, message: "Successfully fetched the data", data: fetchedData })
    } catch (e) {
        console.log(e);
        res.status(500).send({ status: 500, message: "Internal Server error", data: [] })
    }
}

// using phone number to search on social media in a virtual machine
exports.searchOnVM = async (req, res) => {
    try {

        const { body } = req;
        const contact = body.contact;
        if (!contact) {
            return res.status(400).send({ status: 400, message: "Please provide a phone number.", data: [] })
        }

        // configuring webdriver io
        const opts = {
            path: '/wd/hub',
            port: 4723,
            capabilities: {
                platformName: "Android",
                platformVersion: "12",
                deviceName: "emulator-5554",
                appPackage: "com.whatsapp",
                appActivity: "com.whatsapp.HomeActivity",
                automationName: "UiAutomator2"
            }
        };
        
        async function main () {
            const client = await wdio.remote(opts);
            console.log(client)
            // await client.element('#search').click(); // click the search button
            // await client.element('#search-input').setValue(phoneNumber); // enter the phone number in the search box
            // const response = await client.element('#search-results').getText(); // get the response
            // console.log(response)
        }
        main()
        res.status(200).send({ status: 200, message: "Successfully fetched the data", data: [] })
    } catch (e) {
        console.log(e);
        res.status(500).send({ status: 500, message: "Internal Server error", data: [] })
    }
} 
