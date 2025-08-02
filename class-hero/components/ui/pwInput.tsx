import { useState } from "react";
import { Input } from "./input";
import { Eye, EyeOff } from "lucide-react"

const pwRules = {
    minLength: (pw: string) => pw.length >= 8,
    hasLowercase: (pw: string) => /[a-z]/.test(pw),
    hasUppercase: (pw: string) => /[A-Z]/.test(pw),
    hasNumber: (pw: string) => /\d/.test(pw),
    hasSpecialChar: (pw: string) => /[@$!%*?&]/.test(pw),
};

export default function PwInput() {
    const [pw, setPw] = useState('')
    const [showPw, setshowPw] = useState(false)
    const rules = {
        minLength: pwRules.minLength(pw),
        hasLowercase: pwRules.hasLowercase(pw),
        hasUppercase: pwRules.hasUppercase(pw),
        hasNumber: pwRules.hasNumber(pw),
        hasSpecialChar: pwRules.hasSpecialChar(pw)
    }

    const isValidPw = Object.values(rules).every(Boolean)
    function handlePwVisibility() {
        setshowPw((prevState) => !prevState)
    }

    return (
        <div className="mb-2 relative">
            <label htmlFor="pw">Password: </label>
            <Input type={showPw ? 'text' : 'password'} id="pw" name="pw" min="8" placeholder="Enter your password" className="border border-1px border-gray-500 rounded-[7px] w-full text-10 h-7" required onChange={(e) => {
                setPw(e.target.value)
            }} />
            <span className="h-3 top-5 right-2 absolute" onClick={handlePwVisibility}>
                {showPw ? <Eye className="w-4 " /> : <EyeOff className="w-4" />}
            </span>
            {pw !== '' &&
                <ul className="text-[9px]">
                    <li className={rules.minLength ? 'text-green-500' : 'text-red-500'}>
                        {rules.minLength ? '√' : 'X'} Minimum is 8 characters
                    </li>
                    <li className={rules.hasLowercase ? 'text-green-500' : 'text-red-500'}>
                        {rules.hasLowercase ? '√' : 'X'} Has lowercase letter
                    </li>
                    <li className={rules.hasUppercase ? 'text-green-500' : 'text-red-500'}>
                        {rules.hasUppercase ? '√' : 'X'} Has uppercase letter
                    </li>
                    <li className={rules.hasNumber ? 'text-green-500' : 'text-red-500'}>
                        {rules.hasNumber ? '√' : 'X'} Has a number
                    </li>
                    <li className={rules.hasSpecialChar ? 'text-green-500' : 'text-red-500'}>
                        {rules.hasSpecialChar ? '√' : 'X'} Has any of these special characters @$!%*?&
                    </li>
                </ul>
            }

        </div>
    )
}