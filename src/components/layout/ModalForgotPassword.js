
export default function ModalForgotPassword({ isForgotPass, handleForgotPass, handleLogin }) {
	return (
		<>
			<div className={`modal fade modal-login ${isForgotPass ? "show d-block" : ""}`} id="exampleModalToggle3" aria-hidden="true" aria-label="exampleModalToggleLabel3" tabIndex={-1}>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<button type="button" className="btn-close" onClick={handleForgotPass} aria-label="Close" />
						<div className="tfre-resset-password container">
							<div className="tfre_messages message tfre_messages_reset_password" />
							<form encType="multipart/form-data">
								<h4>Forgot your password?</h4>
								<div className="form-group control-username">
									<input name="user_login" className="form-control control-icon reset_password_user_login" placeholder="Enter your username or email" />
									<input type="hidden" name="tfre_security_reset_password" defaultValue="667584e015" />
									<input type="hidden" name="action" defaultValue="tfre_reset_password_ajax" />
									<button type="submit" className="btn flat-button btn-block tfre_forgetpass">Get new
										password</button>
								</div>
							</form>
						</div>
						<a onClick={() => { handleLogin(); handleForgotPass() }} data-bs-toggle="modal" data-bs-dismiss="modal" className="tfre_login_redirect">Back to Login</a>
					</div>
				</div>
			</div>
			{isForgotPass &&
				<div className={`modal-backdrop fade show`} onClick={handleForgotPass} />
			}
		</>
	)
}
