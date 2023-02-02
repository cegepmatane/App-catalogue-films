console.log('Loading function');

var AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    const bucket = "app-film";
    const key = "liste-films.json";
    const params = {
        Bucket: bucket,
        Key: key,
    };
    try {
      const data = await s3.getObject(params).promise();
      console.log("Raw text:\n" + data.Body.toString('utf-8'));
      return data.Body.toString('utf-8');

    } catch (err) {
        console.log(err);
        const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
        console.log(message);
        throw new Error(message);
    }
};
