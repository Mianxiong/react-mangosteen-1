import { TopNav } from "../components/TopNav"
import { Gradient } from '../components/Gradient';
import { Icon } from "../components/Icon";
import s from './SignInPage.module.scss';
import c from 'classnames'
import { FormEventHandler } from "react";
import { useSignInStore } from "../stores/useSignInStore";
import { validate, hasError } from '../lib/validate';
import { ajax } from '../lib/ajax';
const rules = [
    { key: 'email', type: 'required', message: '请输入邮箱地址' },
    { key: 'email', type: 'pattern', regex: /^.+@.+$/, message: '邮箱地址格式不正确' },
    { key: 'code', type: 'required', message: '请输入验证码' },
    { key: 'code', type: 'length', min: 4, max: 6, message: '验证码必须是6个字符' }
]
export const SignInPage: React.FC = () => {
    const { data, setData, error, setError } = useSignInStore()
    const x = (key?: keyof typeof data) => {
        const d = key ? { [key]: data[key] } : data
        const r = key ? rules.filter(rule => rule.key === key) : rules
        const error = validate(d, r as any)
        console.log('error', error)
        setError(error)   
    }
    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        // x(data)
        x()
    }
    return (
        <div>
            <Gradient>
                <TopNav title="登录" icon={
                    <Icon name="back" />
                } />
            </Gradient>
            <div className={s.top}>
                <Icon name="logo" className={s.logo} />
                <h1>山竹记账</h1>
            </div>
            <form className={s.form} onSubmit={onSubmit}>
                {/* <div style={{ border: '1px solid red' }}>{JSON.stringify(data)}</div> */}
                <div>
                    <span className={s.label}>邮箱地址{error.email?.[0] && <span style={{ color: 'red' }}>{error.email[0]}</span>}</span>
                    <input type="text" placeholder='请输入邮箱，然后点击发送验证码' className={s.input} value={data.email} onChange={e => setData({ email: e.target.value })} />
                    {/* onBlur={() => x('email')} */}
                </div>
                <div>
                    <span className={s.label}>验证码{error.code?.[0] && <span style={{ color: 'red' }}>{error.code[0]}</span>}</span>
                    <div className={s.verification}>
                        <input type="text" placeholder='六位数字' className={c(s.input, s.inputVerification)} value={data.code} onChange={e => setData({ code: e.target.value })} />
                        {/* onBlur={() => x('code')} */}
                        <button className={c(s.btn, s.btn_ml)}>发送验证码</button>
                    </div>
                </div>
                <div>
                    <button type="submit" className={s.btn}>登录</button>
                </div>
            </form>
        </div>
    )
}