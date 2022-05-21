import './styles.scss';
interface ILabel {
    type: 'progress' | 'priority';
    priority?: 'high' | 'medium' | 'low';
    progress?: 'completed' | 'in-progress' | 'more-info' | 'draft';
    className?: string;
    content?: string;
}
declare const Label: (props: ILabel) => JSX.Element;
export default Label;
