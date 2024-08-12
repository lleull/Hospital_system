import * as sdk  from "appwrite"

export const {
    PROJECT_ID,API_KEY,DATABASE_KEY,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_STORAGE_ID : BUCKET_ID,
    NEXT_PUBLIC_ENDPOINT:ENDPOINT 
} = process.env



    const client = new sdk.Client()
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!);

export const databases = new sdk.Databases(client);    
export const Auth = new sdk.Account(client); 
export const stoarge = new sdk.Storage(client);  
export const functions = new sdk.Functions(client);    
export const users = new sdk.Account(client)
export { ID } from 'appwrite';


