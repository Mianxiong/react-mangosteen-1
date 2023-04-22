import s from "./Tags.module.scss"
type Props = {
    kind: Item['kind']
}
export const Tags: React.FC<Props> = (props) => {
    const {kind} = props
    console.log(kind)
    const tags = Array.from({ length: 99 })
    return (
        <div>
            <ol className={s.Tags_ol}>
                {tags.map(tag => 
                    <li className={s.Tags_li}>😆</li>
                )}
            </ol>
        </div>
    )
}