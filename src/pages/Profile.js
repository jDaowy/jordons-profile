import React, { useState, useEffect } from 'react';
import List from '../components/List';
import Link from '../components/Link';
import './Profile.css';
import Format from '../components/Format'; // Step 1: Import the Format component

function Profile({ userName }) {
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});

    const items = [
        {
            field: 'html_url',
            value: <Link url={profile.html_url} title={profile.html_url} />,
        },
        {
            field: 'repos_url',
            value: <Link url={profile.repos_url} title={profile.repos_url} />,
        },
        { field: 'name', value: profile.name },
        { field: 'location', value: profile.location },
        { field: 'bio', value: profile.bio },
    ];

    useEffect(() => {
        async function fetchData() {
            const profile = await fetch(`https://api.github.com/users/${userName}`);
            const result = await profile.json();
            if (result) {
                setProfile(result);
                setLoading(false);
            }
        }
        fetchData();
    }, [userName]);

    // Step 2: Replace the existing return statement with the Format component
    return (
        <div className="profile-container">
        <Format
            leftContent={
                loading ? (
                    <span>Loading...</span>
                ) : (
                    <img
                        className='Profile-avatar'
                        src={profile.avatar_url}
                        alt={profile.name}
                    />
                )
            }
            rightContent={
                <div className='ProfileRight'>
                    <h2>About me</h2>
                    {loading ? (
                        <span>Loading...</span>
                    ) : (
                        <div className='ListItems'>
                            <List items={items} />
                        </div>
                    )}
                </div>

            }
            />
        </div>
    );
}

export default Profile;
