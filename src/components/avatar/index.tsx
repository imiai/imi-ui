import React, { useState } from "react";
import './styles.scss';

interface IAvatarProps {
    src?: string,
    name?: string,
    unitString?: string,
    size?: 24 | 36 | 48 | 60 | 72 | 96;
}

const arrBgColor = ['#039be5', '#dce775', '#43a047', '#689f38', '#f9a825', '#ff8f00', '#ef6c00', '#37474f', '#607d8b', '#8d6e63', '#8d6e63', '#bf360c'];

const Avatar = (props: IAvatarProps) => {
    const { src = '', name = '', size = 20 } = props;
    const [isError, setIsError] = useState(false);

    const getBgColor = (unitString: string) => {
        let charIndex = 0;
        if (unitString && unitString.length > 0) {
            unitString.split('').map(char => {
                charIndex += char.charCodeAt(0);
            })
        }
        let bgIndex = Math.floor(charIndex % arrBgColor.length)
        return arrBgColor[bgIndex];
    }

    return (
        <div className="imiui-avatar">
            {src && !isError
                ?
                <img alt='' src={src} onError={() => setIsError(true)} className={`img img-${size}`}/>
                :
                <div className={`img img-${size}`} style={{background: getBgColor(name)}}>
                    <span>{name[0]}</span>
                </div>
            }
        </div>
    )
}

export default Avatar