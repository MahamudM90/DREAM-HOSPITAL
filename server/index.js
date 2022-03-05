const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()
const ObjectId = require('mongodb').ObjectID;
const app = express();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@tanjilashamima-solution.r8czi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});


const client = new MongoClient(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
const storage = multer.diskStorage({
  destination: (req, file, callback) =>{
      callback(null, 'uploads')
  },
  filename: (req, file, callback) =>{
      callback(null, file.fieldname+path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
});

client.connect(err => {
  const adminCollection = client.db("hospital-management-system").collection("admin");
  const doctorCollection = client.db("hospital-management-system").collection("doctors");
  const patientCollection = client.db("hospital-management-system").collection("patients");
  const serviceCollection = client.db("hospital-management-system").collection("services");
  const appointmentCollection = client.db("hospital-management-system").collection("appointments");


  
  app.post('/addAdmin', (req, res) => {
    const adminInfo = req.body;
    adminCollection.insertOne(adminInfo)
    .then(result => {
      if(result.insertedCount > 0){
        res.send(result.ops[0]);
      }
    })
  })

  app.get('/admins', (req, res)=> {
    adminCollection.find({})
      .toArray((err, doccuments) =>{
        res.send(doccuments)
    })
  })



  //Doctor Start

  app.post('/addDoctor',upload.single('doctorImage'), async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path).catch(cloudError => console.log(cloudError));
        if(result){
            const doctorInfo = {...req.body, doctorImage: result.secure_url};  
            doctorCollection.insertOne(doctorInfo)
            .then(result => {
                if(result.insertedCount < 0){
                    res.send({"status": "error","message": `<p className="text-danger">Data corrupted</p>`})
                }
                else{
                    res.send(result.ops[0]);
                }
            })
            .catch(dbError => console.log(dbError));
        }
        else{
            res.status(404).send('Upload Failed');
        }
  })

  app.get('/doctors', (req, res)=> {
    doctorCollection.find({})
      .toArray((err, doccuments) =>{
        res.send(doccuments)
    })
  })


  app.get('/doctors/:id', (req, res) => {
    doctorCollection.find({_id: ObjectId(req.params.id) })
      .toArray((err, documents) => {
          res.send(documents[0]);
      })
  })

  app.patch('/update-doctor/:docId', (req, res) =>{
    doctorCollection.updateOne({_id : ObjectId(req.params.docId)},
    {
        $set: {verifyStatus : req.body.verifyStatus}
    })
    .then(result =>{
        console.log(result);
    })
})


app.delete('/delete-doctor/:docId', (req, res) => {
  doctorCollection.deleteOne({_id: ObjectId(req.params.docId)})
  .then((doctor) =>{
      console.log(doctor)
      res.send(doctor.deletedCount > 0)
      
  })
})

//Doctor End


  //Services Start

  app.post('/addService',upload.single('serviceImage'), async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path).catch(cloudError => console.log(cloudError));
        if(result){
            const ServiceInfo = {...req.body, serviceImage: result.secure_url};  
            serviceCollection.insertOne(ServiceInfo)
            .then(result => {
                if(result.insertedCount < 0){
                    res.send({"status": "error","message": `<p className="text-danger">Data corrupted</p>`})
                }
                else{
                    res.send(result.ops[0]);
                }
            })
            .catch(dbError => console.log(dbError));
        }
        else{
            res.status(404).send('Upload Failed');
        }
  })

  app.get('/services', (req, res)=> {
      serviceCollection.find({})
      .toArray((err, doccuments) =>{
        res.send(doccuments)
    })
  })


  app.get('/service/:id', (req, res) => {
    serviceCollection.find({_id: ObjectId(req.params.id) })
      .toArray((err, documents) => {
          res.send(documents[0]);
      })
  })

  //Services End




  //Appointments Start

    app.post('/addAppointments', (req, res) => {
      const appointmentInfo = req.body;
      appointmentCollection.insertOne(appointmentInfo)
      .then(result => {
        if(result.insertedCount > 0){
          res.send(result.ops[0]);
        }
      })
    })

    app.get('/appointments', (req, res)=> {
      appointmentCollection.find({})
        .toArray((err, doccuments) =>{
          console.log(doccuments, err)
          res.send(doccuments)
      })
    })


  //Appointments End



//Patients Start

  app.post('/addPatient', (req, res) => {
    const patientInfo = req.body;
    patientCollection.insertOne(patientInfo)
    .then(result => {
      if(result.insertedCount > 0){
        res.send(result.ops[0]);
      }
    })
  })

  app.get('/patients', (req, res)=> {
    patientCollection.find({})
      .toArray((err, doccuments) =>{
        res.send(doccuments)
    })
  })

  //Patients End

  // app.post('/login', (req, res) => {
  //   const {email, password} = req.body;
  //   patientCollection.insertOne(patientInfo)
  //   .then(result => {
  //     if(result.insertedCount > 0){
  //       res.send(result.ops[0]);
  //     }
  //   })
  // })

  app.get('/', (req, res) =>{
    res.send('Welcome Hospital Management System')
  })  

  // perform actions on the collection object
  // client.close();
});

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log('listening on port 5000'))