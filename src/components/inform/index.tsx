import { CloseIcon } from "../../icons";
import React, { useEffect, useState } from "react";
import './styles.scss';

interface IInformProps extends React.HTMLAttributes<HTMLDivElement> {
    severity: 'success' | 'info' | 'warning' | 'error';
    content: string;
    icon?: React.ReactNode;
    closeable?: Boolean;
}

const Inform = (props: IInformProps) => {
    const { closeable = false, icon, severity, content, className, ...rest} = props;
    const [ visible, setVisible ] = useState(true);
    const [ iconAlignTop, setIconAlignTop ] = useState(false);

    const iconClone = React.isValidElement(icon) ? React.cloneElement(icon, { className: 'left-icon'}) : icon
    
    useEffect(() => {
        const el = document.getElementById('imiui-inform');
        if (el && el.clientHeight > 52) {
            setIconAlignTop(true)
        } else {
            setIconAlignTop(false)
        }
    }, [])
    
    if (!visible) {
        return <></>
    }

    return (
        <div id='imiui-inform' {...rest} className={`imiui-inform ${severity}${className ? ` ${className}` : ''}${iconAlignTop ? ` icon-align-top` : ''}`}>
            {iconClone}
            <p className="content t-label-regular-supertiny m-0">{content}</p>
            {closeable && <button onClick={() => setVisible(false)} className='close-button'>
                <CloseIcon className="close-icon"/>
            </button>}
        </div>
    )
}

export default Inform