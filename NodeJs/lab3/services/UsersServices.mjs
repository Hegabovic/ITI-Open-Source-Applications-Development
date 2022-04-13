import {readFileSync} from "fs";
import {FileHandler} from '../utilities/FileHandler.mjs';


export class UsersServices {


    static signUp(newUser) {
        let user = UsersServices.findUserByName(newUser.userName);
        if(user === undefined){
            let  users = UsersServices.getUsers();
            users.push(newUser)
            FileHandler.createJsonFile("usersData",users)
            return {
               success : true,
                message:"User has been created successfully"
            }
        }
        return {
            success : false,
            message:" User name is already exists "
        }
    }


    static login(currentUser) {
        let user = UsersServices.findUserByName(currentUser.userName);
        if(!(user === undefined)){
            UsersServices.getUsers().find(value => {
                if (value.password === currentUser.password){
                    return {
                        success : true,
                        message:"Logged in successfully"
                    }
                }
                return {
                    success : false,
                    message:"Try Again Later"
                }
            })
        }

    }


    static findUserByName(username) {
        return UsersServices.getUsers().find(value => {
            if (value.userName === username)
                return value;
        });

    }

    static getUsers() {
        return FileHandler.readJsonFile("usersData");
    }
}

