const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="bg-gradient-to-r from-sky-800 via-sky-400 to-sky-800 h-full flex items-center justify-center">
            {children}
        </div>
     );
}
 
export default AuthLayout;