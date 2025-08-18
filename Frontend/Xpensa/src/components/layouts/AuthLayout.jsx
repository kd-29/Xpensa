import React from 'react'

const AuthLayout = ({children}) => {
                return <div>
                                <div className = "w-screen g-screen md:w-[60vw] px-12 pt-8 pb-12">
                                                <h2 className = "text-lg font-medium text-black ">Xpensa</h2>
                                        {children}
                                </div>
                        <div className = "hidden md:block w-[40vw] h-screen bg-gray-100">
                                <div className= "w-48 h-48 rounded-[40px] bg-purple-600 absolute -top-7-left-5"/>
                                <div className= "w-48 h-48 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%]"/>
                                <div className= "w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7-left-5"/>
                        </div>
                </div>;

}

export default AuthLayout;