import { EyeOpen } from 'icons';
import ICONS_DATA from '../assets/icons';
export default {
    title: 'Components/Icons',
    argTypes: {
        fill: {
            control: {
                type: 'color',
                presetsColors: ['#ff0000', '#00ff00', '#0000ff'],
            },
            defaultValue: '#7790A6'
        },
        width: {
            type: { name: 'number' },
            defaultValue: 24
        },
        height: {
            type: { name: 'number' },
            defaultValue: 24
        }
    },
}

export const List = () => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 24}}>
            {ICONS_DATA.map((icon) => {
                return (
                    <div key={icon.name} className='p-16' style={{border: '1px dashed #7B61FF', borderRadius: 5, width: 'calc((100% - 24px * 3) / 4)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {icon.name}
                        <div className='p-4'>{icon.demo}</div>
                        {icon.component}
                    </div>
                )
            })}
        </div>
    )
}

export const Base = (args: any) => {
    return (
        <EyeOpen width={args.width} height={args.height} fill={args.fill}/>
    )
}