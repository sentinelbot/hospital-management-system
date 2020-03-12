const router = require('express').Router();
let Patient = require('../models/patient.model');

router.route('/').get((req, res) => {
    Patient.find()
        .then(patients => res.json(patients))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const patientColorCode = req.body.patientColorCode;
    const patientName = req.body.patientName;
    const patientAddress = req.body.patientAddress;
    const patientContact = req.body.patientContact;
    const patientDateOfBirth = Date.parse(req.body.patientDateOfBirth);
    const patientGender = req.body.patientGender;
    const patientWeight = Number(req.body.patientWeight);
    const patientHeight = Number(req.body.patientHeight);
    const patientTemperature = Number(req.body.patientTemperature);
    const patientBp = req.body.patientBp;
    const patientScanImage = req.body.patientScanImage;
    const patientLabTest = req.body.patientLabTest;
    const patientDrugPescription = req.body.patientDrugPescription;
    const creationDate = Date.parse(req.body.creationDate);
    const updationDate = Date.parse(req.body.updationDate);

    const newPatient = new Patient({
        patientColorCode,
        patientName,
        patientAddress,
        patientContact,
        patientDateOfBirth,
        patientGender,
        patientWeight,
        patientHeight,
        patientTemperature,
        patientBp,
        patientLabTest,
        patientScanImage,
        patientDrugPescription,
    });
    
    newPatient.save()
        .then(() => res.json('Patient added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Patient.findById(req.params.id)
        .then(patients => res.json(patients))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Patient.findByIdAndDelete(req.params.id)
        .then(() => res.json('Patient deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Patient.findById(req.params.id)
        .then(patient => {
            patient.patientColorCode = req.body.patientColorCode;
            patient.patientName = req.body.patientName;
            patient.patientAddress = req.body.patientAddress;
            patient.patientContact = req.body.patientContact;
            patient.patientDateOfBirth = req.body.patientDateOfBirth;
            patient.patientGender = req.body.patientGender;
            patient.patientWeight = Number(req.body.patientWeight);
            patient.patientHeight = Number(req.body.patientHeight);
            patient.patientTemperature = Number(req.body.patientTemperature);
            patient.patientBp = req.body.patientMedHist.bp;
            patient.patientScanImage = req.body.patientScanImage;
            patient.patientLabTest = req.body.patientLabTest;
            patient.patientDrugPescription = req.body.patientDrugPescription;
            patient.updationDate = Date.parse(req.body.updationDate);

            patient.save()
                .then(() => res.json('Patient updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;