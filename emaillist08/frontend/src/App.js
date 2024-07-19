import React, {useState, useEffect} from 'react';
import RegisterForm from './RegisterForm';
import SearchBar from './SearchBar';
import Emaillist from './Emaillist';
import './assets/scss/App.scss';

function App() {
    const [emails, setEmails] = useState(null);

    const addEmail = async (email) => {
        try {
            const response = await fetch('/api', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(email)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            
            // response: ok
            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            
            setEmails([json.data, ...emails]);

        } catch(e) {
            console.error(e);
        }
    };

    const fetchEmails = async (keyword) => {
        try {
            const response = await fetch(`/api?kw=${keyword ? keyword : ''}`, {
                method: 'get',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            
            // response: ok
            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            
            setEmails(json.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchEmails();
    }, []);

    return (
        <div id={'App'}>
            <RegisterForm addEmail={addEmail}/>
            <SearchBar fetchEmails={fetchEmails} />
            <Emaillist emails={emails} />
        </div>
    );
}

export default App;