import React, {useEffect, useState} from 'react';
import {db} from "../firebase";
import {useAuth} from "../lib/auth";
import withAuth from "../hocs/withAuth";

export const Username = () => {
    const { user } = useAuth();
    const [username, setUsername] = useState(null);

    useEffect( () => {
        if(!! user){
        const getUser = async() => {
            db.ref(`users/${user.uid}/username`).on('value', (snapshot) => {
                const data = snapshot.val();
                setUsername(data);
            });
        };
        getUser();
        return () => {
            db.ref(`users/${user.uid}/username` ).off();
        };
        }
    }, []);
    return {username} ;
};
