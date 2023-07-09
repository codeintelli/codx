// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class CloudinaryService {
//     constructor(public cloudinary: CloudinaryService)
//     public async UploadFile(file, folder) {
//         const myCloud = await cloudinary.v2.uploader.upload(file, {
//             folder: `normal-boilerplates/${folder}`,
//         });
//         fs.unlink(file, (err) => {
//             if (err) throw err;
//             // console.log(`${file} was deleted`);
//         });
//         return {
//             public_id: myCloud.public_id,
//             url: myCloud.secure_url,
//         };
//     }
//     public async fileSizeConversion(size) {
//         if (size == 0) return "0 Bytes";
//         var k = 1000,
//             dm = 2,
//             sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
//             i = Math.floor(Math.log(size) / Math.log(k));
//         return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
//     }
//     public async RemoveFile(imageId) {
//         if (imageId == "") {
//             return new ErrorHandler.notFound("ImageID Can't Be Null");
//         }
//         return await cloudinary.v2.uploader.destroy(imageId);
//     }
// }
