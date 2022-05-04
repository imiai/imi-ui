import './styles.scss';
interface IAvatarProps {
    src?: string;
    name?: string;
    unitString?: string;
    size?: 24 | 36 | 48 | 60 | 72 | 96;
}
declare const Avatar: (props: IAvatarProps) => JSX.Element;
export default Avatar;
