/**
 * Lambda handlers for exclusion resource
 * @module api
 * @author Jason Drummond <jason.drummond2@origin.com.au>
 */

import warmer from 'lambda-warmer'
import AWS from 'aws-sdk'
const { Parser } = require('json2csv')

/**
 * Lambda handler for Well Recovery State Change post method
 */
exports.createRecoveryStateChangeEvent = async (event) => {
    // if a warming event
    if (await warmer(event)) return 'warmed'
    
    try {         
        const s3Response =  await writeObjectToS3(process.env.Bucket,process.env.Key, event)

        const response = {
            statusCode: 200,
            data: {
            message: s3Response,
            input: event,
            },
        };

        return response

    } catch (e) {
        const response = {
            statusCode: 400,
            data: {
            message: e.message,
            input: event,
            },
        };        
        return response
    }
    
};

const writeObjectToS3 = (bucket, key, data) => {
    
    const newEvent = castDateFields(data, ['createdAt', 'effectiveDate'])
    const keyPath = generateFileName(key,newEvent)
    const csv = json2csvParser.parse(newEvent);
    const s3 = new AWS.S3();

    var params = {
        Bucket : bucket,
        Key : keyPath,
        Body : csv,
        ACL: 'public-read',
        ContentType : 'text/csv',
    }   

    return s3.upload(params).promise();
}

const generateFileName = (key, data) => {
    const newDate = new Date(data.createdAt.toLocaleString("en-US", {timeZone: "Australia/Brisbane"}))
    const dateStr = formatDate(newDate)

    return key+'/'+data.wellNumber+'-'+dateStr+'.csv'
}

const schema = ['effectiveDate',
    'effectiveDateNew',
    'wellNumber',
    'currentRecoveryState',
    'newRecoveryState',
    'recoveryReason',
    'comment',
    'createdBy',
    'createdAt',
    'createAtNew'
];

const json2csvParser = new Parser(schema);

const castDateFields = (obj, cols) => {
    let newObj = {
        ...obj
    }
    cols.map(c => newObj[c] = convertDate(obj[c]))
    return newObj
}

const convertDate = (msEpoch) => {
    var d = new Date(0);
    d.setUTCMilliseconds(msEpoch);
    return d
}

const prefix0 = (num) =>{
    return num < 10? '0'+num.toString():num.toString()
}

const formatDate = (d) => {
    d.a
    const yyyy = prefix0(d.getFullYear())
    const MM = prefix0(d.getMonth()) 
    const dd = prefix0(d.getDay())
    const hh = prefix0(d.getHours())
    const mm = prefix0(d.getMinutes())
    const ss = prefix0(d.getSeconds())
    return `${yyyy}${MM}${dd}-${hh}${mm}${ss}`
}