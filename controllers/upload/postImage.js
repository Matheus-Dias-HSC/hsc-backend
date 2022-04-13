const formidable = require('formidable');
const fs = require('fs');

module.exports = async (req, res) => {
    try {
        const form = formidable({ multiples: true });
    
        form.keepExtensions = true;
        form.uploadDir = process.env.NODE_ENV === 'local' ? 
            "D:\\" : 
            'C:\\inetpub\\wwwroot\\hsc\\media\\novidades\\';  
    
        form.parse(req, (err, fields, files) => {
          
            if (err) {
                return res.status(500).json({ 
                    msg: 'Error while trying to upload file',
                    err: err
                });
            }
    
            let responseObj = Object.keys(files).map(( el, index ) => `${files[el].path.replace(`${form.uploadDir}`, "https://hospitalsaocamilosp.org.br/media/novidades/")}`)

            return res.status(201).json({ uploaded: true, url: responseObj[0] });
        });
    } catch (err) {
        return res.status(500).json({ uploaded: false, error: { message: "Unable to upload this image" } })
    }

}

// fs.rename(files.image.path, `${form.uploadDir}${files.image.name}`, (err) => {
//     if (err) {
//         res.status(500).json({ 
//             msg: 'Error while trying to rename file uploaded',
//             err: err
//         });
//     }
// })