import { TopNav } from "../components/TopNav"
import { Gradient } from '../components/Gradient';
import { Icon } from "../components/Icon";
import s from './SignInPage.module.scss';
import c from 'classnames'
export const SignInPage: React.FC = () => {
    return (
        <div>
            <Gradient>
                <TopNav title="登录" icon={
                    <Icon name="back" />
                } />
            </Gradient>
            <div className={s.top}>
                <Icon name="logo" className={s.logo}/>
                <h1>山竹记账</h1>
            </div>
            <form className={s.form}>
                <div>
                    <span className={s.label}>邮箱地址</span>
                    <input type="text" placeholder='请输入邮箱，然后点击发送验证码' className={s.input}/>
                </div>
                <div>
                    <span className={s.label}>验证码</span>
                    <div className={s.verification}>
                        <input type="text" placeholder='六位数字' className={c(s.input, s.inputVerification)}/>
                        <button className={c(s.btn,s.btn_ml)}>发送验证码</button>
                    </div>
                </div>
                <div>
                    <button type="submit" className={s.btn}>登录</button>
                </div>
            </form>
        </div>
    )
}