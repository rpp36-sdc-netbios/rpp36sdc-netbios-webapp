require('dotenv').config();
var S3 = require('aws-sdk/clients/s3');
var fs = require('fs');

var bucketName = process.env.AWS_BUCKET_NAME;
var region = process.env.AWS_BUCKET_REGION;
var accessKeyId = process.env.AWS_ACCESS_KEY;
var secretAccessKey = process.env.AWS_SECRET_KEY;

var S3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
});

function uploadFile(file) {
  var fileStream = fs.createReadStream(file.path);
  console.log('file in S3'+file)

  var uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  }

  return S3.upload(uploadParams).promise()
}

exports.uploadFile = uploadFile;
