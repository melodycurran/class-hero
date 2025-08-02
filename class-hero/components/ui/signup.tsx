'use client'
import { Button } from "./button";
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState, useActionState } from "react"
import { Input } from "./input";
import { toast } from "sonner";
import { registerUser } from "@/lib/actions";
import PwInput from "./pwInput";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import '@/app/styles/phone-input-overrides.css'

export default function SignUpForm() {
    const [pageNumber, setpageNumber] = useState(1)
    const [isReady, setIsReady] = useState('')
    const initialState = { message: '', errors: {}, success: false }
    const [state, formAction] = useActionState(registerUser, initialState)
    const [ph, setPh] = useState('')
    const [country, setCountry] = useState('us')

    return (
        <form action={formAction} className="leading-5 flex flex-col w-full font-sans text-[12px] mt-5">

            <div className={pageNumber === 1 ? 'block' : 'hidden'}>
                <label htmlFor="fname">Firstname: </label>
                <Input type="text" id="fname" name="fname" placeholder="Enter your first name only" className="border border-1px border-gray-500 rounded-[7px] px-1 w-full mb-2 h-7" required aria-required />
                {state?.errors?.fname?.map((err) => toast(err))}

                <label htmlFor="lname" >Last name: </label>
                <Input type="text" id="lname" name="lname" placeholder="Enter your last name only" className="border border-1px border-gray-500 rounded-[7px] px-1 w-full mb-2 h-7" required aria-required />
                {state?.errors?.lname?.map((err) => toast(err))}

                <label htmlFor="email" >Email: </label>
                <Input type="text" id="email" name="email" placeholder="Enter your email address" className="border border-1px border-gray-500 rounded-[7px] px-1 w-full mb-2 h-7" />
                {state?.errors?.email?.map((err) => toast(err))}
                <div className="flex justify-end mt-5 text-(--ring)" >
                    <ArrowRight className="w-5 hover:text-black" onClick={() => {
                        setpageNumber(2)
                    }} />
                </div>
            </div>

            <div className={pageNumber === 2 ? 'block' : 'hidden'}>
                <label htmlFor="ph">Phone number: </label>

                <PhoneInput country={country} value={ph} onChange={(phNumber, countryData) => {
                    setPh(phNumber)
                    if ('countryCode' in countryData) {
                        setCountry(countryData.countryCode)
                    }
                }}
                    inputProps={{
                        type: 'tel',
                        name: 'ph',
                        required: true,
                        className: "border border-1px border-gray-500 rounded-[7px] pl-[3rem] w-full mb-2 h-7 text-sm",
                        id: 'ph',
                        min: 10,
                        placeholder: "Enter your phone number"
                    }}

                />
                {state?.errors?.ph?.map((err) => toast(err))}

                <PwInput />
                {state?.errors?.pw?.map((err) => toast(err))}

                <label htmlFor="account_type">Are you a:  <select id="account_type" name="type" className="border border-1px border-gray-500 rounded-[7px]">
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
            <input type="hidden" name="account_type" value="free" />
            <input type="hidden" name="created_at" value={`${new Date()}`} />

            <div className={pageNumber === 3 ? 'block' : 'hidden'}>
                <h3>Agree to the following to proceed with the process</h3>
                <div className="flex flex-col justify-center mt-5">
                    <label htmlFor="termsCheckbox" className="text-[10px] flex gap-2"><input type="checkbox" id="termsCheckbox" required /> Terms and Agreements</label>
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
                    <button type="button" className={`py-5p bg-(--chart-4) w-1/3 p-2 font-semibold ${isReady === 'yes' && 'opacity-50'}`} onClick={(e) => {
                        e.preventDefault()
                        setIsReady('yes')
                    }}>Yes</button>
                    <button type="button" className={`py-5p bg-(--chart-4) w-1/3 p-2 font-semibold ${isReady === 'no' && 'opacity-50'}`} onClick={(e) => {
                        e.preventDefault()
                        setIsReady('no')
                    }}>No</button>
                </div>
                <Button type="submit" className="text-[12px] w-full mt-4"
                    disabled={isReady === 'no' || isReady === ''}
                    onClick={() => {
                        toast('submitting')
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