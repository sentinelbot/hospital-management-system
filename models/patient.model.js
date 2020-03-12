const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    //id: {type: String, required: true},
    patientColorCode: {type: String, required: true},
    patientName: {type: String, required: true},
    patientAddress: {type: String, required: true},
    patientContact: {type: String, required: true},
    patientDateOfBirth: {type: Date, required: true},
    patientGender: {type: String, required: true},
    patientWeight: Number,
    patientHeight: Number,
    patientTemperature: Number,
    patientBp: String,
    patientDiagnosis: String,
    patientScanImage: {data: Buffer, type:String},
    patientLabTest: String,
    patientDrugPescription: String,
    creationDate: {type: Date, default: Date.now},
    updationDate: {type: Date, default: Date.now}
}, {
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;