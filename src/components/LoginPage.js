const LoginPage = ({ userDetail}) => {
    return (
        <div className='table-responsive mt-5'>
            <table className="table table-hover table-success table-striped">
                <tbody>
                    <tr>
                        <td>First name</td>
                        <td>Last Name</td>
                        <td>Phone</td>
                        {/* <td>Date of Birth</td> */}
                        <td>Email</td>
                        <td>Password</td>
                        <td>State</td>
                    </tr>
                    <tr>
                        <td>{userDetail?.data?.firstName}</td>
                        <td>{userDetail?.data?.lastName}</td>
                        <td>{userDetail?.data?.phone}</td>
                        <td>{userDetail?.data?.email}</td>
                        <td>{userDetail?.data?.password}</td>
                        <td>{userDetail?.data?.state}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LoginPage;
