import { ImagePlaceholderIcon } from "icons";
import React, { useState } from "react";
import './styles.scss';

interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {

}

const Image = (props: IImageProps) => {
    const [ isError, setIsError ] = useState(false);
    const { className, src, ...rest} = props;

    const onError = () => {
        setIsError(true);
    }

    if (isError) {
        return (
            <div className={`imiui-image placeholder${className ? ` ${className}` : ''}`}>
                <ImagePlaceholderIcon />
            </div>
        )
    }

    return (
        <img {...rest} src={src || ''} className={`imiui-image${className ? ` ${className}` : ''}`} onError={onError}/>
    )
}

export default Image;