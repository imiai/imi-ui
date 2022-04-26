import React from "react";
import './styles.scss';
interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
}
declare const Image: (props: IImageProps) => JSX.Element;
export default Image;
