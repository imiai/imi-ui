export default {
    title: 'Styles/Color',
    argTypes: {
        colorClass: {
            type: { name: 'string' },
            defaultValue: 'c-primary-blue'
        },
        backgroundColorClass: {
            type: { name: 'string' },
            defaultValue: 'bg-primary-dark'
        }
    },
}

const PRIMARY = ['blue', 'orange', 'dark', 'background', 'white'];
const SECONDARY = ['red', 'green'];
const STATUS = ['success', 'warning', 'error']
const BLUE_NAVY_ORANGE_GREEN = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const RED_DARK = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const GRAY = ['25', '50', '100', '200', '300', '400'];

export const List = () => {
    return (
        <div>
            <p>{`Color format `}<span style={{ color: '#2F80ED' }}>{`c-{hue}-{shade}`}</span></p>
            <p>{`BackgroundColor format `}<span style={{ color: '#2F80ED' }}>{`bg-{hue}-{shade}`}</span></p>
            <hr className="my-8"/>
            <p>hue: primary</p>
            <p>shade: {PRIMARY.map(color => `${color} | `)}</p>
            <hr className="my-8"/>
            <p>hue: secondary</p>
            <p>shade: {SECONDARY.map(color => `${color} | `)}</p>
            <hr className="my-8"/>
            <p>hue: status</p>
            <p>shade: {STATUS.map(color => `${color} | `)}</p>
            <hr className="my-8"/>
            <p>hue: blue | navy | orange | green</p>
            <p>shade: {BLUE_NAVY_ORANGE_GREEN.map(color => `${color} | `)}</p>
            <hr className="my-8"/>
            <p>hue: red | dark</p>
            <p>shade: {RED_DARK.map(color => `${color} | `)}</p>
            <hr className="my-8"/>
            <p>hue: gray</p>
            <p>shade: {GRAY.map(color => `${color} | `)}</p>
            <hr className="my-8"/>
        </div>
    )
}

export const Base = (args: any) => {
    return (
        <div className={`${args.colorClass} ${args.backgroundColorClass} p-8`}>
            <p>colorClassName: {args.colorClass}</p>
            <p>backgroundColorClassName: {args.backgroundColorClass}</p>
        </div>
    )
}