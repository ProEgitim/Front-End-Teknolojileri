import { auth, provider, storage } from "../Firebase";
import db from '../Firebase'
import { SET_USER , SET_LOADİNG_STATUS } from "./actionType";

export const setUser = (payload) =>({
    type : SET_USER,
    user:payload,
});

export const setLoading = (status)=>({
    type : SET_LOADİNG_STATUS,
    status : status,
})

export function signInAPI(){
    return (dispatch)=>{
        auth.signInWithPopup(provider).then((payload)=>{
            dispatch(setUser(payload.user));
        }).catch((error)=>alert(error.message));
    }
}



export function getUserAuth(){
    return (dispatch)=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                dispatch(setUser(user))
            }
        })
    }
}

export function signOutAPI(){
    return (dispatch)=>{
        auth.signOut().then(()=>{
            dispatch(setUser(null));
        }).catch((error)=>alert(error.message));
    }
}

export function postArticleAPI(payload){
    return(dispatch)=>{
        dispatch(setLoading(true));

        if(payload.image !== ''){
            const upload = storage
            .ref(`images/${payload.image.name}`)
            .put(payload.image);
            upload.on('state_changed' , (snapshot)=>{
                const progress = (
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                    console.log(`Progress: ${progress}%`);
                    if(snapshot.state === 'RUNNİNG'){
                        console.log(`Progress: ${progress}%`);
                    }
            }, error => console.log(error.code),
            async ()=> {
                const downloadURL = await upload.snapshot.ref.getDownloadURL();
                db.collection('articles').add({
                    actor: {
                        description :payload.user.email,
                        title: payload.user.displayName,
                        date: payload.timestamp,
                        image: payload.user.photoURL
                    },
                    video: payload.video,
                    sharedImg: downloadURL,
                    comments:0,
                    description: payload.description,
                });
                dispatch(setLoading(false));
            }
            ); 
           

        } else if(payload.video){
           db.collection('articles').add({
               actor: {
                   description :payload.user.email,
                    title: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL
               },
               video: payload.video,
               sharedImg: "",
               comments:0,
               description: payload.description,

           });
           dispatch(setLoading(false));
        }
    }
}

export function getArticlesAPI() {
return (dispatch) => {
    let payload;

    db.collection('articles').orderBy('actor.date' , 'desc')
    .onSnapshot((snapshot)=> {
        payload = snapshot.docs.map((doc)=> doc.data())
    } )
}
}