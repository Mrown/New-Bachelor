import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import {getSession, signIn, signOut, useSession} from "next-auth/react";
import { db, storage } from "../pages/firebase.config";
import { useRef, Fragment, useState, imageToPost, setImageToPost } from "react";
import { addDoc, collection, Firestore, getFirestore, serverTimestamp } from "firebase/firestore";

//import Image from "next/image";
//import { FirebaseAdapter } from "@next-auth/firebase-adapter";
//import { Firebase } from "firebase/app";

function Inputbox () {
    const {data : session} = useSession();
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = async (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        const docRef = await addDoc(collection(db, "posts"), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: serverTimestamp(),
        })
        .then((doc) => {
            if (imageToPost) {
                const uploadTask = storage
                .ref(`posts/${doc.id}`)
                .putString(imageToPost, "data_url");

                removeImage();

                uploadTask.on(
                "state_change", 
                null, 
                (error) => console.error(error),
                () => {
                    storage
                    .ref("posts")
                    .child(doc.id)
                    .getDownloadUrl()
                    .then((url) => {
                       db.collection("posts").doc(doc.id).set(
                           {
                           postImage: url,
                            },
                            { merge: true }
                        );
                    });
                }
            );
        }
    });
        inputRef.current.value ="";

    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        };
    };

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">

            <img
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
            alt="userimage" />

            <form className="flex flex-1">
            <input 
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={'Whats on your mind?'} />

            <button type="submit" onClick={sendPost} >Submit
            </button>
            </form>

            {imageToPost && (
                <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                    <img className="h-10 object-contain rounded-full" src={imageToPost} alt="uploaded image" />
                    <p className="text-xs text-red-500 text-center">Remove</p>
                </div>
            )}
        </div>
        
        <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
        <VideoCameraIcon className="h-7 text-red-500" />
        <p className="text-xs sm-text-sm xl:text-base">Go Video</p>
        </div>

        <div onClick={() => filepickerRef.current.click()} className="inputIcon">
        <CameraIcon className="h-7 text-gray-500" />
        <p className="text-xs sm-text-sm xl:text-base">Photo/video</p>
        <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden/>
        </div>

        <div className="inputIcon">
        <EmojiHappyIcon className="h-7 text-yellow-500" />
        <p className="text-xs sm-text-sm xl:text-base">Feeling/Activity</p>
        </div>
        </div>
        
        </div>
    )
}

export default Inputbox;