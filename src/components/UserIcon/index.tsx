import React from 'react';
import './usericon.css';

function UserIcon({ name, available }: { name: string, available: boolean }) {
    const colors = ["#2b963a", "#3498db", "#9b59b6", "#e74c3c", "#f1c40f", "#1abc9c", "#e67e22"];
    const randomColor = React.useMemo(() => {
        return colors[Math.floor(Math.random() * colors.length)];
    }, []); 

    const text = React.useMemo(() => {
        return name.split(" ").map((item: string) => item[0]).join("");
    }, [name]);

    return (
        <div className='usericon-container' style={{ backgroundColor: randomColor }}>
            <div className='usericon-text'>{text}</div>
            <div className={`user-status ${available && "available"}`}></div>
        </div>
    );
}

export default UserIcon;
