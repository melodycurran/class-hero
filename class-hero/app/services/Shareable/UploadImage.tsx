// import ImageKit from "imagekit"

// export default function UploadImage() {
//     var imagekit = new ImageKit({
//         publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY ?? '',
//         privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY ?? '',
//         urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ?? ''
//     });

//     const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {

//         const file = e.target.files ? e.target.files[0] : null

//         const imageRef = await imagekit.upload({
//             file: file,
//             fileName: 'Sample.png',
//             isPublished: true
//         })


//     }
//     return (
//         <>
//             <label htmlFor="uploadImage">
//                 <h2 className="bg-black text-white p-2 w-1/2 rounded-(--radius) text-center text-xs font-sans">Upload Image</h2>
//             </label>
//             <input type="file" id="uploadImage" className="hidden" onChange={handleFileUpload} multiple={false} />
//         </>
//     )
// }