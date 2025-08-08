import React from 'react'

const AuthLayout = ({children}) => {
                return <div>
                                <div className = "w-screen g-screen md:w-[60vw] px-12 pt-8 pb-12">
                                                <h2 className = "text-lg font-medium text-black ">Xpensa</h2>
                                        {children}
                                </div>
                </div>;

}

export default AuthLayout;