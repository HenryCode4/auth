const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="bg-gradient-to-r from-purple-700 via-purple-400 to-purple-800 h-full flex items-center justify-center">
            {children}
        </div>
     );
}
 
export default AuthLayout;