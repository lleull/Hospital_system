"use server"
import { ID, Query } from "node-appwrite"
import { users } from "./../appwrite"
import { parseStringify } from "../utils"
export const createUser = async (user: CreateUserParams) => {
    try {
        // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
        const newuser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name
        );


    } catch (error: any) {
        // Check existing user
        if (error && error?.code === 409) {
            const existingUser = await users.list([
                Query.equal("email", [user.email]),
            ]);

            return existingUser.users[0];
        } else {
            return error
            console.log("Errrrorrrrrrrrrrrrrrrrr")
        }
    }
};

export const getUser = async (userId: string) => {
    try {
        const user = await users.get(userId)
        await parseStringify(user)
    } catch (error) {
        console.log("eeee", error)

    }

}