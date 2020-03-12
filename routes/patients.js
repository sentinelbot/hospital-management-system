const router = require('express').Router();
let Patient = require('../models/patient.model');

router.route('/').get((res, req) => {
    Patient.find()
        .then(patients => res.json(patients))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((res, req) => {
    const patientColorCode = req.body.patientColorCode;
    const patientName = req.body.patientName;
    const patientAddress = req.body.patientAddress;
    const patientContact = req.body.patientContact;
    const patientDateOfBirth = req.body.patientDateOfBirth;
    const patientGender = req.body.patientGender;
    const patientMedHist_weight = Number(req.body.patientMedHist.weight);
    const patientMedHist_height = Number(req.body.patientMedHist.height);
    const patientMedHist_temperature = Number(req.body.patientMedHist.temperature);
    const patientMedHist_bp = req.body.patientMedHist.bp;
    const patientMedHist_scanImage = req.body.patientMedHist.scanImage;
    const patientMedHist_labTest = req.body.patientMedHist.labTest;
    const patientMedHist_drugPescription = req.body.patientMedHist.drugPescription;
    const patientAge = Number(req.body.patientAge);
    const creationDate = Date.parse(req.body.creationDate);
    const updationDate = Date.parse(req.body.updationDate);

    const newPatient = new Patient({
        patientColorCode,
        patientName,
        patientAddress,
        patientContact,
        patientDateOfBirth,
        patientGender,
        patientMedHist_weight,
        patientMedHist_height,
        patientMedHist_temperature,
        patientMedHist_bp,
        patientMedHist_labTest,
        patientMedHist_scanImage,
        patientMedHist_drugPescription,
        patientAge,
        creationDate,
        updationDate,
    });
    
    newPatient.save()
        .then(() => res.json('Exercise added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((res, req) => {
    Patient.findById(req.params.id)
        .then(patients => res.json(patients))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((res, req) => {
    Patient.findByIdAndDelete(req.params.id)
        .then(() => res.json('Patient deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((res, req) => {
    Patient.findById(req.params.id)
        .then(patient => {
            patient.patientColorCode = req.body.patientColorCode;
            patient.patientName = req.body.patientName;
            patient.patientAddress = req.body.patientAddress;
            patient.patientContact = req.body.patientContact;
            patient.patientDateOfBirth = req.body.patientDateOfBirth;
            patient.patientGender = req.body.patientGender;
            patient.patientMedHist_weight = Number(req.body.patientMedHist.weight);
            patient.patientMedHist_height = Number(req.body.patientMedHist.height);
            patient.patientMedHist_temperature = Number(req.body.patientMedHist.temperature);
            patient.patientMedHist_bp = req.body.patientMedHist.bp;
            patient.patientMedHist_scanImage = req.body.patientMedHist.scanImage;
            patient.patientMedHist_labTest = req.body.patientMedHist.labTest;
            patient.patientMedHist_drugPescription = req.body.patientMedHist.drugPescription;
            patient.patientAge = Number(req.body.patientAge);
            patient.creationDate = Date.parse(req.body.creationDate);
            patient.updationDate = Date.parse(req.body.updationDate);

            patient.save()
                .then(() => res.json('Patient updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;