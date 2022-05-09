export default {
    title: 'Styles/Spacing',
}

export const spacing = () => {
    return (
        <>
            <p>{`The classes are named using the format `}<span style={{color: '#2F80ED'}}>{`{property}{sides}-{size}`}</span></p>

            <p className="mt-16">Where property is one of:</p>
            <ul className="mt-8 pl-16">
                <li className="my-2"><span style={{color: '#2F80ED'}}>m</span> - for classes that set margin</li>
                <li className="my-2"><span style={{color: '#2F80ED'}}>p</span> - for classes that set padding</li>
            </ul>

            <p className="mt-16">Where sides is one of:</p>
            <ul className="mt-8 pl-16">
                <li className="my-2"><span style={{color: '#2F80ED'}}>t</span> - for classes that set margin-top or padding-top</li>
                <li className="my-2"><span style={{color: '#2F80ED'}}>b</span> - for classes that set margin-bottom or padding-bottom</li>
                <li className="my-2"><span style={{color: '#2F80ED'}}>l</span> - for classes that set margin-left or padding-left</li>
                <li className="my-2"><span style={{color: '#2F80ED'}}>r</span> - for classes that set margin-right or padding-right</li>
                <li className="my-2"><span style={{color: '#2F80ED'}}>x</span> - for classes that set both *-left and *-right</li>
                <li className="my-2"><span style={{color: '#2F80ED'}}>y</span> - for classes that set both *-top and *-bottom</li>
                <li className="my-2"><span style={{color: '#2F80ED'}}>blank</span> - for classes that set a margin or padding on all 4 sides of the element</li>
            </ul>
            <p className="mt-16">Where size is one of: <span style={{color: '#2F80ED'}}>auto, 0, 1, 2, 4, 6, 8, 12, 16, 24, 28, 32, 48, 64, 80</span> (size * 2 = px)</p>

            <p className="mt-16">Example: pt-2 = padding-top: 4px</p>
        </>
    )
}
