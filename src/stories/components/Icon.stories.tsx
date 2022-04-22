import ICONS_DATA from '../assets/icons';
export default {
    title: 'Components/Icons',
}

export const List = () => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 24}}>
            {ICONS_DATA.map((icon) => {
                return (
                    <div key={icon.name} className='p-16' style={{border: '1px dashed #7B61FF', borderRadius: 5, width: 'calc((100% - 24px * 4) / 5)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {icon.name}
                        <div className='p-4'>{icon.demo}</div>
                        {icon.component}
                    </div>
                )
            })}
        </div>
    )
}