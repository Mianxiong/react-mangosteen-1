import { TopNav } from "../components/TopNav"
import { Gradient } from '../components/Gradient';
import { Icon } from "../components/Icon";

export const SignInPage: React.FC = () => {
    return (
        <div>
            <Gradient>
                <TopNav title="登录" icon={
                    <Icon name="back" />
                } />
                {/* <TimeRangePicker selected={timeRange} onSelected={key => setTimeRange(key)}/> */}
            </Gradient>
        </div>
    )
}