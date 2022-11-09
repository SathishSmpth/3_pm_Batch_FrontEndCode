const LoginPage = ({ userDetail}) => {
    return (
        <div className='table-responsive mt-5'>
            <table className="table table-hover table-success table-striped">
                <tbody>
                    <tr>
                        <td>First name</td>
                        <td>Second Name</td>
                        <td>Date of Birth</td>
                        <td>Gender</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Address Line 1</td>
                        <td>Address Line 2</td>
                        <td>City</td>
                        <td>State</td>
                        <td>Pin</td>
                    </tr>
                    <tr>
                        <td>{userDetail.data.data.FirstName}</td>
                        <td>{userDetail.data.data.LastName}</td>
                        <td>{userDetail.data.data.DateOfBirth}</td>
                        <td>{userDetail.data.data.Gender}</td>
                        <td>{userDetail.data.data.Email}</td>
                        <td>{userDetail.data.data.Password}</td>
                        <td>{userDetail.data.data.Address[0]}</td>
                        <td>{userDetail.data.data.Address[1]}</td>
                        <td>{userDetail.data.data.City}</td>
                        <td>{userDetail.data.data.State}</td>
                        <td>{userDetail.data.data.Pin}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LoginPage;
