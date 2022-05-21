import React from "react";
import './styles.scss';

interface ILabel {
    type: 'progress' | 'priority';
    priority?: 'high' | 'medium' | 'low';
    progress?: 'completed' | 'in-progress' | 'more-info' | 'draft';
    className?: string;
    content?: string;
}

const Label = (props: ILabel) => {
    const { type, content, priority, progress, className } = props;

    return (
        <div className={`imiui-label ${type}${priority ? ` ${priority}` : ''}${progress ? ` ${progress}` : ''}${className ? ` ${className}` : ''}`}>
            <span className="t-label-semibold-supertiny c-primary-white">{content}</span>
        </div>
    )
}

export default Label;