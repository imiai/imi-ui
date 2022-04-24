import React from "react";
import './styles.scss';

interface ITooltipProps {
    title: string;
    placement?: 'top | left | right',
    children: React.ReactNode;
}

const Tooltip = (props: ITooltipProps) => {
    const { title, placement = 'top', children } = props;
    return (
        <div className="imiui-tooltip">
            <span className={`tooltip ${placement} t-label-semibold-supertiny`}>{title}</span>
            {children}
        </div>
    )
}

export default Tooltip;