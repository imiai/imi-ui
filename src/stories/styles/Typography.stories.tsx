export default {
    title: 'Styles/Typography',
}

const HeadingRegular = [
    't-heading-regular-superlarge', 't-heading-regular-large', 't-heading-regular-medium', 't-heading-regular-small', 't-heading-regular-tiny', 't-heading-regular-supertiny'
]

const HeadingBold = [
    't-heading-bold-superlarge', 't-heading-bold-large', 't-heading-bold-medium', 't-heading-bold-small', 't-heading-bold-tiny', 't-heading-bold-supertiny'
]


const LabelRegular = [
    't-label-regular-large', 't-label-regular-medium', 't-label-regular-small', 't-label-regular-tiny', 't-label-regular-supertiny'
]

const LabelSemiBold = [
    't-label-semibold-large', 't-label-semibold-medium', 't-label-semibold-small', 't-label-semibold-tiny', 't-label-semibold-supertiny'
]

const LabelBold = [
    't-label-bold-large', 't-label-bold-medium', 't-label-bold-small', 't-label-bold-tiny', 't-label-bold-supertiny'
]



const BodyRegular = [
    't-body-regular-large', 't-body-regular-medium', 't-body-regular-small', 't-body-regular-tiny', 't-body-regular-supertiny'
]

const BodyBold = [
    't-body-bold-large', 't-body-bold-medium', 't-body-bold-small', 't-body-bold-tiny', 't-body-bold-supertiny'
]

export const Label = () => {
    return (
        <>
            {/* LABEL */}
            <p>========== Label Regular ==========</p>
            {LabelRegular.map(item => {
                return (
                    <p className={item}>{item}</p>
                )
            })}
            <hr style={{margin: '16px 0'}}/>
            <p>========== Label SemiBold ==========</p>
            {LabelSemiBold.map(item => {
                return (
                    <p className={item}>{item}</p>
                )
            })}
            <hr style={{margin: '16px 0'}}/>
            <p>========== Label Bold ==========</p>
            {LabelBold.map(item => {
                return (
                    <p className={item}>{item}</p>
                )
            })}
        </>
    )
}

export const Body = () => {
    return (
        <>
            {/* BODY */}
            <p>========== Body Regular ==========</p>
            {BodyRegular.map(item => {
                return (
                    <p className={item}>{item}</p>
                )
            })}
            <hr style={{margin: '16px 0'}}/>
            <p>========== Body Bold ==========</p>
            {BodyBold.map(item => {
                return (
                    <p className={item}>{item}</p>
                )
            })}
        </>
    )
}
export const Heading = () => {
    return (
        <>
            {/* HEADING */}
            <p>========== Heading Regular ==========</p>
            {HeadingRegular.map(item => {
                return (
                    <p className={item}>{item}</p>
                )
            })}
            <hr style={{margin: '16px 0'}}/>
            <p>========== Heading Bold ==========</p>
            {HeadingBold.map(item => {
                return (
                    <p className={item}>{item}</p>
                )
            })}
        </>
    )
}