'use client'
import { Button } from "./button";
import { Eye, EyeOff, ArrowLeft, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Input } from "./input";
import { useActionState } from "react";
import { toast } from "sonner";



export default function SignUpForm() {
    const [showPw, setshowPw] = useState(false)
    const [pageNumber, setpageNumber] = useState(1)
    const [isReady, setIsReady] = useState('')
    const [submitStatus, setsubmitStatus] = useState('')
    // const [errorMessage, formAction, isPending] = useActionState(registerUser, undefined)

    function handlePwVisibility() {
        setshowPw((prevState) => !prevState)
    }

    useEffect(() => {
        if (submitStatus === 'submitting') {
            toast("Submitting data...")
        }
        setsubmitStatus("")
    }, [submitStatus])



    return (
        <form className="leading-5 flex flex-col w-full font-sans text-[12px] mt-5">

            <div className={pageNumber === 1 ? 'block' : 'hidden'}>
                <label htmlFor="fname">Firstname: </label>
                <Input type="text" id="fname" name="fname" placeholder="Enter your first name only" className="border border-1px border-gray-500 rounded-[7px] px-1 w-full mb-2 h-7" />

                <label htmlFor="lname" >Last name: </label>
                <Input type="text" id="lname" name="lname" placeholder="Enter your last name only" className="border border-1px border-gray-500 rounded-[7px] px-1 w-full mb-2 h-7" />

                <label htmlFor="email" >Email: </label>
                <Input type="text" id="email" name="email" placeholder="Enter your email address" className="border border-1px border-gray-500 rounded-[7px] px-1 w-full mb-2 h-7" />
                <div className="flex justify-end mt-5 text-(--ring)" >
                    <ArrowRight className="w-5 hover:text-black" onClick={() => {
                        setpageNumber(2)
                    }} />
                </div>
            </div>

            <div className={pageNumber === 2 ? 'block' : 'hidden'}>
                <label htmlFor="ph">Phone number: </label>
                <Input type="text" id="ph" name="ph" placeholder="Enter your phone number" className="border border-1px border-gray-500 rounded-[7px] px-1 w-full mb-2 h-7" />

                <div className="mb-2 relative">
                    <label htmlFor="pw">Password: </label>
                    <Input type={showPw ? 'text' : 'password'} id="pw" name="pw" placeholder="Enter your password" className="border border-1px border-gray-500 rounded-[7px] w-full text-10 h-7" />
                    <span className="h-3 bottom-9 right-2 absolute" onClick={handlePwVisibility}>
                        {showPw ? <Eye className="w-4 " /> : <EyeOff className="w-4" />}
                    </span>
                    <span className="text-[9px] italic mb-2">Mininum Character is 6</span>
                </div>


                <label htmlFor="account_type">Are you a:  <select id="account_type" name="account_type" className="border border-1px border-gray-500 rounded-[7px]">
                    <option value=""></option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                    <option value="donee">Donor</option>
                </select></label>
                <div className="flex justify-between mt-5 text-(--ring)">
                    <ArrowLeft className="w-5 hover:text-black" onClick={() => {
                        setpageNumber(1)
                    }} />
                    <ArrowRight className="w-5 hover:text-black" onClick={() => {
                        setpageNumber(3)
                    }} />
                </div>
            </div>

            <div className={pageNumber === 3 ? 'block' : 'hidden'}>
                <h3>Agree to the following to proceed with the process</h3>
                <div className="flex flex-col justify-center mt-5">
                    <label htmlFor="termsCheckbox" className="text-[10px] flex gap-2"><input type="checkbox" id="termsCheckbox" /> Terms and Agreements</label>
                    <label htmlFor="privacyCheckbox" className="text-[10px] flex gap-2"><input type="checkbox" id="privacyCheckbox" />Privacy Policy</label>
                </div>
                <div className="flex justify-between mt-5 text-(--ring)">
                    <ArrowLeft className="w-5 hover:text-black" onClick={() => {
                        setpageNumber(2)
                    }} />
                    <ArrowRight className="w-5 hover:text-black" onClick={() => {
                        setpageNumber(4)
                    }} />
                </div>
            </div>
            <div className={pageNumber === 4 ? 'block' : 'hidden'}>
                <h3>Are you sure you entered everything correctly?</h3>
                <div className="flex gap-6 justify-center mt-3 w-full text-center">
                    <button className={`py-5p bg-(--chart-4) w-1/3 p-2 font-semibold ${isReady === 'yes' && 'opacity-50'}`} onClick={(e) => {
                        e.preventDefault()
                        setIsReady('yes')
                    }}>Yes</button>
                    <button className={`py-5p bg-(--chart-4) w-1/3 p-2 font-semibold ${isReady === 'no' && 'opacity-50'}`} onClick={(e) => {
                        e.preventDefault()
                        setIsReady('no')
                    }}>No</button>
                </div>
                <Button className="text-[12px] w-full mt-4" disabled={isReady === 'no' || isReady === ''} onClick={(e) => {
                    e.preventDefault()
                    setsubmitStatus('submitting')
                }}>SUBMIT</Button>
                <div className="flex justify-between mt-5 text-(--ring)">
                    <ArrowLeft className="w-5 hover:text-black" onClick={() => {
                        setpageNumber(3)
                    }} />
                </div>
            </div>

        </form>
    )
}