
export default function ModalRegister({ isRegister, handleRegister, handleLogin, }) {
	return (
		<>
			<div className={`modal fade modal-login ${isRegister ? "show d-block" : ""}`} id="exampleModalToggle2" aria-hidden="true" aria-label="exampleModalToggleLabel2" tabIndex={-1}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<button type="button" className="btn-close" onClick={handleRegister} aria-label="Close" />
						<div className="tfre_registration-form">
							<h2>Register:</h2>
							<div className="error_message tfre_message" />
							<form className="tfre_register" encType="multipart/form-data" id="tfre_custom-register-form">
								<div className="container">
									<div className="form-group">
										<label htmlFor="username">User Name:</label>
										<input type="text" name="username" id="usernames" placeholder="User name" required />
									</div>
									<div className="form-group">
										<label htmlFor="email">Email:</label>
										<input type="email" name="email" id="email-modal" placeholder="Email " required />
									</div>
									<div className="form-group">
										<label htmlFor="password">Password:</label>
										<input type="password" name="password" id="passwords" placeholder="Your passsword" required />
									</div>
									<div className="form-group">
										<label htmlFor="confirm_password">Confirm Password:</label>
										<input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm password" required />
									</div>
									<input type="hidden" name="action" defaultValue="tfre_register_ajax" />
									<button type="submit" className="flat-button">Sign Up</button>
								</div>
							</form>
						</div>
						<div className="container tfre_signin tfre_login_redirect cursor-pointer" id="tfre_login_redirect">
							<p>Already have an account? <a onClick={() => { handleLogin(); handleRegister() }} className="tfre_register">Sign in.</a></p>
						</div>
					</div>
				</div>
			</div>
			{isRegister &&
				<div className={`modal-backdrop fade show`} onClick={handleRegister} />
			}
		</>
	)
}
