import firestore from '@react-native-firebase/firestore';

export const getUsers = async () => {

    return await firestore().collection('users').get();
} 


// export const getUserById = async (id) => {

//     return await firestore().collection('users').doc(id).get().;

// }