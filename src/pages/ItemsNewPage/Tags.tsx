import s from "./Tags.module.scss"
import { Icon } from '../../components/Icon';
type Props = {
    kind: Item['kind']
}
export const Tags: React.FC<Props> = (props) => {
    const { kind } = props
    console.log(kind)
    const tags = Array.from({ length: 91 })
    return (
        <div>
            <ol className={s.Tags_ol}>
                <li>
                    <span className={s.icon}><Icon name="add" /></span>
                </li>
                {tags.map(tag =>
                    <li className={s.Tags_li}>
                        <span className={s.top}>😆</span>
                        <span className={s.bottom}>打车</span>
                    </li>
                )}
            </ol>
        </div>
    )
}