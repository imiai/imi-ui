import './styles.scss';
interface IAvatarProps {
    src?: string;
    name?: string;
    unitString?: string;
    size?: 20 | 30 | 46;
}
declare const Avatar: (props: IAvatarProps) => JSX.Element;
export default Avatar;
